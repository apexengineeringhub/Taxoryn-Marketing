import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const outDir = path.resolve("out");
const PORT = 3630;
const debugPort = 9270;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split("?")[0];
  if (reqPath.endsWith("/")) reqPath += "index.html";
  let filePath = path.join(outDir, reqPath);

  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + ".html")) {
      filePath += ".html";
    } else if (fs.existsSync(path.join(filePath, "index.html"))) {
      filePath = path.join(filePath, "index.html");
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const userDataDir = path.resolve(".tmp-audit-slice1");

  const edgeProc = spawn(edgePath, [
    "--headless=new",
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    "about:blank",
  ]);

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${debugPort}/json`);
      const tabs = await res.json();
      if (tabs && tabs[0]?.webSocketDebuggerUrl) {
        wsUrl = tabs[0].webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    console.error("Failed to connect to edge");
    edgeProc.kill();
    server.close();
    process.exit(1);
  }

  const ws = new WebSocket(wsUrl);
  await new Promise((r) => (ws.onopen = r));

  let id = 1;
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const msgId = id++;
      const handler = (evt) => {
        const d = JSON.parse(evt.data);
        if (d.id === msgId) {
          ws.removeEventListener("message", handler);
          resolve(d.result);
        }
      };
      ws.addEventListener("message", handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

  await send("Page.enable");
  await send("Runtime.enable");

  fs.mkdirSync("docs/screenshots/phase-2c/slice-1", { recursive: true });

  const viewports = [
    { name: "375px", width: 375, height: 667, mobile: true },
    { name: "390px", width: 390, height: 844, mobile: true },
    { name: "430px", width: 430, height: 932, mobile: true },
    { name: "768px", width: 768, height: 1024, mobile: true },
    { name: "820px", width: 820, height: 1180, mobile: true },
    { name: "912px", width: 912, height: 1368, mobile: true },
    { name: "1024px", width: 1024, height: 768, mobile: false },
    { name: "1280px", width: 1280, height: 800, mobile: false },
    { name: "1440px", width: 1440, height: 900, mobile: false },
  ];

  console.log("\n--- VIEWPORT AUDIT: /about ---");
  for (const vp of viewports) {
    await send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.mobile,
    });

    await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/about` });
    await new Promise((r) => setTimeout(r, 600));

    const overflowRes = await send("Runtime.evaluate", {
      expression: `({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        innerWidth: window.innerWidth,
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth
      })`,
      returnByValue: true,
    });

    const { scrollWidth, clientWidth, innerWidth, hasOverflow } = overflowRes.result.value;
    console.log(
      `Viewport ${vp.name.padEnd(7)} (${vp.width}x${vp.height}): client=${clientWidth}px inner=${innerWidth}px scroll=${scrollWidth}px overflow=${hasOverflow ? "FAIL" : "PASS"}`
    );

    if (["390px", "768px", "1440px"].includes(vp.name)) {
      const ss = await send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
      });
      const ssPath = `docs/screenshots/phase-2c/slice-1/about-${vp.name}.png`;
      fs.writeFileSync(ssPath, Buffer.from(ss.data, "base64"));
      console.log(`  Saved screenshot: ${ssPath}`);
    }
  }

  // Capture detail of typography at 1280px
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/about` });
  await new Promise((r) => setTimeout(r, 600));

  const ssDetail = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(
    "docs/screenshots/phase-2c/slice-1/about-typography-detail.png",
    Buffer.from(ssDetail.data, "base64")
  );
  console.log("  Saved screenshot: docs/screenshots/phase-2c/slice-1/about-typography-detail.png");

  // Inspect font sizes computed on the page
  const computedRes = await send("Runtime.evaluate", {
    expression: `(() => {
      const pElements = Array.from(document.querySelectorAll('p'));
      const samples = pElements.map(p => ({
        text: p.textContent.slice(0, 40) + '...',
        fontSize: window.getComputedStyle(p).fontSize,
        lineHeight: window.getComputedStyle(p).lineHeight,
        color: window.getComputedStyle(p).color
      }));
      return samples;
    })()`,
    returnByValue: true,
  });

  console.log("\nComputed typography samples:");
  computedRes.result.value.slice(0, 8).forEach((s, idx) => {
    console.log(`  [${idx+1}] font: ${s.fontSize}, line-height: ${s.lineHeight}, color: ${s.color} -> "${s.text}"`);
  });

  ws.close();
  edgeProc.kill();
  server.close();
  try {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  } catch {}
  console.log("\nAudit script completed successfully!");
  process.exit(0);
});

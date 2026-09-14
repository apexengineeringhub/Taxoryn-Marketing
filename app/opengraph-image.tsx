import { ImageResponse } from "next/og";
import { brandConfig } from "@/lib/config/brand";

export const alt = `${brandConfig.brandName} - ${brandConfig.productDescriptor}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #082E5B 0%, #07152B 55%, #070C1A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "white",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "35%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(0, 209, 163, 0.12)",
            filter: "blur(90px)",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "6px",
            marginBottom: 16,
          }}
        >
          <span style={{ color: "white" }}>TAXO</span>
          <span style={{ color: "#00D1A3" }}>RYN</span>
        </div>

        {/* Official Descriptor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "4px",
            color: "#00D1A3",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          {brandConfig.productDescriptor}
        </div>

        {/* Primary Brand Tagline */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 800,
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.3,
            color: "#F8FAFC",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>Tax Organization.&nbsp;</span>
          <span style={{ color: "#00D1A3" }}>Your Own Network.</span>
        </div>

        {/* Brand Promise Subtitle */}
        <div
          style={{
            fontSize: 20,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          {brandConfig.brandPromise}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


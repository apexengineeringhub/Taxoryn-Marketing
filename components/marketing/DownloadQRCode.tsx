"use client";

import React, { useMemo } from "react";
import QRCode from "qrcode";
import { QrCode, Smartphone } from "lucide-react";

interface DownloadQRCodeProps {
  url?: string;
  size?: number;
  theme?: "light" | "dark";
  title?: string;
  subtitle?: string;
  className?: string;
  showInstructions?: boolean;
}

/**
 * Pure SVG QR Code renderer for Taxoryn mobile application access.
 * Scales cleanly at any DPI without external network requests or canvas dependencies.
 */
export function DownloadQRCode({
  url = "https://taxoryn.com/download",
  size = 96,
  theme = "light",
  title = "Scan on Mobile",
  subtitle = "Open official access directly on your phone",
  className = "",
  showInstructions = true,
}: DownloadQRCodeProps) {
  const qrData = useMemo(() => {
    try {
      const qr = QRCode.create(url, { errorCorrectionLevel: "M" });
      const modCount = qr.modules.size;
      const data = qr.modules.data;
      let path = "";
      for (let r = 0; r < modCount; r++) {
        for (let c = 0; c < modCount; c++) {
          if (data[r * modCount + c]) {
            path += `M${c},${r}h1v1h-1z `;
          }
        }
      }
      return { path, count: modCount };
    } catch {
      return null;
    }
  }, [url]);

  const isDark = theme === "dark";

  return (
    <div
      className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
        isDark
          ? "bg-slate-900/90 border border-slate-800 text-white"
          : "bg-white border border-slate-200/90 text-[#07152B]"
      } ${className}`}
    >
      {/* QR Code Container with subtle frame & quiet zone */}
      <div className="relative shrink-0 p-1.5 bg-white rounded-lg shadow-2xs border border-slate-200/70">
        {qrData ? (
          <svg
            viewBox={`0 0 ${qrData.count} ${qrData.count}`}
            width={size}
            height={size}
            className="block"
            role="img"
            aria-label="Scan QR code on mobile device"
          >
            <path d={qrData.path} fill="#07152B" />
          </svg>
        ) : (
          <div
            style={{ width: size, height: size }}
            className="flex items-center justify-center bg-slate-100 text-slate-400 rounded"
          >
            <QrCode className="w-6 h-6 opacity-40" />
          </div>
        )}
      </div>

      {/* Instructions & Microcopy */}
      {showInstructions && (
        <div className="flex flex-col justify-center space-y-0.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <Smartphone
              className={`w-3.5 h-3.5 shrink-0 ${isDark ? "text-[#00D1A3]" : "text-[#008766]"}`}
            />
            <span
              className={`text-xs font-bold tracking-tight truncate ${
                isDark ? "text-white" : "text-[#07152B]"
              }`}
            >
              {title}
            </span>
          </div>
          <p
            className={`text-[11px] leading-snug line-clamp-2 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
          <span
            className={`text-[10px] font-mono tracking-wider uppercase inline-block pt-0.5 ${
              isDark ? "text-[#00D1A3]/90" : "text-[#008766] font-semibold"
            }`}
          >
            Android 7.0+ (APK)
          </span>
        </div>
      )}
    </div>
  );
}

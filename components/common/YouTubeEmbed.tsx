"use client";

import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  className?: string;
  showYouTubeLink?: boolean;
  aspectRatio?: "16/9" | "4/3";
  autoPlayOnClick?: boolean;
}

export function YouTubeEmbed({
  videoId,
  title,
  description,
  thumbnailUrl,
  className = "",
  showYouTubeLink = true,
  autoPlayOnClick = true,
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isConfigured = Boolean(videoId && videoId.trim() !== "" && videoId !== "placeholder");

  const handlePlay = () => {
    if (!isConfigured) return;
    setIsPlaying(true);
    trackEvent("watch_demo", {
      video_id: videoId,
      location: "youtube_embed",
    });
  };

  const handleExternalClick = () => {
    if (!isConfigured) return;
    trackEvent("youtube_click", {
      video_id: videoId,
      video_title: title,
      destination_url: `https://www.youtube.com/watch?v=${videoId}`,
    });
  };

  // If unconfigured or empty videoId, display clean placeholder
  if (!isConfigured) {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden bg-[#07152B] shadow-2xl border border-slate-700/80 ${className}`}>
        <div className="relative w-full min-h-[340px] sm:min-h-[420px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#082E5B] via-[#07152B] to-[#040C1A]">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />

          {/* Fallback Content */}
          <div className="relative z-10 max-w-lg mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1A3]/10 border border-[#00D1A3]/30 text-[#00D1A3] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D1A3] animate-pulse" />
              <span>Product Demo Walkthrough</span>
            </div>

            <div className="space-y-2 text-white">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Taxoryn product demo coming soon.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                We are preparing a full guided walkthrough of the practice workspace, compliance calendar, and client portal.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#00D1A3] text-[#07152B] font-bold text-xs hover:bg-[#00FFC2] shadow-md transition-all duration-200"
              >
                Schedule Practice Walkthrough
              </a>
              <a
                href="/early-access"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-semibold text-xs border border-slate-700 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
    videoId
  )}?rel=0&modestbranding=1${autoPlayOnClick ? "&autoplay=1" : ""}`;

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden bg-[#07152B] shadow-2xl border border-slate-700/80 ${className}`}>
      <div className="relative w-full pb-[56.25%]">
        {!isPlaying ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#082E5B] via-[#07152B] to-[#040C1A]">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />

            {/* Content overlay */}
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <button
                type="button"
                onClick={handlePlay}
                aria-label={`Play video: ${title}`}
                className="group relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00D1A3] text-[#07152B] shadow-xl hover:scale-105 hover:bg-[#00FFC2] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00D1A3]/50 transition-all duration-300"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                <span className="sr-only">Play Video</span>
              </button>

              <div className="space-y-1.5 text-white">
                <h3 className="text-base sm:text-xl font-bold tracking-tight line-clamp-2">
                  {title}
                </h3>
                {description && (
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-md mx-auto">
                    {description}
                  </p>
                )}
              </div>

              {showYouTubeLink && (
                <div className="pt-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleExternalClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#00D1A3] transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
      </div>
    </div>
  );
}

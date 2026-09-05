import React from "react";
import { ArticleSection } from "@/types/content";
import { CheckCircle2, AlertCircle, Lightbulb, Info } from "lucide-react";

interface ArticleContentRendererProps {
  sections: ArticleSection[];
  keyTakeaways?: string[];
}

export function ArticleContentRenderer({
  sections,
  keyTakeaways,
}: ArticleContentRendererProps) {
  return (
    <div className="space-y-10 text-slate-700 leading-relaxed">
      {/* Sections rendering */}
      {sections.map((sec, idx) => (
        <section key={idx} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#07152B] tracking-tight border-b border-slate-100 pb-2">
            {sec.heading}
          </h2>

          {sec.content && (
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {sec.content}
            </p>
          )}

          {/* Subsections if present */}
          {sec.subsections && sec.subsections.length > 0 && (
            <div className="space-y-4 pt-2">
              {sec.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#082E5B]">
                    {sub.subheading}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700">
                    {sub.text}
                  </p>
                  {sub.bullets && (
                    <ul className="space-y-2 pl-2">
                      {sub.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3] mt-2 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Bullet points */}
          {sec.bullets && sec.bullets.length > 0 && (
            <ul className="space-y-2.5 pt-1">
              {sec.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Table if present */}
          {sec.table && (
            <div className="pt-2 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <thead className="bg-[#07152B] text-white">
                  <tr>
                    {sec.table.headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {sec.table.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="px-4 py-3 text-slate-700 font-normal leading-normal align-top"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Callout box if present */}
          {sec.callout && (
            <div
              className={`p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm my-3 ${
                sec.callout.type === "tip"
                  ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                  : sec.callout.type === "warning"
                  ? "bg-amber-50 border border-amber-200 text-amber-900"
                  : "bg-blue-50 border border-blue-200 text-blue-900"
              }`}
            >
              {sec.callout.type === "tip" && (
                <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              )}
              {sec.callout.type === "warning" && (
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              )}
              {sec.callout.type === "info" && (
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{sec.callout.text}</span>
            </div>
          )}
        </section>
      ))}

      {/* Key Takeaways Card */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#07152B] text-white space-y-4 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase">
            <CheckCircle2 className="w-4 h-4 text-[#00D1A3]" />
            <span>Key Practitioner Takeaways</span>
          </div>
          <h3 className="text-xl font-bold text-white">Summary for Practice & Compliance Files</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
            {keyTakeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#00D1A3]/20 text-[#00D1A3] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#00D1A3]/30">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

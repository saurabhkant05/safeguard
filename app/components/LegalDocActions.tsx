"use client";

import { useState } from "react";

interface LegalDocActionsProps {
  primaryPhone?: string;
  email?: string;
  tableOfContents?: Array<{ id: string; label: string; number: string }>;
}

export default function LegalDocActions({
  primaryPhone = "7977179807",
  email = "safeguardforce02@gmail.com",
  tableOfContents = [],
}: LegalDocActionsProps) {
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopy = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // ignore
      }
    }
  };

  return (
    <>
      {/* Mobile Table of Contents Dropdown Toggle */}
      {tableOfContents.length > 0 && (
        <div className="lg:hidden mb-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
          <button
            type="button"
            onClick={() => setTocOpen(!tocOpen)}
            className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#0A1931]"
          >
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A253" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents ({tableOfContents.length} Sections)
            </span>
            <span className="text-[#C5A253] text-sm">{tocOpen ? "▲" : "▼"}</span>
          </button>

          {tocOpen && (
            <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 max-h-64 overflow-y-auto">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setTocOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#C5A253] py-1 transition"
                >
                  <span className="text-[#C5A253] font-semibold mr-1.5">{item.number}.</span>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons Group */}
      <div className="flex flex-wrap gap-2.5 print:hidden">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-[#0A1931] tracking-wider uppercase rounded transition shadow-xs cursor-pointer"
          title="Print or Save as PDF"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Print / PDF
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-[#0A1931] tracking-wider uppercase rounded transition shadow-xs cursor-pointer"
          title="Copy Link to Clipboard"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          {copied ? "Link Copied!" : "Share Link"}
        </button>

        <a
          href={`tel:${primaryPhone}`}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0A1931] hover:bg-[#132D4F] text-[#C5A253] text-xs font-bold tracking-wider uppercase rounded transition shadow-xs ml-auto"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Legal Desk: {primaryPhone}
        </a>
      </div>
    </>
  );
}

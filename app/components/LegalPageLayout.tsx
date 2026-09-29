import Link from "next/link";
import type { SiteSettings } from "@/types/database";
import LegalDocActions from "./LegalDocActions";
import { telHref } from "@/lib/utils";

export interface LegalHighlight {
  label: string;
  value: string;
  icon: string;
  description: string;
}

export interface LegalTocItem {
  id: string;
  label: string;
  number: string;
}

interface LegalPageLayoutProps {
  activeTab: "privacy" | "terms" | "disclaimer";
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  effectiveDate?: string;
  documentRef?: string;
  highlights: LegalHighlight[];
  tableOfContents: LegalTocItem[];
  settings: SiteSettings;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  activeTab,
  eyebrow,
  title,
  subtitle,
  lastUpdated = "September 2026",
  effectiveDate = "January 1, 2026",
  documentRef = "REF: SGF-LEG-2026",
  highlights,
  tableOfContents,
  settings,
  children,
}: LegalPageLayoutProps) {
  const tabs = [
    {
      id: "privacy",
      label: "Privacy Policy",
      href: "/privacy",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      tag: "DPDP Act 2023",
    },
    {
      id: "terms",
      label: "Terms & Conditions",
      href: "/terms",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      tag: "PSARA & SLAs",
    },
    {
      id: "disclaimer",
      label: "Disclaimer & Notices",
      href: "/disclaimer",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      tag: "Operations & Law",
    },
  ];

  return (
    <div className="bg-white">
      {/* Print-only official header */}
      <div className="hidden print:block p-8 border-b-2 border-[#0A1931] mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-black text-[#0A1931]">SAFE GUARD FORCE</div>
            <div className="text-xs text-[#C5A253] font-bold tracking-widest uppercase">
              Your Security. Our Priority.
            </div>
            <div className="text-xs text-slate-500 mt-1">
              C 517, Kailash Esplanade, LBS Marg, Ghatkopar West, Mumbai 400086 | Phone: {settings.primary_phone}
            </div>
          </div>
          <div className="text-right text-xs text-slate-500">
            <div>Official Statutory Document</div>
            <div>{documentRef}</div>
            <div>Date of Issue: {effectiveDate}</div>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative bg-[#070F1F] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-white/10 print:hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A253]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A1931] rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white/70">Legal &amp; Compliance</span>
            <span>/</span>
            <span className="text-[#C5A253] font-semibold">{title}</span>
          </nav>

          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A253]/10 border border-[#C5A253]/30 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C5A253] animate-pulse" />
              <span className="text-[#C5A253] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-4 max-w-[760px]">
              {subtitle}
            </p>

            {/* Document metadata pill badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/60">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                <span className="text-white/40">Reference:</span>
                <span className="text-white font-mono font-medium">{documentRef}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                <span className="text-white/40">Effective:</span>
                <span className="text-white font-medium">{effectiveDate}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                <span className="text-white/40">Last Reviewed:</span>
                <span className="text-[#C5A253] font-semibold">{lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                <span className="text-white/40">Jurisdiction:</span>
                <span className="text-white font-medium">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Switcher Tab Bar */}
      <section className="bg-[#0A1931] border-b border-white/10 sticky top-0 z-20 shadow-md print:hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-1 sm:gap-2">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-3 text-xs sm:text-sm font-bold tracking-wide transition border-b-2 whitespace-nowrap ${
                      isActive
                        ? "text-white border-[#C5A253] bg-white/5"
                        : "text-white/60 hover:text-white border-transparent hover:bg-white/[0.02]"
                    }`}
                  >
                    <span className={isActive ? "text-[#C5A253]" : "text-white/40"}>{tab.icon}</span>
                    <span>{tab.label}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider uppercase hidden sm:inline-block ${
                        isActive
                          ? "bg-[#C5A253] text-[#0A1931] font-black"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {tab.tag}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center text-xs text-white/50 shrink-0">
              <span className="text-[#C5A253] mr-1.5 font-bold">24/7 Helpline:</span>
              <a href={telHref(settings.primary_phone)} className="text-white hover:text-[#C5A253] font-bold transition">
                {settings.primary_phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Guarantees & Highlights Strip */}
      {highlights && highlights.length > 0 && (
        <section className="bg-[#F8FAFC] border-b border-slate-200 py-8 print:hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-4 rounded-sm hover:border-[#C5A253]/60 transition shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded bg-[#0A1931] text-[#C5A253] flex items-center justify-center text-sm font-bold shrink-0">
                      {h.icon}
                    </span>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{h.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-[#0A1931]">{h.value}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content & Sticky Sidebar Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
            {/* Sidebar (Desktop Sticky) */}
            <aside className="lg:col-span-4 xl:col-span-3 print:hidden">
              <div className="lg:sticky lg:top-20 space-y-6">
                {/* Mobile/Desktop Action buttons */}
                <LegalDocActions
                  primaryPhone={settings.primary_phone}
                  email={settings.email}
                  tableOfContents={tableOfContents}
                />

                {/* Table of contents container */}
                <div className="hidden lg:block bg-white border border-slate-200 p-5 rounded-sm shadow-xs">
                  <div className="text-[#0A1931] text-xs font-black tracking-widest uppercase pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                    <span>Contents</span>
                    <span className="text-[10px] text-[#C5A253] font-bold">{tableOfContents.length} Sections</span>
                  </div>
                  <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="group flex items-baseline text-xs text-slate-600 hover:text-[#0A1931] hover:bg-slate-50 py-1.5 px-2 rounded transition"
                      >
                        <span className="text-[#C5A253] font-bold w-6 shrink-0 group-hover:text-[#0A1931]">
                          {item.number}.
                        </span>
                        <span className="leading-snug">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Official Legal Desk Card */}
                <div className="bg-[#0A1931] text-white p-5 rounded-sm border border-slate-800 shadow-md">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded bg-[#C5A253] text-[#0A1931] flex items-center justify-center font-black text-xs">
                      SG
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-wider uppercase text-white">Legal &amp; Compliance</div>
                      <div className="text-[10px] text-[#C5A253] font-medium">Head Office, Mumbai</div>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Have questions regarding contracts, SLAs, surveillance footage requests, or privacy compliance?
                  </p>

                  <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase tracking-wider">Email</span>
                      <a href={`mailto:${settings.email}`} className="text-white hover:text-[#C5A253] font-mono transition">
                        {settings.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase tracking-wider">Helpline</span>
                      <a href={telHref(settings.primary_phone)} className="text-[#C5A253] font-bold hover:underline">
                        +91 {settings.primary_phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase tracking-wider">Address</span>
                      <span className="text-white/70 text-[11px] leading-relaxed block mt-0.5">
                        {settings.address_line_1}, {settings.address_line_2}, {settings.city} — {settings.pincode}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-5 block w-full text-center bg-[#C5A253] hover:bg-[#D4AF37] text-[#070F1F] py-2.5 text-[11px] tracking-wider uppercase font-bold transition"
                  >
                    Request Contract SLA →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Document Body */}
            <main className="lg:col-span-8 xl:col-span-9">
              <article className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#0A1931] prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                {children}
              </article>

              {/* Document Certification & Grievance Signoff Box */}
              <div className="mt-14 pt-8 border-t-2 border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 rounded-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#C5A253] mb-1">
                      Official Corporate Seal
                    </div>
                    <div className="text-base font-black text-[#0A1931]">
                      SAFE Guard FORCE — Directorate of Legal &amp; Statutory Affairs
                    </div>
                    <p className="text-xs text-slate-500 mt-1 max-w-[540px]">
                      This document is an electronic record generated in accordance with the Information Technology Act, 2000, and rules framed thereunder. It does not require physical signatures to be legally binding upon publication.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <img
                      src={settings.logo_url || "/images/safelogo.png"}
                      alt="SAFE Guard FORCE"
                      className="w-14 h-14 object-contain"
                    />
                    <div className="text-right text-[11px] text-slate-500">
                      <div className="font-bold text-[#0A1931]">SAFE GUARD FORCE</div>
                      <div>Mumbai, Maharashtra</div>
                      <div className="text-emerald-600 font-semibold flex items-center justify-end gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Verified Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, {
  type LegalHighlight,
  type LegalTocItem,
} from "../components/LegalPageLayout";
import { getSiteSettings } from "@/lib/cms/queries";
import { telHref } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: "Disclaimer & Regulatory Notice — SAFE Guard FORCE",
    description: `Official legal disclaimers, operational boundaries, and statutory notices for ${settings.site_name} security guarding, facility management, and detective services.`,
  };
}

const highlights: LegalHighlight[] = [
  {
    label: "Security Role",
    value: "Preventive Deterrence",
    icon: "🛡️",
    description: "Physical security guards act as visual deterrence and access regulators; they are not an insurance guarantee.",
  },
  {
    label: "Property Advisory",
    value: "Insurance Mandatory",
    icon: "🏢",
    description: "All clients must maintain comprehensive commercial property, fire, and burglary insurance coverage.",
  },
  {
    label: "Investigation Limits",
    value: "Lawful Means Only",
    icon: "🔍",
    description: "Strictly zero unlawful wiretapping or phone hacking; inquiries reflect observations at time of assessment.",
  },
  {
    label: "Public Safety",
    value: "Emergency Dial 112",
    icon: "🚨",
    description: "During major violent crimes, armed attacks, or structural fires, statutory emergency services are primary.",
  },
];

const tableOfContents: LegalTocItem[] = [
  { id: "general-disclaimer", number: "1", label: "Website & Informational Notice" },
  { id: "security-deterrence", number: "2", label: "Physical Security & Deterrence Scope" },
  { id: "insurance-advisory", number: "3", label: "Commercial Insurance Requirement" },
  { id: "detective-disclaimer", number: "4", label: "Private Detective & Investigation Boundaries" },
  { id: "facility-technical-disclaimer", number: "5", label: "Facility Management & Technical Maintenance" },
  { id: "fire-emergency-disclaimer", number: "6", label: "Fire Safety & First-Stage Response" },
  { id: "regulatory-psara", number: "7", label: "PSARA Regulatory Status & Police Relationship" },
  { id: "external-links", number: "8", label: "Third-Party Links & External Platforms" },
  { id: "damages-waiver", number: "9", label: "Limitation of Consequential Damages" },
  { id: "emergency-responders", number: "10", label: "Statutory Emergency Contacts & Protocol" },
];

export default async function DisclaimerPage() {
  const settings = await getSiteSettings();

  return (
    <LegalPageLayout
      activeTab="disclaimer"
      eyebrow="SAFE GUARD FORCE • STATUTORY LEGAL DISCLAIMERS"
      title="Disclaimer &amp; Regulatory Notice"
      subtitle="Important legal disclaimers, operational boundaries, and statutory disclosures clarifying the role, deterrence scope, and legal limits of SAFE Guard FORCE services."
      lastUpdated="September 2026"
      effectiveDate="January 1, 2026"
      documentRef="REF: SGF-DSC-OPS-2026-V2"
      highlights={highlights}
      tableOfContents={tableOfContents}
      settings={settings}
    >
      {/* 1. General Website Disclaimer */}
      <section id="general-disclaimer" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 01</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          1. Website Content &amp; Informational Disclaimer
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The content, case studies, service descriptions, and materials published on{" "}
          <strong>https://www.safeguardforce.online</strong> (&quot;<strong>Website</strong>&quot;) are provided solely for general promotional, informational, and introductory guidance regarding the operations of <strong>SAFE Guard FORCE</strong>.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Nothing contained on this Website constitutes a binding commercial offer, contractual warranty, or legal advice. Formal commitments and operational service levels are established exclusively through a signed Master Service Agreement (MSA) or Service Level Agreement (SLA) executed between an authorized director of SAFE Guard FORCE and the Client.
        </p>
      </section>

      {/* 2. Security Deterrence Scope */}
      <section id="security-deterrence" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          2. Physical Security, Guarding &amp; Deterrence Scope
        </h2>
        <div className="bg-[#0A1931] text-white p-6 rounded-sm my-4 border border-slate-800">
          <div className="text-[#C5A253] text-xs font-bold tracking-widest uppercase mb-2">
            Nature of Physical Guarding Services
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            The primary function of security personnel, armed guards, canine (K9) patrols, and gate controllers is to act as a <strong>disciplined visual deterrent, access gatekeeper, and early incident escalation agent</strong>. Private security guarding does not constitute an absolute guarantee of immunity against premeditated criminal acts, internal theft, vandalism, armed violence, or civil unrest.
          </p>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">
          While SAFE Guard FORCE applies rigorous training, 100% police verification, and supervisory post audits, we explicitly disclaim liability for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>Unforeseen armed assaults, organized crime, terrorist incidents, riots, mob violence, or state-level public disorder.</li>
          <li>Acts of internal collusion, fraud, or theft committed by the Client&apos;s own permanent employees, vendors, tenants, or contractors.</li>
          <li>Losses resulting from security lapses caused by malfunctioning client-owned security infrastructure (e.g. non-functional boom barriers, dead CCTV cameras, or dark perimeter lighting).</li>
        </ul>
      </section>

      {/* 3. Insurance Advisory */}
      <section id="insurance-advisory" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 03</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          3. Commercial Property &amp; Theft Insurance Requirement
        </h2>
        <div className="bg-[#F8FAFC] border-l-4 border-[#C5A253] p-5 my-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-2">
            MANDATORY NOTICE TO PREMISES OWNERS &amp; FACILITY MANAGERS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            <strong>Private security is NOT an insurance underwriter.</strong> Stationing guards or bouncers at your premises does not relieve property owners, housing societies, or corporate entities from the obligation to procure and maintain comprehensive insurance policies.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All clients are strongly advised to maintain active insurance covering commercial fire, burglary, inventory theft, machinery breakdown, and public liability. In the event of property loss, clients must file formal claims with their insurance providers; SAFE Guard FORCE will cooperate with insurance survey officers and police investigators by supplying official post logbooks and incident statements.
          </p>
        </div>
      </section>

      {/* 4. Detective Disclaimer */}
      <section id="detective-disclaimer" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 04</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          4. Private Detective &amp; Investigation Boundaries
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE undertakes corporate investigations, asset verifications, and pre-employment checks strictly in accordance with ethical standards and Indian statutory frameworks:
        </p>
        <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-sm mb-4">
          <li>
            <strong>Strictly Lawful Methodologies:</strong> We do NOT provide illegal wiretaps, phone recording without legal authorization, unauthorized hacking into electronic accounts, or breaking and entering. Any inquiry request requiring violations of the Indian Telegraph Act or IT Act 2000 will be summarily refused.
          </li>
          <li>
            <strong>Factual Observation Standard:</strong> Reports are compiled based on facts, witness statements, public records, and on-ground observations at the time of inquiry. Human circumstances, address occupancies, and corporate shareholdings change dynamically over time; our findings represent professional assessments rather than eternal guarantees.
          </li>
          <li>
            <strong>Client Responsibility for Use:</strong> The commissioning client is solely responsible for how investigation dossiers and findings are utilized. SAFE Guard FORCE accepts no liability for third-party civil or criminal litigation resulting from the client&apos;s dissemination or enforcement of investigation reports.
          </li>
        </ul>
      </section>

      {/* 5. Facility & Technical Disclaimer */}
      <section id="facility-technical-disclaimer" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 05</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          5. Facility Management, Housekeeping &amp; Technical Operations
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          In our Facility Management, Housekeeping, and Electro-Mechanical maintenance divisions:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-xs uppercase tracking-wider text-[#0A1931] block mb-1">STP &amp; WTP Plant Parameters</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Treated sewage water quality parameters (BOD, COD, TSS) are conditional upon steady electrical supply, unadulterated raw sewage inlet, functioning aeration diffusers, and timely provision of bacterial cultures and chemicals supplied or approved by the client.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-xs uppercase tracking-wider text-[#0A1931] block mb-1">Equipment Age &amp; Spares</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              We disclaim responsibility for equipment breakdowns (DG sets, chillers, lift machinery) caused by pre-existing metal fatigue, delayed client sign-off for OEM spares, or catastrophic municipal voltage surges.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Fire Safety Disclaimer */}
      <section id="fire-emergency-disclaimer" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 06</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          6. Fire Safety Audits &amp; First-Stage Emergency Response
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Our Fire Safety personnel and certified marshals provide first-stage fire containment and building evacuation assistance. However:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>SAFE Guard FORCE is not an engineering certifier of structural fire resistance or architectural life-safety compliance.</li>
          <li>Building owners remain legally responsible for obtaining and renewing their statutory Municipal Fire NOC (No Objection Certificate), maintaining charged water pressure in fire risers, and servicing automated sprinkler systems.</li>
          <li>In the event of a structural or major fire, our personnel immediately sound the alarm, commence building evacuation, and alert the municipal Fire Brigade (101).</li>
        </ul>
      </section>

      {/* 7. PSARA & Police Relationship */}
      <section id="regulatory-psara" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 07</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          7. PSARA Regulatory Status &amp; Law Enforcement Relationship
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE is a private security agency operating in compliance with the{" "}
          <strong>Private Security Agencies (Regulation) Act, 2005 (PSARA)</strong>.
        </p>
        <div className="bg-[#F8FAFC] border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed my-4">
          <strong>Distinct from Law Enforcement:</strong> Private security personnel and guards are private contractors and do not possess statutory police powers of search, criminal arrest, or interrogation under the Bharatiya Nagarik Suraksha Sanhita (BNSS). In all instances involving cognizable criminal offenses, our teams apprehend suspects solely under citizen arrest provisions and immediately hand them over to the nearest local Police Station.
        </div>
      </section>

      {/* 8. Third-Party Links */}
      <section id="external-links" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 08</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          8. Third-Party Websites &amp; External Communications
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Our Website may feature links to external services (e.g. Google Maps directions, WhatsApp messaging links, or social networks). These third-party websites operate under independent terms and privacy practices. SAFE Guard FORCE has no control over, and assumes no responsibility for, the content or availability of external platforms.
        </p>
      </section>

      {/* 9. Damages Waiver */}
      <section id="damages-waiver" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 09</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          9. Limitation of Consequential Damages
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          To the maximum extent permitted by applicable Indian law, under no circumstances shall SAFE Guard FORCE, its directors, managers, or employees be liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>Any indirect, punitive, special, incidental, or consequential damages.</li>
          <li>Loss of anticipated profits, commercial contracts, business reputation, or tenant goodwill.</li>
          <li>Force majeure events including earthquakes, floods, pandemics, electrical grid outages, or governmental lockdowns.</li>
        </ul>
      </section>

      {/* 10. Emergency Contacts */}
      <section id="emergency-responders" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          10. Statutory Emergency Contacts &amp; Public Safety Protocol
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          For acute, life-threatening emergencies occurring at any client site, please dial the statutory Government of India emergency helplines immediately:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 text-center">
          <div className="bg-[#0A1931] text-white p-4 rounded-sm border border-slate-800">
            <div className="text-[#C5A253] text-2xl font-black">112</div>
            <div className="text-[11px] uppercase tracking-wider font-bold mt-1">National Emergency</div>
            <div className="text-[10px] text-white/50 mt-0.5">Police / Fire / Health</div>
          </div>
          <div className="bg-[#0A1931] text-white p-4 rounded-sm border border-slate-800">
            <div className="text-[#C5A253] text-2xl font-black">100</div>
            <div className="text-[11px] uppercase tracking-wider font-bold mt-1">Police Control</div>
            <div className="text-[10px] text-white/50 mt-0.5">Mumbai &amp; Maharashtra</div>
          </div>
          <div className="bg-[#0A1931] text-white p-4 rounded-sm border border-slate-800">
            <div className="text-[#C5A253] text-2xl font-black">101</div>
            <div className="text-[11px] uppercase tracking-wider font-bold mt-1">Fire Brigade</div>
            <div className="text-[10px] text-white/50 mt-0.5">Fire &amp; Rescue</div>
          </div>
          <div className="bg-[#0A1931] text-white p-4 rounded-sm border border-slate-800">
            <div className="text-[#C5A253] text-2xl font-black">108 / 102</div>
            <div className="text-[11px] uppercase tracking-wider font-bold mt-1">Ambulance</div>
            <div className="text-[10px] text-white/50 mt-0.5">Medical Emergencies</div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] border border-slate-200 p-5 rounded-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#0A1931] uppercase tracking-wider">
                SAFE Guard FORCE 24/7 Operations Desk
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                For operational escalation, guard relief, or urgent supervisor dispatch:
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={telHref(settings.primary_phone)}
                className="bg-[#C5A253] hover:bg-[#D4AF37] text-[#070F1F] px-4 py-2 text-xs font-bold tracking-wider uppercase transition inline-flex items-center gap-1.5"
              >
                Call: {settings.primary_phone}
              </a>
              <Link
                href="/contact"
                className="bg-[#0A1931] hover:bg-[#132D4F] text-white px-4 py-2 text-xs font-bold tracking-wider uppercase transition"
              >
                Contact Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}

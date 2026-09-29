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
    title: "Privacy Policy — SAFE Guard FORCE",
    description: `Official Privacy Policy for ${settings.site_name}. How we collect, safeguard, and process personal data, visitor registers, CCTV surveillance, and investigation records in compliance with Indian privacy laws.`,
  };
}

const highlights: LegalHighlight[] = [
  {
    label: "Compliance Standard",
    value: "DPDP Act & IT Act 2000",
    icon: "🛡️",
    description: "Operates in strict conformity with Indian data privacy statutes, SPDI Rules 2011, and the DPDP Act 2023.",
  },
  {
    label: "Commercial Principle",
    value: "Zero Sale of Data",
    icon: "🚫",
    description: "We never monetize, rent, or trade your personal, corporate, or premises data with any third-party advertisers.",
  },
  {
    label: "Facility Security",
    value: "Encrypted CCTV Logs",
    icon: "📹",
    description: "Access-controlled surveillance records processed solely for safety, asset protection, and statutory investigations.",
  },
  {
    label: "Investigation Ethics",
    value: "100% NDA Protection",
    icon: "🔒",
    description: "Private inquiries, corporate fraud audits, and background screening conducted confidentially via lawful means only.",
  },
];

const tableOfContents: LegalTocItem[] = [
  { id: "entity-scope", number: "1", label: "Corporate Identity & Scope" },
  { id: "data-categories", number: "2", label: "Categories of Information Collected" },
  { id: "lawful-purpose", number: "3", label: "Lawful Purpose & Usage" },
  { id: "cctv-surveillance", number: "4", label: "CCTV & Physical Surveillance" },
  { id: "investigation-confidentiality", number: "5", label: "Detective & Investigation Confidentiality" },
  { id: "visitor-management", number: "6", label: "Client Site Visitor & Gate Records" },
  { id: "disclosure-sharing", number: "7", label: "Sharing & Statutory Disclosures" },
  { id: "security-measures", number: "8", label: "Technical & Physical Safeguards" },
  { id: "data-retention", number: "9", label: "Data Retention & Disposal" },
  { id: "user-rights", number: "10", label: "Your Rights & Consent" },
  { id: "cookies-tracking", number: "11", label: "Cookies & Web Tracking" },
  { id: "grievance-officer", number: "12", label: "Grievance Redressal Officer" },
];

export default async function PrivacyPolicyPage() {
  const settings = await getSiteSettings();

  return (
    <LegalPageLayout
      activeTab="privacy"
      eyebrow="SAFE GUARD FORCE • STATUTORY PRIVACY POLICY"
      title="Privacy Policy"
      subtitle="At SAFE Guard FORCE, safeguarding people, physical assets, and information integrity is our core mission. This policy governs how we collect, process, store, and protect your personal data, facility logs, surveillance, and client communications."
      lastUpdated="September 2026"
      effectiveDate="January 1, 2026"
      documentRef="REF: SGF-POL-PRV-2026-V2"
      highlights={highlights}
      tableOfContents={tableOfContents}
      settings={settings}
    >
      {/* 1. Corporate Identity & Scope */}
      <section id="entity-scope" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 01</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          1. Corporate Identity &amp; Scope of Policy
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          This Privacy Policy (&quot;<strong>Policy</strong>&quot;) sets out the data processing practices of{" "}
          <strong>SAFE Guard FORCE</strong> (hereinafter referred to as &quot;<strong>SAFE Guard FORCE</strong>&quot;,{" "}
          &quot;<strong>we</strong>&quot;, &quot;<strong>our</strong>&quot;, or &quot;<strong>us</strong>&quot;), having its primary office at{" "}
          <span className="text-[#0A1931] font-semibold">
            {settings.address_line_1}, {settings.address_line_2}, {settings.city}, {settings.state} — {settings.pincode}, {settings.country}
          </span>
          .
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          This Policy applies to all individuals who interact with us, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-6">
          <li>Visitors to our website (<strong>https://www.safeguardforce.online</strong>) and digital service portals.</li>
          <li>Prospective and existing corporate, industrial, and residential clients seeking security assessments, facility management proposals, technical audits, or confidential investigations.</li>
          <li>Visitors, contractors, and residents who register in physical visitor logs, gate pass registers, or access-control terminals maintained by our uniformed personnel at client sites.</li>
          <li>Subjects of authorized background verifications, pre-employment screening, or corporate fraud inquiries conducted on behalf of authorized clients.</li>
          <li>Job applicants, security guards, technicians, and facility personnel who apply for employment or placement with us.</li>
        </ul>
        <div className="bg-[#F8FAFC] border-l-4 border-[#C5A253] p-4 text-xs text-slate-600 leading-relaxed">
          <strong>Statutory Compliance Statement:</strong> This policy is formulated in compliance with the{" "}
          <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)</strong>, and the provisions of the{" "}
          <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
        </div>
      </section>

      {/* 2. Categories of Information Collected */}
      <section id="data-categories" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          2. Categories of Information We Collect
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Depending on your relationship with SAFE Guard FORCE, we may collect and process the following categories of information:
        </p>

        <div className="space-y-4 my-6">
          <div className="border border-slate-200 p-5 rounded-sm bg-white">
            <h3 className="font-bold text-[#0A1931] text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A253]" />
              A. Client Inquiries &amp; Consultation Information
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When you submit a consultation request, request a customized quotation, download our corporate brochure, or contact us via telephone or WhatsApp:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
              <li>Full Name, designation, company/organization name, and registered site address.</li>
              <li>Official email address, mobile number, and telephone extension.</li>
              <li>Details of premises (square footage, layout, industrial type, residential society details).</li>
              <li>Specific service requirements (e.g. Armed Guards, Facility Janitorial, Fire Marshals, STP Operators, Background Verification).</li>
            </ul>
          </div>

          <div className="border border-slate-200 p-5 rounded-sm bg-white">
            <h3 className="font-bold text-[#0A1931] text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A253]" />
              B. On-Site Visitor &amp; Gate Management Data
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When entering client premises protected by SAFE Guard FORCE security personnel:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
              <li>Visitor name, contact telephone number, and government photo ID details (where mandated by client security SOPs).</li>
              <li>Vehicle registration number, make, and delivery consignment details.</li>
              <li>Exact date, timestamp of ingress and egress, flat/office visited, and host authorization status.</li>
              <li>Luggage/baggage inspection records and temporary visitor badge issuance details.</li>
            </ul>
          </div>

          <div className="border border-slate-200 p-5 rounded-sm bg-white">
            <h3 className="font-bold text-[#0A1931] text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A253]" />
              C. Closed-Circuit Television (CCTV) &amp; Surveillance Footage
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Video images, license plate recognition (ANPR) captures, and audio/video surveillance recorded at our monitoring posts, command control desks, or client perimeter boundaries under operational watch.
            </p>
          </div>

          <div className="border border-slate-200 p-5 rounded-sm bg-white">
            <h3 className="font-bold text-[#0A1931] text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A253]" />
              D. Detective &amp; Investigation Case Records
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In connection with authorized corporate background checks, matrimonial due diligence, asset tracing, or corporate fraud inquiries:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
              <li>Identity verification credentials provided by or authorized by the subject or commissioning client.</li>
              <li>Public registry filings, court judgment records, MCA/ROC corporate registry data, and educational/past employment reference verifications.</li>
              <li>Physical surveillance observations, photographic evidence, and investigative intelligence logs gathered through lawful and discreet means.</li>
            </ul>
          </div>

          <div className="border border-slate-200 p-5 rounded-sm bg-white">
            <h3 className="font-bold text-[#0A1931] text-base mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A253]" />
              E. Automated Website &amp; Technical Telemetry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Internet Protocol (IP) address, browser type and version, language preference, operating system, referrer URL, pages viewed, time spent, and approximate city-level geographic location gathered via standard server logs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Lawful Purpose & Usage */}
      <section id="lawful-purpose" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 03</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          3. Lawful Purpose &amp; Usage of Collected Data
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          We process personal and operational data solely for lawful, legitimate, and specified purposes, including:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-[#0A1931] font-bold text-xs uppercase tracking-wider mb-1">Contractual Fulfillment</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deploying trained security guards, facility personnel, technical maintenance crews, and specialized dog squads as per agreed Service Level Agreements (SLAs).
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-[#0A1931] font-bold text-xs uppercase tracking-wider mb-1">Physical Safety &amp; Access Control</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Preventing unauthorized entry, safeguarding property, preventing theft or sabotage, and managing emergency evacuations during fire or natural hazards.
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-[#0A1931] font-bold text-xs uppercase tracking-wider mb-1">Confidential Investigation Reporting</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Delivering verified intelligence, corporate due diligence dossiers, and factual findings strictly to the authorized client under executed Non-Disclosure Agreements.
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-[#0A1931] font-bold text-xs uppercase tracking-wider mb-1">Statutory &amp; Labor Law Compliance</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complying with PSARA 2005 licensing rules, police verification mandates, Minimum Wages Act, Employees&apos; Provident Fund (EPF), ESIC, and GST tax invoicing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CCTV & Physical Surveillance */}
      <section id="cctv-surveillance" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 04</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          4. CCTV &amp; Physical Security Surveillance
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          CCTV surveillance plays a critical role in proactive threat detection, access verification, and perimeter security. Our operational standards for video surveillance include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li><strong>Clear Signage:</strong> Prominent notices are mounted at entry points of premises monitored by our control rooms, stating that the area is under 24/7 video surveillance.</li>
          <li><strong>Restricted Access:</strong> Real-time feeds and recorded footage are accessible only to authorized security control room supervisors, field officers, and client-designated security officers.</li>
          <li><strong>Retention Period:</strong> Standard surveillance recordings are retained for a rolling period of <strong>15 to 30 days</strong> (contingent upon hard drive storage capacity and site contract requirements), after which data is automatically overwritten by the surveillance NVR/DVR system.</li>
          <li><strong>Incident Preservation:</strong> Footage relevant to a reported incident (e.g. theft, collision, fire outbreak, unauthorized intrusion) is isolated and securely archived until police investigation, insurance claim processing, or judicial proceedings conclude.</li>
        </ul>
      </section>

      {/* 5. Investigation Confidentiality */}
      <section id="investigation-confidentiality" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 05</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          5. Confidentiality in Detective &amp; Investigation Services
        </h2>
        <div className="bg-[#0A1931] text-white p-6 rounded-sm my-4 border border-slate-800">
          <div className="text-[#C5A253] text-xs font-bold tracking-widest uppercase mb-2">
            Investigation Confidentiality Protocol
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            All private investigations, corporate fraud audits, forensic verifications, and background investigations conducted by SAFE Guard FORCE are governed by strict Non-Disclosure Agreements (NDAs). Case files, target dossiers, and client communications are classified as <strong>Strictly Confidential &amp; Privileged</strong>.
          </p>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">
          In executing investigation services:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>We gather data exclusively through legitimate, lawful, and legally admissible channels, including public registries, lawful on-ground observations, and consenting source interviews.</li>
          <li>We <strong>do not engage in illegal phone tapping, wiretapping, mobile device hacking, or unlawful cyber intrusions</strong> that infringe upon statutory Indian privacy laws or the Indian Telegraph Act.</li>
          <li>Investigation dossiers are handed over exclusively to the designated client contact and are purged or sealed within our encrypted cold storage following case closure.</li>
        </ol>
      </section>

      {/* 6. Visitor Management */}
      <section id="visitor-management" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 06</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          6. Client Site Visitor &amp; Gate Records
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Where SAFE Guard FORCE personnel maintain physical entry books or gate management applications at residential societies, corporate parks, or factories:
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE acts primarily as a <strong>Data Processor</strong> operating under the instructions of the respective Client Management Committee, Society RWA, or Corporate Facility Directorate (who acts as the <strong>Data Fiduciary</strong>).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>Visitor registers remain the property of the client premises.</li>
          <li>Guards are strictly instructed not to photograph, copy, or disclose visitor registers to unauthorized third parties or commercial sales representatives.</li>
          <li>Physical registers are preserved on-site or deposited in the client facility management custody upon completion.</li>
        </ul>
      </section>

      {/* 7. Sharing & Disclosures */}
      <section id="disclosure-sharing" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 07</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          7. Information Sharing &amp; Statutory Disclosures
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 font-semibold text-[#0A1931]">
          We do not sell, rent, monetize, or lease your personal information to third-party data brokers or marketing firms.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Information may be shared only under the following limited circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-600 text-sm mb-6">
          <li>
            <strong>Law Enforcement &amp; Statutory Authorities:</strong> We may disclose visitor logs, surveillance recordings, or incident reports to the Mumbai Police, Maharashtra State Police, Fire Brigade, or judicial courts pursuant to a valid subpoena, warrant, or formal notice issued under Section 91 of the Code of Criminal Procedure / Section 94 of the Bharatiya Nagarik Suraksha Sanhita (BNSS).
          </li>
          <li>
            <strong>Statutory Labor &amp; Regulatory Auditors:</strong> Anonymized or necessary personnel records are provided to government labor enforcement officers for EPF, ESIC, and PSARA regulatory licensing audits.
          </li>
          <li>
            <strong>Trusted Operational Service Providers:</strong> Secure cloud infrastructure hosts, SMS gateway providers (for inquiry confirmations), and IT database providers bound by stringent confidentiality and non-disclosure covenants.
          </li>
          <li>
            <strong>Emergency First Responders:</strong> In life-threatening emergencies, building collapses, fires, or medical crises, relevant personal information and building occupant details may be shared with municipal emergency services to save lives.
          </li>
        </ul>
      </section>

      {/* 8. Security Measures */}
      <section id="security-measures" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 08</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          8. Technical &amp; Physical Safeguards
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE implements multi-tiered administrative, physical, and technical safeguards designed to protect personal and operational records against unauthorized access, destruction, loss, or alteration:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          <div className="border border-slate-200 p-4 bg-white">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-2">Physical Security</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Biometric and card access controls at our Ghatkopar West headquarters, secure filing vaults for client dossiers, and 24/7 guarded premises.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-2">Digital Encryption</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              HTTPS/TLS 1.3 encryption for website data transit, encrypted database storage, and secure credentials management.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-2">Staff Screening</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% police verification, background validation, and mandatory signed confidentiality oaths for all security officers and supervisors.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Data Retention */}
      <section id="data-retention" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 09</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          9. Data Retention &amp; Disposal Schedules
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-xs text-left border border-slate-200">
            <thead className="bg-[#0A1931] text-white uppercase tracking-wider">
              <tr>
                <th className="p-3 border-r border-slate-700">Data Category</th>
                <th className="p-3 border-r border-slate-700">Standard Retention Period</th>
                <th className="p-3">Disposal Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-3 font-semibold text-[#0A1931]">Client Website Enquiries</td>
                <td className="p-3 text-slate-600">Up to 24 months from inquiry date</td>
                <td className="p-3 text-slate-500">Secure electronic deletion</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-semibold text-[#0A1931]">Corporate Client SLAs &amp; Invoices</td>
                <td className="p-3 text-slate-600">8 years (as required by Indian Tax &amp; Companies Law)</td>
                <td className="p-3 text-slate-500">Encrypted financial archive / purge</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#0A1931]">Client CCTV Surveillance Footage</td>
                <td className="p-3 text-slate-600">15 to 30 days (rolling cycle)</td>
                <td className="p-3 text-slate-500">Automated FIFO hard-drive overwrite</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-semibold text-[#0A1931]">Private Investigation Case Dossiers</td>
                <td className="p-3 text-slate-600">30 to 90 days following case sign-off</td>
                <td className="p-3 text-slate-500">Permanent destruction / client handover</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#0A1931]">Guard Police Verification Records</td>
                <td className="p-3 text-slate-600">Duration of employment + 5 years (PSARA)</td>
                <td className="p-3 text-slate-500">Secure shredding &amp; regulatory archive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. User Rights */}
      <section id="user-rights" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          10. Your Rights Under Indian Data Protection Laws
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Subject to applicable statutory exceptions under the Digital Personal Data Protection Act, 2023, you have the following rights regarding your personal data processed by us:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li><strong>Right of Access &amp; Summary:</strong> You may request confirmation on whether we are processing your personal data, along with a summary of the data and third-party disclosures.</li>
          <li><strong>Right to Correction &amp; Updation:</strong> You have the right to request correction of inaccurate or incomplete personal records held by our administration.</li>
          <li><strong>Right to Erasure:</strong> You may request deletion of your personal data where its retention is no longer necessary for the purpose for which it was gathered, unless retention is mandated by law (e.g. tax, labor compliance, or ongoing legal disputes).</li>
          <li><strong>Right of Grievance Redressal:</strong> You have the right to readily accessible grievance redressal mechanisms regarding any act or omission by us regarding your data.</li>
        </ul>
        <p className="text-slate-600 text-xs mt-3">
          To exercise any of these rights, please write to our designated Grievance Officer listed in Section 12 with valid proof of identity.
        </p>
      </section>

      {/* 11. Cookies */}
      <section id="cookies-tracking" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          11. Cookies &amp; Web Tracking Policy
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Our website uses standard session cookies and analytical technologies to optimize user experience, maintain CSRF security, and assess site traffic.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li><strong>Essential Cookies:</strong> Required for fundamental site operations, form submissions, and secure browsing. These cannot be switched off.</li>
          <li><strong>Performance &amp; Analytics Cookies:</strong> Assist us in understanding which service pages (such as Security Services, Facility Management, or STP Operations) generate interest, allowing us to enhance site responsiveness.</li>
        </ul>
        <p className="text-slate-600 text-xs mt-2">
          You can configure your web browser to refuse all cookies or alert you when cookies are placed. However, disabling cookies may impact your ability to submit inquiry forms smoothly.
        </p>
      </section>

      {/* 12. Grievance Officer */}
      <section id="grievance-officer" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          12. Grievance Redressal Officer &amp; Contact Desk
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          In accordance with the Information Technology Act, 2000 and the DPDP Act 2023, the details of the designated Data Grievance Redressal Officer are provided below:
        </p>

        <div className="bg-[#0A1931] text-white p-6 sm:p-8 rounded-sm border border-slate-800 my-6 shadow-md">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-[#C5A253] text-[11px] font-bold tracking-widest uppercase mb-1">
                Designated Grievance Officer
              </div>
              <div className="text-lg font-black text-white">Legal &amp; Compliance Cell</div>
              <div className="text-white/60 text-xs mt-1">SAFE Guard FORCE — Head Office</div>

              <div className="mt-4 space-y-2 text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">Physical Address</span>
                  <span className="text-white/80 leading-relaxed block mt-0.5">
                    {settings.address_line_1},<br />
                    {settings.address_line_2},<br />
                    {settings.city}, {settings.state} — {settings.pincode}, {settings.country}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:border-l sm:border-white/10 sm:pl-6">
              <div>
                <span className="text-white/40 block text-[10px] uppercase tracking-wider">Email for Data Requests</span>
                <a
                  href={`mailto:${settings.email}?subject=Privacy%20Grievance%20Redressal`}
                  className="text-[#C5A253] font-mono text-sm font-bold hover:underline"
                >
                  {settings.email}
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase tracking-wider">Telephone Helplines</span>
                <div className="space-y-1 mt-1">
                  <a href={telHref(settings.primary_phone)} className="text-white hover:text-[#C5A253] font-bold block">
                    +91 {settings.primary_phone}
                  </a>
                  {settings.secondary_phone && (
                    <a href={telHref(settings.secondary_phone)} className="text-white/80 hover:text-[#C5A253] block">
                      +91 {settings.secondary_phone}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase tracking-wider">Turnaround Time</span>
                <span className="text-emerald-400 font-semibold text-xs">Acknowledgment within 48 hours; resolution within 15 business days.</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mt-4">
          We review and update this Privacy Policy periodically to reflect enhancements in our operational technologies, changes in law, or regulatory guidelines. Any modifications become effective immediately upon posting to this page.
        </p>
      </section>
    </LegalPageLayout>
  );
}

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
    title: "Terms & Conditions — SAFE Guard FORCE",
    description: `Official Terms and Conditions governing security guarding, facility management, technical maintenance, STP operations, and investigation services by ${settings.site_name}.`,
  };
}

const highlights: LegalHighlight[] = [
  {
    label: "Statutory Licensing",
    value: "PSARA 2005 Compliant",
    icon: "📜",
    description: "All guarding operations adhere to the Private Security Agencies (Regulation) Act and Maharashtra Rules.",
  },
  {
    label: "Workforce Integrity",
    value: "100% Police Verified",
    icon: "👮",
    description: "Every deployed security guard, marshal, and supervisor undergoes rigorous antecedent verification.",
  },
  {
    label: "Labor Compliance",
    value: "EPF, ESIC & Min Wages",
    icon: "⚖️",
    description: "Full statutory compliance with Maharashtra state labor laws, social security, and prompt wage disbursement.",
  },
  {
    label: "Legal Jurisdiction",
    value: "Courts of Mumbai",
    icon: "🏛️",
    description: "All client engagements, service contracts, and disputes are governed under the laws of India and Mumbai courts.",
  },
];

const tableOfContents: LegalTocItem[] = [
  { id: "terms-preamble", number: "1", label: "Preamble & Agreement" },
  { id: "services-scope", number: "2", label: "Scope of Services" },
  { id: "statutory-compliance", number: "3", label: "Statutory & Labor Compliances" },
  { id: "personnel-standards", number: "4", label: "Personnel Standards & Verification" },
  { id: "client-responsibilities", number: "5", label: "Client Obligations & Amenities" },
  { id: "detective-terms", number: "6", label: "Private Detective & Investigation Terms" },
  { id: "technical-maintenance-terms", number: "7", label: "Technical & STP/WTP Operations" },
  { id: "billing-payments", number: "8", label: "Commercial Terms & Wage Escalations" },
  { id: "liability-insurance", number: "9", label: "Limitation of Liability & Insurance" },
  { id: "indemnification", number: "10", label: "Indemnification" },
  { id: "non-solicitation", number: "11", label: "Non-Solicitation Covenant" },
  { id: "termination-transition", number: "12", label: "Suspension, Termination & Transition" },
  { id: "governing-law", number: "13", label: "Governing Law & Dispute Resolution" },
];

export default async function TermsAndConditionsPage() {
  const settings = await getSiteSettings();

  return (
    <LegalPageLayout
      activeTab="terms"
      eyebrow="SAFE GUARD FORCE • OPERATIONAL & CONTRACTUAL TERMS"
      title="Terms & Conditions"
      subtitle="Standard operational, service level, and contractual terms governing client engagements, facility deployments, investigation mandates, and use of SAFE Guard FORCE digital platforms."
      lastUpdated="September 2026"
      effectiveDate="January 1, 2026"
      documentRef="REF: SGF-TOC-OPS-2026-V2"
      highlights={highlights}
      tableOfContents={tableOfContents}
      settings={settings}
    >
      {/* 1. Preamble & Agreement */}
      <section id="terms-preamble" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 01</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          1. Preamble &amp; Agreement to Terms
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          These Terms and Conditions (&quot;<strong>Terms</strong>&quot;) constitute a legally binding agreement between{" "}
          <strong>SAFE Guard FORCE</strong> (&quot;<strong>Company</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;) and the entity or individual (&quot;<strong>Client</strong>&quot;, &quot;<strong>you</strong>&quot;) accessing our website, requesting proposals, or executing Service Level Agreements (SLAs), work orders, or deployment contracts.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          By engaging SAFE Guard FORCE for security guarding, facility management, technical operations, fire safety, or detective inquiries—or by accessing our web portal—you acknowledge that you have read, understood, and agreed to be governed by these Terms.
        </p>
        <div className="bg-[#F8FAFC] border-l-4 border-[#C5A253] p-4 text-xs text-slate-600 leading-relaxed">
          <strong>Hierarchy of Terms:</strong> Where a formal bilateral Master Service Agreement (MSA) or signed Service Level Agreement (SLA) exists between SAFE Guard FORCE and the Client, the specific written provisions of that executed contract shall prevail over these standard online terms to the extent of any explicit conflict.
        </div>
      </section>

      {/* 2. Scope of Services */}
      <section id="services-scope" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          2. Scope of Services &amp; Operational Divisions
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE provides integrated premise solutions across five primary operating divisions:
        </p>
        <div className="space-y-3 my-6 text-sm">
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-[#0A1931] block mb-1">A. Physical Security &amp; Guarding Services</span>
            <p className="text-xs text-slate-600">
              Deployment of uniformed armed and unarmed security guards, executive protection / PSOs, event bouncers, canine (K9) dog squads, gate access controllers, and mobile patrolling units across commercial complexes, residential societies, corporate IT parks, hospitals, and industrial warehouses.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-[#0A1931] block mb-1">B. Integrated Facility Management &amp; Housekeeping</span>
            <p className="text-xs text-slate-600">
              Mechanized housekeeping, deep sanitization, facade cleaning, waste segregation, corporate pantry support, commercial pest control, and landscaping/horticulture upkeep.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-[#0A1931] block mb-1">C. Technical Maintenance &amp; STP/WTP Operations</span>
            <p className="text-xs text-slate-600">
              Operation and routine maintenance of Sewage Treatment Plants (STP), Water Treatment Plants (WTP), diesel generators (DG Sets), electrical switchboards, plumbing systems, and HVAC/chillers by certified technicians.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-[#0A1931] block mb-1">D. Fire Safety &amp; Emergency Management</span>
            <p className="text-xs text-slate-600">
              Stationing of trained fire marshals, execution of periodic emergency evacuation drills, visual inspection of fire hydrants and extinguishers, and fire panel monitoring.
            </p>
          </div>
          <div className="border border-slate-200 p-4 bg-white">
            <span className="font-bold text-[#0A1931] block mb-1">E. Private Detective &amp; Corporate Investigation Services</span>
            <p className="text-xs text-slate-600">
              Confidential inquiries, pre/post-employment background verification, asset tracing, corporate due diligence, intellectual property protection, and lawful surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Statutory Compliances */}
      <section id="statutory-compliance" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 03</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          3. Statutory &amp; Labor Law Compliances
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE maintains strict, uncompromised adherence to all statutory labor enactments of the Government of India and the State Government of Maharashtra:
        </p>
        <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-sm mb-6">
          <li>
            <strong>PSARA Act 2005:</strong> All guarding operations conform strictly to the Private Security Agencies (Regulation) Act, 2005 and Maharashtra Private Security Agencies Rules.
          </li>
          <li>
            <strong>Social Security (EPF &amp; ESIC):</strong> 100% of our security personnel, facility workers, and technical staff are enrolled under the Employees&apos; Provident Funds &amp; Miscellaneous Provisions Act, 1952 and the Employees&apos; State Insurance (ESI) Act, 1948. Monthly statutory contribution challans are provided to clients upon request.
          </li>
          <li>
            <strong>Minimum Wages &amp; VDA:</strong> Personnel are remunerated in strict compliance with the Minimum Wages Act, 1948, including mandatory Special Allowance / Variable Dearness Allowance (VDA) as revised bi-annually by the State Labor Commissioner.
          </li>
          <li>
            <strong>Tax &amp; Corporate Filings:</strong> Prompt monthly GST returns (GSTR-1 &amp; GSTR-3B) and corporate filings ensuring zero input tax credit (ITC) disruption for our corporate clients.
          </li>
        </ul>
      </section>

      {/* 4. Personnel Standards & Verification */}
      <section id="personnel-standards" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 04</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          4. Personnel Standards, Uniforms &amp; Police Verification
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          To preserve discipline and site sanctity, SAFE Guard FORCE mandates the following personnel benchmarks:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1">Police &amp; Antecedent Verification</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every deployed guard undergoes mandatory police character verification, biometric check, residential address verification, and previous employer validation before deployment.
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1">Standard Uniform &amp; Turnout</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guards report in immaculate corporate uniform: light blue shirt, navy trousers, red beret, official SAFE belt, chest insignia, identity card, and polished footwear.
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1">Continuous Supervision</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Field Officers and Night Patrolling Managers conduct unannounced daytime and night audits to monitor guard alertness, gate registers, and post discipline.
            </p>
          </div>
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <div className="text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1">Replacement Guarantee</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In the event of absenteeism, sickness, or client dissatisfaction with a guard&apos;s conduct, SAFE Guard FORCE guarantees replacement within standard SLA turnaround times.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Client Obligations */}
      <section id="client-responsibilities" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 05</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          5. Client Obligations &amp; Workplace Amenities
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The Client agrees to fulfill the following foundational obligations to enable optimal service delivery:
        </p>
        <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-sm mb-4">
          <li>
            <strong>Humanitarian Workplace Amenities:</strong> In accordance with labor safety standards, the Client must provide stationed guards with reasonable shelter (guard cabin or kiosk protecting from rain, extreme heat, and winter elements), potable drinking water, and access to clean sanitary facilities.
          </li>
          <li>
            <strong>Safe Working Environment:</strong> The Client must maintain site perimeters free from unshielded electrical hazards, structural dangers, or hazardous chemical exposure without requisite PPE.
          </li>
          <li>
            <strong>No Unlawful Directives:</strong> Client representatives shall not instruct SAFE Guard FORCE personnel to perform personal menial tasks, domestic errands, illegal physical evictions, or activities outside the agreed security scope.
          </li>
          <li>
            <strong>Prompt Attendance Verification:</strong> The Client&apos;s authorized facility manager must verify and sign off on monthly attendance muster rolls within three (3) business days of presentation.
          </li>
        </ul>
      </section>

      {/* 6. Detective Terms */}
      <section id="detective-terms" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 06</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          6. Terms for Private Detective &amp; Investigation Services
        </h2>
        <div className="bg-[#0A1931] text-white p-6 rounded-sm my-4 border border-slate-800">
          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
            Private investigations, corporate fraud audits, asset verifications, and background checks are executed subject to specific legal conditions:
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-sm mb-4">
          <li>
            <strong>Legitimate Interest Warranty:</strong> The Client warrants that all requested inquiries are initiated for legitimate, lawful, and bona fide purposes (e.g. corporate risk mitigation, pre-employment screening, debt recovery due diligence).
          </li>
          <li>
            <strong>Strict Compliance with Indian Law:</strong> SAFE Guard FORCE will not perform illegal telecommunication wiretaps, phone recording without consent, mobile device spyware installation, or breaking and entering into private residences.
          </li>
          <li>
            <strong>Advisory Nature of Dossiers:</strong> Investigation reports reflect factual observations, public records, and verified statements collected during inquiry. Reports represent professional advisory opinions; the Client assumes full responsibility for any legal, commercial, or personal decisions made based on such dossiers.
          </li>
          <li>
            <strong>No Unlawful Extortion:</strong> Client covenants never to use our reports or surveillance findings for blackmail, extortion, unlawful harassment, or defamatory public publication.
          </li>
        </ul>
      </section>

      {/* 7. Technical Maintenance Terms */}
      <section id="technical-maintenance-terms" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 07</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          7. Technical Maintenance &amp; STP/WTP Operations
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Where SAFE Guard FORCE is contracted for electro-mechanical maintenance or Sewage Treatment Plant (STP) / Water Treatment Plant (WTP) operations:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>
            <strong>Consumables &amp; Spares:</strong> The Client is responsible for procuring or reimbursing the cost of OEM spare parts, treatment chemicals (alum, chlorine, PAC, bacterial cultures), filter media, and testing kits.
          </li>
          <li>
            <strong>Inlet Quality &amp; Effluent Standards:</strong> Treated water quality parameters (BOD, COD, TSS, pH) depend directly on incoming sewage composition, uninterrupted electrical supply, and functioning aerators/blowers.
          </li>
          <li>
            <strong>Preventive Maintenance:</strong> Our technicians adhere strictly to equipment logbooks and preventive maintenance checklists.
          </li>
        </ul>
      </section>

      {/* 8. Billing & Payments */}
      <section id="billing-payments" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 08</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          8. Commercial Terms, Invoicing &amp; Wage Escalations
        </h2>
        <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-sm mb-6">
          <li>
            <strong>Billing Cycles:</strong> Monthly service invoices are raised by the 1st to 5th day of each calendar month for services rendered in the preceding month, accompanied by verified attendance sheets.
          </li>
          <li>
            <strong>Payment Due Dates:</strong> Payment shall be disbursed by the Client within the timeframe stipulated in the SLA (standard: within 7 to 15 days of invoice date via NEFT/RTGS/Cheque).
          </li>
          <li>
            <strong>Statutory Wage Escalation Clause:</strong> Because our wage structure complies with statutory minimum wages, any revision notified by the Government of Maharashtra regarding Minimum Wages, Variable Dearness Allowance (VDA), or statutory bonus/PF rates shall be passed through to the billing rates on an exact pro-rata basis from the effective gazette date.
          </li>
          <li>
            <strong>Taxes:</strong> All quoted rates are exclusive of Goods and Services Tax (GST @ 18% or prevailing statutory rate), which will be charged additionally on every invoice.
          </li>
        </ul>
      </section>

      {/* 9. Liability & Insurance */}
      <section id="liability-insurance" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 09</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          9. Limitation of Liability &amp; Property Insurance Requirement
        </h2>
        <div className="bg-[#F8FAFC] border border-slate-300 p-5 rounded-sm my-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0A1931] mb-2">
            CRITICAL NOTICE: Deterrence Function &amp; Commercial Insurance
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            Physical security guards, mobile patrol officers, and facility staff deployed by SAFE Guard FORCE act as a <strong>preventive deterrent and access regulation mechanism</strong>. SAFE Guard FORCE is not an insurer or underwriter against theft, armed robbery, property destruction, fire, sabotage, or civil disturbance.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The Client agrees to maintain comprehensive commercial property, burglary, fire, and third-party public liability insurance coverage for its premises and assets at all times.
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>
            <strong>Liability Ceiling:</strong> To the maximum extent permitted by applicable Indian law, the maximum aggregate financial liability of SAFE Guard FORCE for any claim arising out of or related to this agreement—whether in contract, tort, or negligence—shall be strictly limited to the equivalent of <strong>one (1) month&apos;s management service fee</strong> paid by the Client for the affected post.
          </li>
          <li>
            <strong>Consequential Damages Waiver:</strong> Neither party shall be liable for indirect, incidental, punitive, special, or consequential damages, including loss of business profits, goodwill, or operational downtime.
          </li>
        </ul>
      </section>

      {/* 10. Indemnification */}
      <section id="indemnification" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          10. Indemnification
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The Client agrees to indemnify, defend, and hold harmless SAFE Guard FORCE, its directors, partners, officers, and employees against any losses, third-party damages, liabilities, fines, or legal expenses arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm mb-4">
          <li>The Client&apos;s failure to provide safe working conditions, structurally sound cabins, or basic amenities required by law.</li>
          <li>Direct unlawful instructions given by Client representatives to deployed personnel outside the signed SLA scope.</li>
          <li>Any defamation, employment, or civil litigation brought by third parties resulting from the Client&apos;s use or publication of private investigation dossiers.</li>
        </ul>
      </section>

      {/* 11. Non-Solicitation */}
      <section id="non-solicitation" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          11. Non-Solicitation &amp; Non-Poaching Covenant
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          SAFE Guard FORCE expends substantial financial resources and operational time in screening, background checking, vetting, and training security guards, marshals, supervisors, and technical personnel.
        </p>
        <div className="bg-[#F8FAFC] border-l-4 border-[#0A1931] p-4 text-xs text-slate-600 leading-relaxed my-4">
          The Client expressly covenants that during the term of service and for a period of <strong>twelve (12) months</strong> immediately following contract expiration or termination, the Client shall not, directly or indirectly (through affiliates, new vendors, or internal management), hire, recruit, employ, or contract any personnel deployed by SAFE Guard FORCE at the Client&apos;s site.
        </div>
        <p className="text-slate-600 text-xs">
          In the event of a breach of this clause, the Client shall pay SAFE Guard FORCE liquidated damages equivalent to three (3) months of the gross billing rate for each poached employee to compensate for recruitment, vetting, and training disruption.
        </p>
      </section>

      {/* 12. Suspension, Termination */}
      <section id="termination-transition" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          12. Suspension, Termination &amp; Transition Protocols
        </h2>
        <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-sm mb-4">
          <li>
            <strong>Termination for Convenience:</strong> Either party may terminate a continuing service contract by providing <strong>thirty (30) days advance written notice</strong> to the other party.
          </li>
          <li>
            <strong>Termination for Cause:</strong> Either party may immediately terminate this agreement if the other party commits a material breach (including non-payment of invoices exceeding 15 days past due date or failure to rectify unsafe working conditions) that remains uncured after seven (7) days written notice.
          </li>
          <li>
            <strong>Orderly Demobilization:</strong> During the 30-day notice period, SAFE Guard FORCE shall maintain full security and facility standards. Upon the final date, all gate logs, equipment, and access keys shall be formally handed over to the client management.
          </li>
        </ul>
      </section>

      {/* 13. Governing Law */}
      <section id="governing-law" className="scroll-mt-28 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#C5A253]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#C5A253]">Section 13</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A1931] tracking-tight mb-4">
          13. Governing Law, Dispute Resolution &amp; Mumbai Jurisdiction
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          These Terms, and all contractual relationships arising therefrom, shall be governed by and construed in accordance with the substantive laws of the <strong>Republic of India</strong>.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          In the event of any dispute, difference, or claim arising between the parties:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 text-sm mb-6">
          <li>The parties shall first make good-faith efforts to resolve the matter through mutual executive discussions between designated senior representatives within thirty (30) calendar days.</li>
          <li>If unresolved amicably, the dispute shall be referred to arbitration in accordance with the <strong>Arbitration and Conciliation Act, 1996</strong>, by a sole arbitrator mutually appointed by both parties. The seat and venue of arbitration shall be <strong>Mumbai, Maharashtra</strong>, and proceedings shall be conducted in English.</li>
          <li>Subject to the arbitration clause, the competent courts situated in <strong>Mumbai, Maharashtra</strong> shall have exclusive territorial and subject-matter jurisdiction.</li>
        </ol>

        <div className="bg-[#0A1931] text-white p-6 rounded-sm mt-6 border border-slate-800">
          <div className="text-xs uppercase tracking-widest font-bold text-[#C5A253] mb-1">
            Contract Execution &amp; Inquiries
          </div>
          <p className="text-xs text-white/80 leading-relaxed">
            To execute a customized Service Level Agreement (SLA) for your commercial complex, residential society, or industrial plant, please contact our contracts desk at{" "}
            <a href={`mailto:${settings.email}`} className="text-[#C5A253] underline font-mono">
              {settings.email}
            </a>{" "}
            or call our corporate desk at <a href={telHref(settings.primary_phone)} className="text-[#C5A253] font-bold">+{settings.primary_phone}</a>.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}

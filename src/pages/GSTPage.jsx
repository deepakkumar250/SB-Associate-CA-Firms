import { Receipt, FileBadge, Wallet, FileCheck, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const subServices = [
  {
    title: 'GST Registration',
    icon: Receipt,
    desc: 'Complete support with new GST registrations, amendments, cancellation procedures, and classification of goods/services (HSN & SAC codes) for all businesses.',
    deliverables: ['GSTIN Registration Certificate', 'HSN/SAC Code advisory', 'GST portal setup']
  },
  {
    title: 'GST Return Filing',
    icon: FileBadge,
    desc: 'End-to-end management of monthly and quarterly returns (GSTR-1, GSTR-3B, GSTR-4, and GSTR-9/9C annual reconciliations), avoiding delay penalties.',
    deliverables: ['GSTR filing submissions', 'Input Tax Credit (ITC) reconciliation', 'E-Way bill advisory']
  },
  {
    title: 'GST Audit & Reconciliation',
    icon: Wallet,
    desc: 'Assessing your accounting ledgers to match purchase records with sales invoices on GSTR-2B. We ensure compliance errors are flagged and resolved.',
    deliverables: ['GSTR-9C Reconciliation Statement', 'Input Tax Credit audit reports', 'Error identification logs']
  },
  {
    title: 'GST Advisory & Appeal Support',
    icon: FileCheck,
    desc: 'Advisory on transactional tax structures, export refund filings (LUT setup), and responding to official GST show-cause notices or audit memos.',
    deliverables: ['LUT filings setup', 'GST notice reply drafts', 'Refunding execution advisory']
  }
];

export default function GSTPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="GST Consultancy Services"
        subtitle="Stay compliant and optimize your Input Tax Credit (ITC) with expert GST assistance."
        bgImage="/images/hero-boardroom.png"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'GST Consultancy' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="section-label">Indirect Taxation Desk</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Navigating GST Reconciliations & Filing Timelines Seamlessly
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  With multi-state operations, reconciling GSTR-2B with internal purchase ledgers is critical. Our firm uses cloud systems to match accounts, recover missed Input Tax Credits, and resolve GST audits.
                </p>
              </div>

              {/* Sub-services Grid */}
              <div className="space-y-8">
                {subServices.map((sub, idx) => {
                  const Icon = sub.icon;
                  return (
                    <div key={idx} className="bg-light-grey rounded-2xl p-8 border border-medium-grey hover:border-primary-blue transition-colors duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-extrabold text-dark-navy font-heading">{sub.title}</h3>
                      </div>
                      <p className="text-xs text-text-body leading-relaxed mb-6">{sub.desc}</p>
                      
                      <div className="border-t border-medium-grey/60 pt-4">
                        <h4 className="text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">Key Deliverables:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2 list-none p-0 m-0">
                          {sub.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-xs text-text-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-growth-green" />
                              {del}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 sticky top-28 space-y-8">
              <div className="bg-linear-to-br from-dark-navy to-primary-blue text-white rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-extrabold font-heading mb-4">
                  Schedule GST Audit Review
                </h3>
                <p className="text-xs text-text-light/95 leading-relaxed mb-6">
                  Verify if your business is losing money on mismatched GSTR-2B Input Tax Credits. Contact us for a complete ITC audit and notice risk evaluation.
                </p>
                <a href="/contact" className="gradient-btn justify-center text-xs py-3 w-full no-underline">
                  Get GST Advisory Setup
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="bg-light-grey rounded-2xl p-6 border border-medium-grey">
                <h4 className="font-extrabold text-dark-navy font-heading mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {[
                    { q: 'What is the limit for GST registration?', a: 'GST registration is mandatory for service providers exceeding ₹20 Lakhs annual turnover and goods suppliers exceeding ₹40 Lakhs (special categories have lower limits).' },
                    { q: 'What happens if GSTR-2B does not match?', a: 'Under GST rules, companies cannot claim ITC unless invoices match purchase logs. Mismatches lead to automated notice assessments.' }
                  ].map((faq, fIdx) => (
                    <div key={fIdx} className="border-b border-medium-grey pb-3 last:border-0 last:pb-0">
                      <h5 className="font-bold text-xs text-dark-navy flex items-start gap-1">
                        <HelpCircle size={14} className="text-primary-blue shrink-0 mt-0.5" />
                        {faq.q}
                      </h5>
                      <p className="text-[0.7rem] text-text-muted mt-1 leading-normal">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

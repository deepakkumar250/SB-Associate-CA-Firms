import { ShieldCheck, Search, FileSearch, Scale, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const subServices = [
  {
    title: 'Statutory Audit',
    icon: ShieldCheck,
    desc: 'Independent examination of financial statements as required by the Companies Act, 2013. We verify that reports present a true and fair view of the company\'s financial position.',
    deliverables: ['Audit Report in Form ADT-1/CARO', 'Verification of Balance Sheet & P&L', 'Compliance review with Ind AS']
  },
  {
    title: 'Internal Audit',
    icon: Search,
    desc: 'Risk-focused assessment of your internal control frameworks, operating processes, and corporate governance systems to plug revenue leakage and improve operational efficiency.',
    deliverables: ['Internal Control Assessment Report', 'SOP compliance checklist', 'Process improvement roadmap']
  },
  {
    title: 'Tax Audit',
    icon: FileSearch,
    desc: 'Mandatory tax audit under Section 44AB of the Income Tax Act for businesses exceeding the prescribed turnover limits, ensuring accurate compliance and reporting of deductions.',
    deliverables: ['Form 3CD and Form 3CB filings', 'Reconciliation of tax computations', 'Identification of disallowed expenses']
  },
  {
    title: 'Due Diligence',
    icon: Scale,
    desc: 'Comprehensive financial, tax, and legal due diligence reports for companies planning acquisitions, mergers, partnerships, or venture capital funding.',
    deliverables: ['Financial Health Valuation Report', 'Tax compliance liability assessment', 'Risk mitigation advisory']
  }
];

export default function AuditPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Audit & Assurance Services"
        subtitle="Ensuring compliance, transparency, and stakeholder trust through high-precision corporate auditing."
        bgImage="/images/audit-services.png"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Audit & Assurance' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="section-label">Core Competency</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Building Transparency with Statutory & Internal Audit Frameworks
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  Regulatory frameworks in India are constantly evolving. Our audit team delivers independent, objective assurance designed to help you navigate compliance while identifying cost-saving options and plugging leakages.
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

            {/* Right Sidebar - Calculator-themed layout accent */}
            <div className="lg:col-span-4 sticky top-28 space-y-8">
              <div className="bg-linear-to-br from-dark-navy to-primary-blue text-white rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-extrabold font-heading mb-4">
                  Need a Statutory Audit Quote?
                </h3>
                <p className="text-xs text-text-light/95 leading-relaxed mb-6">
                  Provide your annual business turnover and transactional volume. We will prepare an audit execution blueprint mapping timelines and documentation requirements.
                </p>
                <a href="/contact" className="gradient-btn justify-center text-xs py-3 w-full no-underline">
                  Get Free Audit Quote
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="bg-light-grey rounded-2xl p-6 border border-medium-grey">
                <h4 className="font-extrabold text-dark-navy font-heading mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {[
                    { q: 'Who needs a statutory audit?', a: 'All registered companies in India (Pvt Ltd, Public, OPC) must audit their accounts annually regardless of turnover.' },
                    { q: 'When is a Tax Audit mandatory?', a: 'Under Section 44AB, it is mandatory if business turnover exceeds ₹10 Cr (for cash transactions < 5%) or ₹2 Cr otherwise.' }
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

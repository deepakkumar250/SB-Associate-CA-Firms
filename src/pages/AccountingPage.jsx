import { BookOpen, BarChart3, CreditCard, PieChart, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const subServices = [
  {
    title: 'Bookkeeping',
    icon: BookOpen,
    desc: 'Recording of daily financial transactions on secure cloud ledgers (Tally Prime, QuickBooks, Zoho Books), facilitating smooth account operations and tracking.',
    deliverables: ['Monthly ledger updates', 'Bank reconciliation statements', 'Accounts payable & receivable tracking']
  },
  {
    title: 'Financial Statements',
    icon: BarChart3,
    desc: 'Annual financial statement preparation including Balance Sheets, Profit & Loss Accounts, and Cash Flow Reports compliant with Indian GAAP and Companies Act rules.',
    deliverables: ['Audit-ready Balance Sheets', 'Cash Flow analysis statements', 'Depreciation schedules']
  },
  {
    title: 'Payroll Management & Compliance',
    icon: CreditCard,
    desc: 'Processing employee payroll, calculating PF/ESI contributions, handling Professional Tax deductions, and generating official salary payslips.',
    deliverables: ['Monthly payroll sheets', 'PF & ESI compliance filings', 'Form 16 preparation for staff']
  },
  {
    title: 'MIS Reports & Cashflow Analytics',
    icon: PieChart,
    desc: 'Customized Management Information System (MIS) reporting and segment profitability analysis, providing founders with clear cashflow tracking and forecasts.',
    deliverables: ['Monthly cashflow MIS packs', 'Budget variance analysis sheets', 'Segment profitability reports']
  }
];

export default function AccountingPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Accounting & Bookkeeping"
        subtitle="Leverage cloud accounting ledger systems and structured financial reporting."
        bgImage="/images/accounting-services.png"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Accounting & Bookkeeping' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="section-label">Finance & Bookkeeping Desk</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Maintain Clean, Audit-Ready Ledgers on Secure Cloud Databases
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  Outsourced accounting helps businesses minimize overheads while maintaining financial reports. Our accountants reconcile ledgers monthly, ensuring tax computations and compliance filings remain smooth.
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
                  Outsource Your Bookkeeping
                </h3>
                <p className="text-xs text-text-light/95 leading-relaxed mb-6">
                  Save on internal finance salaries. Outsource bookkeeping to our certified accountants for secure cloud accounting, payroll, and direct tax compliance.
                </p>
                <a href="/contact" className="gradient-btn justify-center text-xs py-3 w-full no-underline">
                  Get Accounting Quote
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="bg-light-grey rounded-2xl p-6 border border-medium-grey">
                <h4 className="font-extrabold text-dark-navy font-heading mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {[
                    { q: 'What software does your firm support?', a: 'We support all major cloud platforms including Tally Prime, Zoho Books, QuickBooks, and Xero.' },
                    { q: 'Why is payroll compliance critical?', a: 'Failing to deposit PF and ESI contributions on time leads to heavy interest liabilities and statutory audit disqualifications.' }
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

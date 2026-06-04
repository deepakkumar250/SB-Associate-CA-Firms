import { Calculator, Users, Landmark, FileBarChart, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const subServices = [
  {
    title: 'Individual Tax Filing',
    icon: Calculator,
    desc: 'Hassle-free preparation and filing of Income Tax Returns (ITR-1 to ITR-4) for salaried employees, business professionals, NRI investors, and high-net-worth individuals.',
    deliverables: ['ITR acknowledgment copy', 'Capital gains taxation reports', 'Tax computation sheets']
  },
  {
    title: 'Corporate Tax Services',
    icon: Users,
    desc: 'Advisory on minimum alternate tax (MAT), computation of advance tax installments, tax audit compliance, and filing of GSTR/Corporate ITR-6 returns.',
    deliverables: ['Advance tax calculations', 'Form 3CD audit reports', 'MAT credit computations']
  },
  {
    title: 'Tax Planning & Optimization',
    icon: Landmark,
    desc: 'Proactive tax mitigation planning designed around standard deductions, capital gains rollover allowances, corporate mergers, and employee benefit restructuring.',
    deliverables: ['Annual Tax Saving Blueprint', 'Restructuring advisory reports', 'Investment compliance check']
  },
  {
    title: 'Tax Litigation Support',
    icon: FileBarChart,
    desc: 'Assistance during scrutiny assessments, drafting replies to CIT / ITAT notices, rectifications under Section 154, and official representations before tax authorities.',
    deliverables: ['Notice response drafts', 'Appeals filings documents', 'ICAI compliance backing']
  }
];

export default function IncomeTaxPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Income Tax Services"
        subtitle="Stay compliant, mitigate liabilities, and optimize taxes through certified CA planning."
        bgImage="/images/tax-planning.png"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Income Tax' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="section-label">Tax Planning Desk</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Minimizing Liabilities while Securing Regulatory Compliance
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  We help corporate organizations and individuals align their tax planning with the latest Direct Tax regulations. Our certified advisors handle statutory ITR filings and help resolve tax notices from the IT department.
                </p>
              </div>

              {/* Sub-services Grid */}
              <div className="space-y-8">
                {subServices.map((sub, idx) => {
                  const Icon = sub.icon;
                  return (
                    <div key={idx} className="bg-light-grey rounded-2xl p-8 border border-medium-grey hover:border-growth-green transition-colors duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center text-growth-green">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
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

            {/* Right Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-8">
              <div className="bg-linear-to-br from-dark-navy to-growth-green text-white rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-extrabold font-heading mb-4">
                  Schedule Tax Advisory Session
                </h3>
                <p className="text-xs text-text-light/95 leading-relaxed mb-6">
                  Sit down with our tax planning partners. We will analyze your financial reports, assets, capital gains, and liabilities to construct a custom tax-mitigation blueprint.
                </p>
                <a href="/contact" className="gradient-btn justify-center text-xs py-3 w-full no-underline">
                  Book Advisory Session
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="bg-light-grey rounded-2xl p-6 border border-medium-grey">
                <h4 className="font-extrabold text-dark-navy font-heading mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {[
                    { q: 'What is advance tax?', a: 'If your estimated net tax liability for a financial year exceeds ₹10,000, you must pay tax in four installments: June 15, Sep 15, Dec 15, and March 15.' },
                    { q: 'How long should financial records be kept?', a: 'Under Section 149 of the Income Tax Act, scrutiny assessments can be reopened for up to 6 years. We advise keeping books for 8 years.' }
                  ].map((faq, fIdx) => (
                    <div key={fIdx} className="border-b border-medium-grey pb-3 last:border-0 last:pb-0">
                      <h5 className="font-bold text-xs text-dark-navy flex items-start gap-1">
                        <HelpCircle size={14} className="text-growth-green shrink-0 mt-0.5" />
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

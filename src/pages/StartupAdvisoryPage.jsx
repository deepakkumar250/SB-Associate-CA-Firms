import { Layers, LineChart, BarChart3, CheckSquare, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const subServices = [
  {
    title: 'Business Structuring',
    icon: Layers,
    desc: 'Advisory on optimal entity selection (LLP vs Private Limited), co-founder equity allocation agreements, vesting schedules, and corporate governance setup.',
    deliverables: ['Co-founder vesting blueprints', 'Capital structuring plans', 'Entity suitability reports']
  },
  {
    title: 'Funding Readiness & Valuation',
    icon: LineChart,
    desc: 'Preparing investor-ready pitch decks, constructing valuation reports (Discounted Cash Flow, comparable transactions), and coordinating deal due diligence.',
    deliverables: ['Certified valuation report', 'Due diligence checklist pack', 'Shareholders agreement advisory']
  },
  {
    title: 'Financial Modelling',
    icon: BarChart3,
    desc: 'Building 3-year dynamic financial projections, unit economics calculators, burn rate trackers, and scenario analysis models for startup pitches.',
    deliverables: ['Dynamic Excel financial models', 'Burn rate projection sheets', 'Unit economics dashboard templates']
  },
  {
    title: 'Compliance Management Desk',
    icon: CheckSquare,
    desc: 'Managing ongoing ROC compliance, filings of Form statutory records, board resolution drafts, and secretarial audits so founders focus on scaling.',
    deliverables: ['ROC compliance tracker log', 'Board resolution documents', 'FEMA & foreign funding filing support']
  }
];

export default function StartupAdvisoryPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Startup Advisory Services"
        subtitle="Unlocking capital structures, funding readiness, valuations, and compliance blueprints for founders."
        bgImage="/images/startup-advisory.png"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Startup Advisory' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="section-label">Venture Planning Desk</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Accelerating Venture Capital Funding with Investor-Ready Audits
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  Securing Series A or seed investments requires clean books, structured equity models, and compliant operations. Our senior partners work with you to handle valuations and due diligence.
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

            {/* Right Column */}
            <div className="lg:col-span-4 sticky top-28 space-y-8">
              <div className="bg-linear-to-br from-dark-navy to-growth-green text-white rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-extrabold font-heading mb-4">
                  Schedule Funding Advisory
                </h3>
                <p className="text-xs text-text-light/95 leading-relaxed mb-6">
                  Pitching to angels or VCs? Schedule a financial modeling review session with our senior valuation partners.
                </p>
                <a href="/contact" className="gradient-btn justify-center text-xs py-3 w-full no-underline">
                  Get Funding Ready
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="bg-light-grey rounded-2xl p-6 border border-medium-grey">
                <h4 className="font-extrabold text-dark-navy font-heading mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {[
                    { q: 'Who can issue a valuation report in India?', a: 'Under the Companies Act, only a Registered Valuer (IBBI certified) or a SEBI registered merchant banker can sign valuation reports for stock issues.' },
                    { q: 'What is co-founder equity vesting?', a: 'Vesting prevents a co-founder from leaving the startup early with a large equity share. Equity is typically earned over a 4-year period with a 1-year cliff.' }
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

import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { caseStudies } from '../data/caseStudies';
import ConsultationCTA from '../components/sections/ConsultationCTA';

export default function CaseStudiesPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Case Studies & Impact"
        subtitle="Explore detailed breakdowns of how our tax planning, audits, and advisory drove corporate growth."
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Case Studies' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.title}
                className="bg-light-grey rounded-3xl border border-medium-grey overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12"
              >
                
                {/* Visual Stats Column */}
                <div className="lg:col-span-4 bg-linear-to-br from-dark-navy to-primary-blue text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
                  
                  <div>
                    <span className="text-xs font-bold text-growth-green bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {cs.category}
                    </span>
                    <h4 className="text-sm font-bold text-text-light/80 mt-3">{cs.industry} Sector</h4>
                  </div>

                  <div className="space-y-6 my-10">
                    {cs.stats.map((st, sIdx) => (
                      <div key={sIdx}>
                        <div className="text-3xl font-extrabold text-growth-green font-sans">{st.value}</div>
                        <div className="text-xs font-bold text-text-light/70 uppercase tracking-widest mt-1">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs font-semibold text-text-light/60">
                    Audit Verification Verified &bull; 2026
                  </div>
                </div>

                {/* Case Details Column */}
                <div className="lg:col-span-8 p-8 md:p-12 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-navy font-heading leading-tight">
                    {cs.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-1">
                        The Challenge
                      </div>
                      <p className="text-sm text-text-body leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-growth-green uppercase tracking-wider mb-1">
                        Our Solution
                      </div>
                      <p className="text-sm text-text-body leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-medium-grey mt-4">
                      <div className="text-xs font-bold text-dark-navy uppercase tracking-wider mb-1">
                        Tangible Result
                      </div>
                      <p className="text-sm text-text-body font-medium leading-relaxed m-0">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

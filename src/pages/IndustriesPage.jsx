import { ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { industries } from '../data/industries';
import ConsultationCTA from '../components/sections/ConsultationCTA';

export default function IndustriesPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Industries We Serve"
        subtitle="Specialized financial auditing, tax structuring, and compliance services tailored to your sector."
        bgImage="/images/hero-boardroom.png"
        breadcrumbs={[{ name: 'Industries' }]}
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Sector Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy leading-tight">
              Bespoke Financial Frameworks for <span className="gradient-text">Different Sectors</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto mt-4 text-base">
              Every industry requires a specific tax planning and audit workflow. Our partners bring deep understanding of manufacturing, e-commerce, healthcare, and nonprofit regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="bg-light-grey rounded-2xl border border-medium-grey p-8 hover:border-primary-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-dark-navy mb-3 font-heading">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-text-body leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="border-t border-medium-grey pt-4 mt-auto">
                    <span className="text-[0.62rem] font-bold text-text-muted uppercase tracking-wider">
                      CA Compliance Blueprint Ready
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Context */}
      <section className="py-24 bg-light-grey border-t border-medium-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Sector Risks</span>
              <h2 className="text-3xl font-extrabold text-dark-navy font-heading">
                Addressing Sector-Specific Tax Risks Proactively
              </h2>
              <p className="text-text-body text-sm leading-relaxed mt-4">
                Operating a manufacturing company involves physical inventory auditing under cost records regulations, whereas e-commerce platforms must comply with TCS provisions under multi-state GST regulations.
              </p>
              <p className="text-text-body text-sm leading-relaxed mt-4">
                We design specific audit checksheets and advance taxation models to protect your business from statutory compliance notices.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-medium-grey">
              <h3 className="text-xl font-extrabold text-dark-navy mb-6 font-heading">Sector Challenges We Manage</h3>
              <div className="space-y-4">
                {[
                  { title: 'FCRA Compliance for NGOs', desc: 'Managing foreign contribution accounting, statutory audits, and GSTR filing compliance for non-profits.' },
                  { title: 'RERA Audits for Real Estate', desc: 'Dedicated CA reports certifying fund deployment on real estate project bank accounts under RERA.' },
                  { title: 'STPI Compliance for IT Companies', desc: 'Advisory on software technology park tax exemptions and export transfer pricing reports.' }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-medium-grey pb-3 last:border-0 last:pb-0">
                    <h4 className="font-bold text-xs text-dark-navy">{item.title}</h4>
                    <p className="text-[0.7rem] text-text-muted mt-1 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

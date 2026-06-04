import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { serviceCategories } from '../data/services';
import ConsultationCTA from '../components/sections/ConsultationCTA';

export default function ServicesPage() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <PageHero
        title="Our Services Directory"
        subtitle="Empowering startups and large corporate firms with CA-certified statutory audits, tax advisory, and compliance structures."
        bgImage="/images/hero-boardroom.png"
        breadcrumbs={[{ name: 'Services' }]}
      />

      {/* Services Showcase */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="bg-light-grey rounded-2xl border border-medium-grey overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-navy/60 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col justify-between grow">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-4 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                        <IconComp size={24} />
                      </div>
                      <h3 className="text-xl font-extrabold text-dark-navy mb-2 font-heading">{svc.title}</h3>
                      <p className="text-xs text-text-body leading-relaxed mb-6">
                        {svc.desc}
                      </p>
                      
                      <div className="space-y-2 mb-8">
                        {svc.subServices.map((sub, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-growth-green" />
                            {sub.title}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to={`/services/${svc.slug}`} className="gradient-btn justify-center text-xs py-3 w-full no-underline">
                      Explore Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Standards Section */}
      <section className="py-24 bg-light-grey relative border-t border-medium-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Quality Standards</span>
              <h2 className="text-3xl font-extrabold text-dark-navy font-heading">
                Ensuring EY & Deloitte Level Advisory Standards
              </h2>
              <p className="text-text-body text-sm leading-relaxed mt-4">
                Our audit, accounting, and litigation support services adhere to international audit protocols and the guidelines issued by the Institute of Chartered Accountants of India (ICAI).
              </p>
              <p className="text-text-body text-sm leading-relaxed mt-4">
                We make sure our corporate clients operate in absolute synergy with ROC rules, MCA standards, and direct tax guidelines, ensuring seamless scaling.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'DPIIT Registered', desc: 'Accelerated benefits for startups looking for tax exemptions.' },
                { title: 'ICAI Certified Auditors', desc: 'Official certification for balance sheet signings and ROC reports.' },
                { title: 'TDS/GST Experts', desc: 'Handling multi-state billing structures with automated compliance.' },
                { title: 'Data Security Assured', desc: 'Secure digital document systems protecting sensitive financial files.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-medium-grey">
                  <h4 className="font-bold text-dark-navy text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-text-muted leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

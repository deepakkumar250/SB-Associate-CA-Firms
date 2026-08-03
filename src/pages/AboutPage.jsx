import { motion } from 'framer-motion';
import { Award, Compass, Eye, ShieldCheck, Heart, Target, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { team } from '../data/team';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const coreValues = [
  { title: 'Integrity', desc: 'Operating with absolute honesty and ethics across all audits and advisory transactions.', icon: ShieldCheck },
  { title: 'Client Excellence', desc: 'Putting client financial growth and legal safety at the centre of our strategic plans.', icon: Heart },
  { title: 'Trustworthiness', desc: 'Adhering to code of ethics prescribed by ICAI with absolute confidentiality.', icon: Compass },
  { title: 'Accuracy', desc: 'Bringing EY/Deloitte-level precision in bookkeeping, payroll, tax calculations, and auditing.', icon: Award }
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <PageHero
        title="About SB Associate"
        subtitle="A premier Chartered Accountancy firm delivering high-end corporate compliance and financial growth planning."
        bgImage="/images/about-team.png"
        breadcrumbs={[{ name: 'About' }]}
      />

      {/* Firm Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Firm Overview</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy mb-6">
                25+ Years of Dedicated <span className="gradient-text">Financial Leadership</span>
              </h2>
              <p className="text-text-body text-base leading-relaxed mb-6">
                Founded in 2000, SB Associate has grown to become one of India\'s most trusted Chartered Accountancy firms. We specialize in statutory audits, corporate taxation, corporate law advisory, GST compliance, and startup financial structuring.
              </p>
              <p className="text-text-body text-base leading-relaxed mb-6">
                We believe in raising the standard of financial governance. Our partners bring multi-faceted expertise to ensure that your corporate taxes are optimized, audits are thorough, and payroll is managed without compliance friction.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'DPIIT Certified Advisors',
                  'ICAI Certified Senior Partners',
                  'Dedicated GST Dispute Desk',
                  'Secure Cloud Ledger Systems'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-dark-navy">
                    <CheckCircle2 size={16} className="text-growth-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-light-grey rounded-2xl p-10 border border-medium-grey relative">
              <h3 className="text-2xl font-extrabold text-dark-navy mb-6 font-heading">
                Our Strategic Principles
              </h3>
              
              <div className="space-y-6">
                {[
                  { title: 'Vision', desc: 'To provide world-class financial blueprints that fuel stable organizational growth and compliance confidence.', icon: Eye },
                  { title: 'Mission', desc: 'Leveraging data analytics, deep taxation knowledge, and corporate law to deliver high-performance growth blueprints.', icon: Target }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-blue text-white flex items-center justify-center shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-dark-navy text-lg">{item.title}</h4>
                        <p className="text-sm text-text-body mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light-grey relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy">
              The Foundations of <span className="gradient-text">Our Practice</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 border border-medium-grey hover:border-growth-green transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-growth-green/10 flex items-center justify-center text-growth-green mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-extrabold text-dark-navy mb-2 font-heading">{val.title}</h3>
                  <p className="text-xs text-text-body leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy">
              Meet Our <span className="gradient-text">Senior Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                custom={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
                className="partner-card"
              >
                <div className="partner-card-img-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="partner-card-img"
                  />
                </div>
                <div className="p-6 text-center flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-xl font-extrabold text-dark-navy mb-1 font-heading">{member.name}</h3>
                    <div className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-3">{member.role}</div>
                    <p className="text-xs text-text-body leading-relaxed mb-4">{member.bio}</p>
                  </div>
                  <div>
                    <div className="inline-block bg-light-grey text-[0.68rem] font-bold text-dark-navy uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-medium-grey">
                      {member.experience}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Milestones / Timeline */}
      <section className="py-24 bg-light-grey relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">History</span>
            <h2 className="text-3xl font-extrabold text-dark-navy font-heading">
              Our Growth Journey
            </h2>
          </div>

          <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-medium-grey">
            {[
              { year: '2000', title: 'Firm Incorporation', desc: 'SB Associate founded in Bhubaneswar with a focus on taxation and bookkeeping.' },
              { year: '2008', title: 'Corporate Audit Expansion', desc: 'Broadened scope into Statutory and Internal Auditing for state PSUs.' },
              { year: '2017', title: 'GST Advisory Launch', desc: 'Formed a specialized GST compliance desk servicing multi-state logistics and retail clients.' },
              { year: '2022', title: 'Startup Incubation Service', desc: 'Pioneered funding readiness, financial modeling, and venture compliance desk.' }
            ].map((milestone, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary-blue border-4 border-white shadow-xs z-10" />
                
                <div className="pl-10 md:pl-0 md:w-1/2 md:text-right md:pr-10">
                  <span className="text-xs font-bold text-growth-green uppercase tracking-wider">{milestone.year}</span>
                  <h4 className="font-extrabold text-dark-navy text-lg mt-1">{milestone.title}</h4>
                  <p className="text-xs text-text-body leading-relaxed mt-1">{milestone.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, FileText, ClipboardCheck, TrendingUp, ReceiptText, Briefcase, Building2 } from 'lucide-react';

const services = [
  {
    icon: <FileText size={32} />,
    title: 'Tax Planning & Filing',
    desc: 'Strategic tax planning and timely filing services to minimize liability and maximize savings for individuals and businesses.',
    color: 'from-blue-500 to-primary-blue',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: 'Audit & Assurance',
    desc: 'Comprehensive audit services ensuring accuracy, compliance, and transparency in financial reporting.',
    color: 'from-primary-green to-emerald-600',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Financial Planning',
    desc: 'Personalized financial strategies for wealth management, investment optimization, and long-term growth.',
    color: 'from-violet-500 to-purple-700',
  },
  {
    icon: <ReceiptText size={32} />,
    title: 'GST Compliance',
    desc: 'End-to-end GST registration, return filing, and compliance management for seamless operations.',
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Business Advisory',
    desc: 'Expert guidance on business structuring, market entry, mergers, and strategic decision-making.',
    color: 'from-primary-blue to-indigo-600',
  },
  {
    icon: <Building2 size={32} />,
    title: 'Company Registration & ROC Filing',
    desc: 'Hassle-free company incorporation, annual compliance, and ROC filing for startups and enterprises.',
    color: 'from-teal-400 to-primary-green',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-light-grey relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-green/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="section-label">
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-heading font-bold text-dark-navy mb-4"
          >
            Innovative Services that Elevate Your{' '}
            <span className="gradient-text">Business Potential</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-text-body max-w-2xl mx-auto text-base"
          >
            From tax optimization to business advisory, we provide comprehensive financial
            services tailored to your unique needs.
          </motion.p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="group bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-medium-grey hover:border-transparent relative overflow-hidden"
            >
              {/* Gradient top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-blue to-primary-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${svc.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {svc.icon}
              </div>

              <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-primary-blue transition-colors duration-300">
                {svc.title}
              </h3>

              <p className="text-text-body text-sm leading-relaxed mb-5">
                {svc.desc}
              </p>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm no-underline group-hover:gap-3 transition-all duration-300"
              >
                Read More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    category: 'Tax Optimization',
    title: 'Corporate Tax Optimization',
    desc: 'Helped a mid-sized manufacturing firm reduce tax liability by 35% through strategic restructuring and deduction planning.',
    color: 'from-primary-blue to-blue-400',
    bg: 'bg-blue-50',
  },
  {
    category: 'GST Compliance',
    title: 'GST Filing & Compliance',
    desc: 'Streamlined GST compliance for an e-commerce chain with 50+ outlets, achieving 100% on-time filing across all entities.',
    color: 'from-primary-green to-emerald-400',
    bg: 'bg-green-50',
  },
  {
    category: 'Startup Advisory',
    title: 'Startup Financial Planning',
    desc: 'Designed a comprehensive financial roadmap for a tech startup, securing ₹2 Cr in Series A funding within 6 months.',
    color: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-50',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function CaseStudies() {
  return (
    <section className="py-24 bg-light-grey relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="section-label">
            Case Studies
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-heading font-bold text-dark-navy mb-4"
          >
            Explore Projects that Highlight Our{' '}
            <span className="gradient-text">Strategic Expertise</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-text-body max-w-2xl mx-auto text-base"
          >
            Real results, real impact. See how we've helped businesses transform their
            financial operations and achieve sustainable growth.
          </motion.p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="group relative bg-white rounded-2xl overflow-hidden border border-medium-grey hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top gradient strip */}
              <div className={`h-2 bg-linear-to-r ${cs.color}`} />

              {/* Icon area */}
              <div className={`${cs.bg} mx-6 mt-6 rounded-xl p-8 flex items-center justify-center`}>
                <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${cs.color} flex items-center justify-center text-white text-3xl font-heading font-bold group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {cs.category.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                {/* Category tag */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r ${cs.color} text-white mb-3`}>
                  {cs.category}
                </span>

                <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-primary-blue transition-colors">
                  {cs.title}
                </h3>

                <p className="text-text-body text-sm leading-relaxed mb-5">
                  {cs.desc}
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm no-underline group-hover:gap-3 transition-all duration-300"
                >
                  View Details
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

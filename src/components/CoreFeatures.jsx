import { motion } from 'framer-motion';
import { Target, BarChart3, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: <Target size={36} />,
    title: 'Personalized Strategies',
    desc: 'Every client receives a customized financial roadmap built around their unique goals, industry landscape, and growth aspirations.',
    color: 'from-primary-blue to-blue-400',
  },
  {
    icon: <BarChart3 size={36} />,
    title: 'Data-Driven Insights',
    desc: 'We leverage cutting-edge analytics and financial modeling to deliver actionable insights that power smarter business decisions.',
    color: 'from-primary-green to-emerald-400',
  },
  {
    icon: <ShieldAlert size={36} />,
    title: 'Risk Management',
    desc: 'Proactive identification and mitigation of financial risks, ensuring your business stays resilient and compliant in any market condition.',
    color: 'from-violet-500 to-purple-400',
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

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-linear-to-br from-dark-navy via-primary-blue to-dark-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary-green/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block bg-white/10 text-white/90 px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20"
          >
            Core Features
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4"
          >
            Core Features Powering Financial and{' '}
            <span className="text-primary-green">Business Success</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/60 max-w-2xl mx-auto text-base"
          >
            Our core competencies are designed to deliver measurable value across
            every dimension of your financial operations.
          </motion.p>
        </motion.div>

        {/* Feature blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:bg-white/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`w-18 h-18 rounded-2xl bg-linear-to-br ${feat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {feat.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feat.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {feat.desc}
              </p>

              {/* Decorative line */}
              <div className={`mt-6 h-0.5 w-12 bg-linear-to-r ${feat.color} rounded-full group-hover:w-20 transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

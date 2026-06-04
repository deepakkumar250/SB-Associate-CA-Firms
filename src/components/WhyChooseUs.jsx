import { motion } from 'framer-motion';
import { ThumbsUp, Clock, Users, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: <ThumbsUp size={28} />, value: '98%', label: 'Client Satisfaction', color: 'from-primary-blue to-blue-400' },
  { icon: <Clock size={28} />, value: '25+', label: 'Years Experience', color: 'from-primary-green to-emerald-400' },
  { icon: <Users size={28} />, value: '500+', label: 'Clients Served', color: 'from-violet-500 to-purple-400' },
  { icon: <ShieldCheck size={28} />, value: '100%', label: 'Compliance Record', color: 'from-orange-400 to-amber-400' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-green/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="section-label">
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-heading font-bold text-dark-navy mb-4"
          >
            Expert Guidance for Smart{' '}
            <span className="gradient-text">Financial Decisions</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-text-body max-w-2xl mx-auto text-base leading-relaxed"
          >
            At SB Associate, we believe every business deserves access to premium financial
            expertise. Our personalized approach ensures that your unique challenges receive
            tailored solutions backed by 25+ years of industry experience.
          </motion.p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="group relative bg-white rounded-2xl p-8 text-center border border-medium-grey hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${stat.color} rounded-t-2xl`} />

              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {stat.icon}
              </div>

              <div className="text-4xl font-bold text-dark-navy mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-text-body text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting paragraph */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="mt-16 bg-linear-to-r from-primary-blue to-dark-navy rounded-2xl p-10 text-white text-center"
        >
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            We don't just offer services — we build partnerships. Our dedicated team takes the time
            to understand your goals, industry, and challenges to craft strategies that drive
            measurable results. With a <strong>98% client retention rate</strong>, our track record
            speaks for itself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

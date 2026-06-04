import { motion } from 'framer-motion';
import { Shield, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Shield size={28} />,
    title: 'Trust-Focused Approach',
    desc: 'Building long-term relationships based on transparency, integrity, and commitment to client success.',
  },
  {
    icon: <Award size={28} />,
    title: 'Proven Industry Experience',
    desc: 'Decades of expertise across diverse industries, delivering tailored financial solutions.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient card with stats */}
              <div className="bg-linear-to-br from-primary-blue to-dark-navy rounded-2xl p-10 text-white min-h-[400px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative z-10">
                  <img src="/logo-mark.png" alt="SB Associate" className="w-28 h-28 object-contain mb-6 bg-white/10 rounded-2xl p-3" />
                  <h3 className="text-3xl font-heading font-bold mb-4">
                    25+ Years<br />of Excellence
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Trusted by over 500 businesses across India for comprehensive financial solutions and strategic advisory.
                  </p>
                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-primary-green">500+</div>
                      <div className="text-sm text-white/60">Clients Served</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-primary-green">98%</div>
                      <div className="text-sm text-white/60">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={fadeUp} custom={0} className="section-label">
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-heading font-bold text-dark-navy mb-6 leading-snug"
            >
              Driving Smarter Financial and{' '}
              <span className="gradient-text">Business Growth</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-text-body text-base leading-relaxed mb-8"
            >
              SB Associate is a trusted Chartered Accountancy firm offering expert financial
              advisory, tax planning, audit, and business consulting services. We bring clarity,
              strategy, and precision to every financial decision. Our team of experienced
              professionals is dedicated to helping businesses navigate complex financial
              landscapes with confidence.
            </motion.p>

            {/* Feature cards */}
            <div className="space-y-4 mb-8">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  custom={3 + i}
                  className="flex gap-4 p-5 rounded-xl bg-light-grey hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary-blue to-primary-green flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-navy text-lg mb-1">{feat.title}</h4>
                    <p className="text-text-body text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={5}>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-btn flex items-center gap-2"
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

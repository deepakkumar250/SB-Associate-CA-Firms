import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { icon: <Award size={22} />, value: '25+', label: 'Years Experience' },
  { icon: <TrendingUp size={22} />, value: '98%', label: 'Client Satisfaction' },
  { icon: <Users size={22} />, value: '500+', label: 'Happy Clients' },
];

const bulletPoints = [
  'Expert Financial Strategy',
  'Business Growth Advisory',
  'Tax & Compliance Services',
];

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-dark-navy via-primary-blue to-dark-navy">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-blue/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"
            >
              <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
              Smart Solutions. Financial Growth.
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Transforming Finance with{' '}
              <span className="bg-linear-to-r from-primary-green to-emerald-300 bg-clip-text text-transparent">
                Trusted Expertise
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
              Smart Strategies. Lasting Results. — We bring clarity, strategy, and
              precision to every financial decision your business makes.
            </p>

            {/* Bullet points */}
            <div className="flex flex-wrap gap-4 mb-10">
              {bulletPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 text-white/90 text-sm"
                >
                  <CheckCircle size={18} className="text-primary-green" />
                  {point}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll('#contact')}
                className="gradient-btn flex items-center gap-2 text-base"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll('#services')}
                className="outline-btn border-white/30! text-white! hover:bg-white/10! flex items-center gap-2 text-base"
              >
                Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Decorative finance illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-80 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col justify-center items-center">
                <img src="/logo-mark.png" alt="SB Associate" className="w-48 h-48 object-contain mb-4" />
                <p className="text-white font-heading text-xl font-bold">SB Associate</p>
                <p className="text-white/60 text-xs tracking-widest uppercase">Est. Since 2000</p>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-primary-green text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
              >
                ✓ 100% Compliance
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white text-dark-navy px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
              >
                ⭐ 4.9/5 Rating
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-primary-green/20 flex items-center justify-center text-primary-green">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

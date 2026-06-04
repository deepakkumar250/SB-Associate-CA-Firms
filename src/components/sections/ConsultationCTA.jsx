import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section className="py-20 relative bg-linear-to-br from-dark-navy via-primary-blue to-dark-navy text-white overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2 pointer-events-none" />

      {/* Floating growth arrow outline inspired by the logo */}
      <div className="absolute right-10 bottom-10 w-48 h-48 border-r-8 border-b-8 border-growth-green/20 rounded-br-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold text-growth-green uppercase tracking-wider mb-6">
            <Sparkles size={14} className="animate-spin-slow" />
            Empower Your Business Today
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading leading-tight mb-6">
            Ready to Streamline Your Compliance & <span className="text-growth-green">Accelerate Growth</span>?
          </h2>

          <p className="text-text-light text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a free 30-minute introductory consultation with our senior Chartered Accountants to map out your tax, audit, and structural goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {[
              'Zero hidden costs',
              'Tailored expert advice',
              'DPIIT & ROC experts'
            ].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <CheckCircle2 size={16} className="text-growth-green" />
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="gradient-btn text-base py-4 px-10 no-underline shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
              Schedule Consultation
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="outline-btn border-white/30! text-white! hover:bg-white/10! text-base py-3.5 px-10 no-underline w-full sm:w-auto justify-center">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

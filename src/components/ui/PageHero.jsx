import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, bgImage = '', breadcrumbs = [] }) {
  // Use a default premium background gradient/image if bgImage is not provided
  const defaultBg = 'linear-gradient(135deg, #0f172a 0%, #0057B8 60%, #003d82 100%)';
  const inlineStyle = bgImage
    ? { backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: defaultBg };

  return (
    <section
      style={inlineStyle}
      className="relative pt-36 pb-20 md:pb-24 text-white overflow-hidden"
    >
      {/* Background Dots Accent */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      {/* Floating abstract graphic representing logo growth arrow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs md:text-sm text-text-light/80 mb-6 font-semibold">
            <Link to="/" className="hover:text-growth-green transition-colors no-underline">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-text-light/50" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-growth-green transition-colors no-underline">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight mb-4"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-text-light leading-relaxed font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

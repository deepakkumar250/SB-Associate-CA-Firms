import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', dark = false, delay = 0 }) {
  const baseClass = dark ? 'glass-card' : 'glass-card-light';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay }}
      className={`${baseClass} p-6 shadow-md card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}

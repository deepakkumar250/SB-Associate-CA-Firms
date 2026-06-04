import { motion } from 'framer-motion';

export default function SectionLabel({ text }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-label"
    >
      {text}
    </motion.span>
  );
}

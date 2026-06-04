import { motion } from 'framer-motion';

const clients = [
  'Tata Group',
  'Reliance Retail',
  'Aditya Birla',
  'Infosys Technologies',
  'HDFC Bank',
  'Wipro Enterprises',
  'Mahindra & Mahindra',
  'L&T Engineering',
  'Tata Group',
  'Reliance Retail',
  'Aditya Birla',
  'Infosys Technologies',
  'HDFC Bank',
  'Wipro Enterprises',
  'Mahindra & Mahindra',
  'L&T Engineering',
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-light-grey border-y border-medium-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
          Trusted by Prominent Corporates, Startups, & SMEs Across India
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          {clients.map((client, idx) => (
            <span
              key={idx}
              className="text-xl md:text-2xl font-bold font-heading text-text-light/50 tracking-wider hover:text-primary-blue/70 transition-colors cursor-default select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

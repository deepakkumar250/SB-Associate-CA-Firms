import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechVista Solutions',
    text: 'SB Associate has been instrumental in streamlining our financial operations. Their tax planning strategies saved us over 30% in annual tax liability. Truly exceptional expertise.',
    rating: 5,
  },
  {
    name: 'Priya Mohanty',
    role: 'Founder, GreenLeaf Organics',
    text: 'From GST compliance to financial advisory, the team at SB Associate delivers with precision and care. They understood our startup needs and provided solutions that accelerated our growth.',
    rating: 5,
  },
  {
    name: 'Anil Patel',
    role: 'Director, Patel Industries',
    text: 'We have been working with SB Associate for over 10 years. Their professionalism, deep knowledge, and proactive approach have made them an indispensable partner for our business.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-navy mb-4">
            Client Experiences that Highlight Our <span className="gradient-text">Proven Results</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-amber-50 px-5 py-3 rounded-full border border-amber-200">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}</div>
            <span className="font-bold text-dark-navy">4.9/5</span>
            <span className="text-text-body text-sm">Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-5 py-3 rounded-full border border-green-200">
            <span className="text-2xl">🎉</span>
            <span className="font-bold text-dark-navy">500+</span>
            <span className="text-text-body text-sm">Happy Clients</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.4 }} className="bg-light-grey rounded-3xl p-8 sm:p-12 relative">
              <div className="absolute top-6 right-8 w-14 h-14 rounded-full bg-linear-to-br from-primary-blue to-primary-green flex items-center justify-center text-white opacity-20">
                <Quote size={28} />
              </div>
              <div className="flex gap-1 mb-6">{[...Array(testimonials[current].rating)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}</div>
              <p className="text-dark-navy text-lg sm:text-xl leading-relaxed mb-8 font-medium italic">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary-blue to-primary-green flex items-center justify-center text-white text-xl font-bold">{testimonials[current].name.charAt(0)}</div>
                <div>
                  <h4 className="font-bold text-dark-navy text-lg">{testimonials[current].name}</h4>
                  <p className="text-text-body text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border-2 border-medium-grey bg-white flex items-center justify-center text-dark-navy hover:border-primary-blue hover:text-primary-blue transition-all duration-300 cursor-pointer" aria-label="Previous"><ChevronLeft size={20} /></button>
            <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all duration-300 border-none cursor-pointer ${i === current ? 'w-8 bg-linear-to-r from-primary-blue to-primary-green' : 'w-2.5 bg-medium-grey hover:bg-text-light'}`} aria-label={`Testimonial ${i + 1}`} />)}</div>
            <button onClick={next} className="w-12 h-12 rounded-full border-2 border-medium-grey bg-white flex items-center justify-center text-dark-navy hover:border-primary-blue hover:text-primary-blue transition-all duration-300 cursor-pointer" aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

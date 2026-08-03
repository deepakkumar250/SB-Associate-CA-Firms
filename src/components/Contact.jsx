import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const serviceOptions = [
  'Tax Planning & Filing',
  'Audit & Assurance',
  'Financial Planning',
  'GST Compliance',
  'Business Advisory',
  'Company Registration & ROC Filing',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    { icon: <Phone size={22} />, label: 'Phone', value: '+91 70086 79523', href: 'tel:+91 70086 79523' },
    { icon: <Mail size={22} />, label: 'Email', value: 'sbassociateodisha@gmail.com', href: 'mailto:sbassociateodisha@gmail.com' },
    { icon: <MapPin size={22} />, label: 'Address', value: 'Patia, Bhubaneswar, 751024', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-light-grey relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-label">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-navy mb-4">
            Let's Make Something <span className="gradient-text">Great Work Together</span>
          </h2>
          <p className="text-text-body max-w-2xl mx-auto">Ready to take the next step? Reach out for a free consultation and let our experts craft the perfect financial strategy for your business.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">
            <div className="bg-linear-to-br from-dark-navy via-primary-blue to-dark-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-2">Get in Touch</h3>
              <p className="text-white/60 text-sm mb-8">We'd love to hear from you. Contact us through any of these channels.</p>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href} className="flex items-start gap-4 text-white no-underline group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-green/30 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              {/* Social icons */}
              <div className="flex gap-3 mt-10">
                {['LinkedIn', 'Facebook', 'Instagram'].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-primary-green/30 transition-colors duration-300 no-underline text-sm font-semibold">
                    {s.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-medium-grey">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                  ✅ Thank you! Your consultation request has been submitted. We'll get back to you shortly.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-dark-navy mb-2">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-medium-grey bg-light-grey text-dark-navy text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-navy mb-2">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-medium-grey bg-light-grey text-dark-navy text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-dark-navy mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-medium-grey bg-light-grey text-dark-navy text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-navy mb-2">Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-medium-grey bg-light-grey text-dark-navy text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all appearance-none">
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-dark-navy mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-xl border border-medium-grey bg-light-grey text-dark-navy text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all resize-none" />
              </div>
              <button type="submit" className="gradient-btn flex items-center gap-2 w-full justify-center text-base">
                <Send size={18} />
                Get Free Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: 'Statutory Audit & Assurance', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = formData.name
      ? `Hello SB Associate, my name is ${formData.name}. I am looking for ${formData.service} and would like to schedule a consultation.`
      : 'Hello SB Associate, I would like to know more about your Chartered Accountant services.';
    const url = `https://wa.me/917008679523?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-enter">
      <PageHero
        title="Contact SB Associate"
        subtitle="Schedule a free 30-minute consultation callback. Speak directly with our certified Partners."
        bgImage="/images/hero-boardroom.png"
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="section-label">Bhubaneswar Head Office</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Partnering with You at <span className="gradient-text">Every Stage</span>
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  Visit our office at DLF Cyber City, Bhubaneswar, or send us a query online. Our senior partners handle direct consultations to map out your accounting, tax filings, and compliance goals.
                </p>
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6">
                {[
                  { title: 'Office Address', desc: 'Patia, Bhubaneswar, 751024', icon: MapPin },
                  { title: 'Calling Desk', desc: '+91 70086 79523', icon: Phone },
                  { title: 'Email Enquiries', desc: 'sbassociateodisha@gmail.com', icon: Mail },
                  { title: 'Working Hours', desc: 'Mon - Sat (10:00 AM - 07:00 PM)', icon: Clock }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-light-grey border border-medium-grey hover:border-primary-blue/30 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-dark-navy text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-text-body leading-relaxed m-0">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-7 bg-light-grey rounded-3xl p-8 md:p-12 border border-medium-grey shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-growth-green/10 rounded-full flex items-center justify-center text-growth-green mx-auto mb-6">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-dark-navy font-heading mb-3">Booking Confirmed</h3>
                  <p className="text-sm text-text-muted leading-relaxed max-w-md mx-auto mb-8">
                    Your request for consultation has been submitted. A Chartered Accountant from our team will contact you shortly.
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="gradient-btn inline-flex items-center gap-2 text-sm justify-center py-3.5 px-8"
                  >
                    <MessageSquare size={16} />
                    Chat Instantly on WhatsApp
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-extrabold text-dark-navy font-heading mb-2">
                    Book Consultation Callback
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-8">
                    Fill out the form below. A partner from our Bhubaneswar firm will contact you to discuss your business details.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Your Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          required
                          type="tel"
                          placeholder="+91"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="Enter your E-mail"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Company Name (Optional)</label>
                        <input
                          type="text"
                          placeholder="SolvionTech Pvt Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Interested Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                      >
                        <option>Statutory Audit & Assurance</option>
                        <option>Income Tax ITR & Litigation</option>
                        <option>GST Registration & Return filings</option>
                        <option>Company Registration (Pvt Ltd, LLP)</option>
                        <option>Accounting, Payroll & MIS reports</option>
                        <option>Startup Funding Readiness & Valuations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Query Details</label>
                      <textarea
                        required
                        placeholder="Detail your requirements here..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full gradient-btn justify-center text-sm py-4">
                      Book Callback Consultation
                      <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>

          {/* Google Map Section */}
          <div className="mt-20 rounded-3xl overflow-hidden border-4 border-light-grey shadow-xl h-112.5">
            <iframe
              title="SB Associate Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6698656157833!2d85.8073587!3d20.3552084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e0647693d5%3A0xc3cfd61b65e94b29!2sDLF%20Cybercity!5e0!3m2!1sen!2sin!4v1717520000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}

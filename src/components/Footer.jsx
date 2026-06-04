import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact Us', href: '#contact' },
];

const servicesList = [
  'Tax Planning & Filing',
  'Audit & Assurance',
  'Financial Planning',
  'GST Compliance',
  'Business Advisory',
  'Company Registration',
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-navy text-white relative overflow-hidden">
      {/* Gradient top line */}
      <div className="h-1 bg-linear-to-r from-primary-blue via-primary-green to-primary-blue" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-mark.png" alt="SB Associate" className="h-12 w-auto" />
              <div>
                <h3 className="text-lg font-heading font-bold">SB Associate</h3>
                <p className="text-xs text-white/50 tracking-widest uppercase">Smart Solutions. Financial Growth.</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A trusted CA firm offering expert advisory, tax planning, audit, and consulting services across India.
            </p>
            <div className="flex gap-3">
              {['Li', 'Fb', 'In'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary-green/30 hover:text-white transition-all duration-300 no-underline text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-0.5 after:bg-primary-green after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-white/50 hover:text-primary-green transition-colors duration-300 text-sm no-underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-5 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-0.5 after:bg-primary-green after:rounded-full">
              Our Services
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {servicesList.map((s) => (
                <li key={s}>
                  <a href="#services" onClick={(e) => handleClick(e, '#services')} className="text-white/50 hover:text-primary-green transition-colors duration-300 text-sm no-underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-0.5 after:bg-primary-green after:rounded-full">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-white/50 hover:text-white transition-colors no-underline text-sm">
                <Phone size={18} className="text-primary-green shrink-0 mt-0.5" />
                +91 98765 43210
              </a>
              <a href="mailto:info@sbassociate.in" className="flex items-start gap-3 text-white/50 hover:text-white transition-colors no-underline text-sm">
                <Mail size={18} className="text-primary-green shrink-0 mt-0.5" />
                info@sbassociate.in
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={18} className="text-primary-green shrink-0 mt-0.5" />
                Bhubaneswar, Odisha, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">© 2025 SB Associate. All Rights Reserved.</p>
          <p className="text-white/40 text-xs">Designed with ❤️ in Bhubaneswar</p>
        </div>
      </div>
    </footer>
  );
}

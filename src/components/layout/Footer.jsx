import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Industries We Serve', href: '/industries' },
  { name: 'Knowledge Centre', href: '/knowledge-centre' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

const servicesList = [
  { name: 'Audit & Assurance', href: '/services/audit-assurance' },
  { name: 'Income Tax Services', href: '/services/income-tax' },
  { name: 'GST Consultancy', href: '/services/gst-consultancy' },
  { name: 'Company Registration', href: '/services/company-registration' },
  { name: 'Accounting & Payroll', href: '/services/accounting-bookkeeping' },
  { name: 'Startup Advisory', href: '/services/startup-advisory' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-navy text-white relative overflow-hidden">
      {/* Top Brand Border Gradient */}
      <div className="h-1.5 bg-linear-to-r from-primary-blue via-growth-green to-primary-blue" />
      
      {/* Subtle overlay accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-growth-green/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-mark.png" alt="SB Associate Logo" className="h-12 w-auto bg-white/95 rounded-lg p-1" />
              <div>
                <h3 className="text-lg font-bold font-sans tracking-wide">SB ASSOCIATE</h3>
                <p className="text-[0.62rem] text-growth-green font-bold tracking-widest uppercase">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              Empowering startups, SMEs, and corporate enterprises across India with top-tier financial expertise, compliance assurance, and tax strategies.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Facebook', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-growth-green/20 hover:text-white transition-all duration-300 no-underline text-xs font-bold"
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-growth-green after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-text-light hover:text-growth-green transition-colors duration-300 text-sm no-underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-growth-green after:rounded-full">
              Our Services
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {servicesList.map((s) => (
                <li key={s.name}>
                  <Link to={s.href} className="text-text-light hover:text-growth-green transition-colors duration-300 text-sm no-underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-growth-green after:rounded-full">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a href="tel:+917008679523" className="flex items-start gap-3 text-text-light hover:text-white transition-colors no-underline text-sm group">
                <Phone size={18} className="text-growth-green shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                +91 70086 79523
              </a>
              <a href="mailto:info@sbassociate.in" className="flex items-start gap-3 text-text-light hover:text-white transition-colors no-underline text-sm group">
                <Mail size={18} className="text-growth-green shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                info@sbassociate.in
              </a>
              <div className="flex items-start gap-3 text-text-light text-sm">
                <MapPin size={18} className="text-growth-green shrink-0 mt-0.5" />
                Bhubaneswar, Odisha, India
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-lg border border-white/10 transition-all cursor-pointer"
            >
              Back to Top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-light/50 text-xs m-0">
            &copy; 2026 SB Associate. All Rights Reserved. | Chartered Accountants Firm
          </p>
          <div className="flex gap-6 text-xs text-text-light/50">
            <Link to="/about" className="hover:underline text-text-light/50">Privacy Policy</Link>
            <Link to="/contact" className="hover:underline text-text-light/50">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

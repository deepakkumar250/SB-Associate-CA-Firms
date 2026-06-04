import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Briefcase, ClipboardCheck, FileText, ReceiptText, Building2, TrendingUp } from 'lucide-react';

const serviceIcons = {
  'audit-assurance': ClipboardCheck,
  'income-tax': FileText,
  'gst-consultancy': ReceiptText,
  'company-registration': Building2,
  'accounting-bookkeeping': TrendingUp,
  'startup-advisory': Briefcase
};

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', isDropdown: true },
  { name: 'Industries', href: '/industries' },
  { name: 'Knowledge', href: '/knowledge-centre' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const megaMenuServices = [
  { title: 'Audit & Assurance', href: '/services/audit-assurance', slug: 'audit-assurance', desc: 'Statutory, Internal, Tax Audit & Due Diligence' },
  { title: 'Income Tax', href: '/services/income-tax', slug: 'income-tax', desc: 'Filing, Corporate Tax, Tax Planning & Litigation' },
  { title: 'GST Consultancy', href: '/services/gst-consultancy', slug: 'gst-consultancy', desc: 'Registration, Returns, Audits & Advisory' },
  { title: 'Company Registration', href: '/services/company-registration', slug: 'company-registration', desc: 'Pvt Ltd, LLP, OPC & Startup Registration' },
  { title: 'Accounting & Payroll', href: '/services/accounting-bookkeeping', slug: 'accounting-bookkeeping', desc: 'Bookkeeping, Statements, Payroll & MIS' },
  { title: 'Startup Advisory', href: '/services/startup-advisory', slug: 'startup-advisory', desc: 'Business Structuring, Funding & Financial Models' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-light-grey py-2'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-light-grey/50'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenus}>
            <img
              src="/logo-mark.png"
              alt="SB Associate Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h1 className="text-lg font-bold text-dark-navy leading-tight m-0 font-sans tracking-wide">
                SB ASSOCIATE
              </h1>
              <p className="text-[0.62rem] text-primary-blue font-bold tracking-widest uppercase m-0">
                Chartered Accountants
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 text-[0.92rem] font-semibold transition-colors duration-300 cursor-pointer ${
                        location.pathname.startsWith('/services')
                          ? 'text-primary-blue'
                          : 'text-dark-navy hover:text-primary-blue'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Dropdown */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[580px] bg-white rounded-2xl shadow-xl border border-medium-grey p-6 transition-all duration-300 ${
                        dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {megaMenuServices.map((svc) => {
                          const IconComp = serviceIcons[svc.slug] || Briefcase;
                          return (
                            <Link
                              key={svc.title}
                              to={svc.href}
                              className="flex gap-3 p-3 rounded-xl hover:bg-light-grey transition-colors group/item"
                              onClick={closeMenus}
                            >
                              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary-blue/10 to-growth-green/10 flex items-center justify-center text-primary-blue group-hover/item:text-growth-green transition-colors">
                                <IconComp size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-dark-navy text-sm group-hover/item:text-primary-blue transition-colors">
                                  {svc.title}
                                </h4>
                                <p className="text-text-muted text-xs leading-normal mt-0.5">
                                  {svc.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-light-grey flex justify-between items-center">
                        <span className="text-xs text-text-muted">Need a customized service?</span>
                        <Link to="/services" className="text-xs text-primary-blue font-bold hover:underline" onClick={closeMenus}>
                          View All Services &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-[0.92rem] font-semibold transition-colors duration-300 hover:text-primary-blue relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-linear-to-r after:from-primary-blue after:to-growth-green after:transition-all after:duration-300 hover:after:w-full ${
                      isActive ? 'text-primary-blue after:w-full' : 'text-dark-navy'
                    }`
                  }
                  onClick={closeMenus}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden! md:inline-flex! items-center gap-2 gradient-btn py-2.5! px-5! text-sm no-underline"
              onClick={closeMenus}
            >
              <Phone size={16} />
              Book Consultation
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-light-grey transition-colors text-dark-navy bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[85vh] opacity-100 mt-4 overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-light-grey rounded-xl p-4 space-y-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className="px-4 py-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                      {link.name}
                    </div>
                    {megaMenuServices.map((svc) => (
                      <Link
                        key={svc.title}
                        to={svc.href}
                        className="block py-2 px-6 rounded-lg text-dark-navy font-medium text-sm hover:bg-white hover:text-primary-blue transition-all"
                        onClick={closeMenus}
                      >
                        {svc.title}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-2.5 px-4 rounded-lg text-dark-navy font-semibold hover:bg-white hover:text-primary-blue transition-all"
                  onClick={closeMenus}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="block text-center gradient-btn mt-4 no-underline"
              onClick={closeMenus}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

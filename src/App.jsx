import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AuditPage from './pages/AuditPage';
import IncomeTaxPage from './pages/IncomeTaxPage';
import GSTPage from './pages/GSTPage';
import CompanyRegPage from './pages/CompanyRegPage';
import AccountingPage from './pages/AccountingPage';
import StartupAdvisoryPage from './pages/StartupAdvisoryPage';
import IndustriesPage from './pages/IndustriesPage';
import KnowledgeCentrePage from './pages/KnowledgeCentrePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-off-white">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/audit-assurance" element={<AuditPage />} />
            <Route path="/services/income-tax" element={<IncomeTaxPage />} />
            <Route path="/services/gst-consultancy" element={<GSTPage />} />
            <Route path="/services/company-registration" element={<CompanyRegPage />} />
            <Route path="/services/accounting-bookkeeping" element={<AccountingPage />} />
            <Route path="/services/startup-advisory" element={<StartupAdvisoryPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/knowledge-centre" element={<KnowledgeCentrePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

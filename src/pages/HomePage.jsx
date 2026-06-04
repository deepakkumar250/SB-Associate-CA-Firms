import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Users, Award,
  Sparkles, MessageSquare, BookOpen, Clock, Lightbulb, CheckSquare,
  Building, ChevronLeft, ChevronRight, HelpCircle, PhoneCall
} from 'lucide-react';
import { useState } from 'react';
import TrustedBy from '../components/sections/TrustedBy';
import ConsultationCTA from '../components/sections/ConsultationCTA';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { serviceCategories } from '../data/services';
import { industries } from '../data/industries';
import { testimonials } from '../data/testimonials';
import { caseStudies } from '../data/caseStudies';
import { blogPosts } from '../data/blogPosts';
import { team } from '../data/team';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="page-enter overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center bg-premium-dark text-white pt-24 overflow-hidden">
        {/* Parallax-style Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: "url('/images/hero-boardroom.png')" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

        {/* Diagonal Light Accents & Growth Arrow Icon */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold text-growth-green uppercase tracking-wider mb-6"
              >
                <Sparkles size={14} className="animate-pulse" />
                Trusted Financial Consulting Firm
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight mb-6"
              >
                Smart Financial Solutions for <span className="text-growth-green">Sustainable</span> Business Growth
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-text-light/90 leading-relaxed mb-8 max-w-xl"
              >
                Trusted Chartered Accountants helping businesses navigate taxation, audit, compliance, risk advisory, and long-term financial success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link to="/contact" className="gradient-btn text-base py-4 px-10 no-underline shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                  Book Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="outline-btn border-white/30! text-white! hover:bg-white/10! text-base py-3.5 px-10 no-underline w-full sm:w-auto justify-center">
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right Card Panel representing Deloitte-style interactive layout */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-card p-8 relative"
              >
                {/* Floating graphic element representing logo growth arrow */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-growth-green rounded-xl flex items-center justify-center shadow-lg animate-float">
                  <TrendingUp size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-extrabold mb-4 font-heading border-b border-white/10 pb-3">
                  Why Clients Partner With Us
                </h3>
                <div className="space-y-4">
                  {[
                    { title: '25+ Years Experience', desc: 'Guiding SMEs and large enterprises through complex regulatory landscapes.' },
                    { title: '100% Compliance Record', desc: 'Zero penalty track record in statutory fillings and audits.' },
                    { title: 'Integrated CFO Service', desc: 'Beyond tax filings: data-driven strategic advisory for financial growth.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckSquare size={18} className="text-growth-green mt-1 shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm text-white">{item.title}</h4>
                        <p className="text-xs text-text-light/80 leading-normal mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY CLIENT MARQUEE */}
      <TrustedBy />

      {/* 3. ABOUT SB ASSOCIATE SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-light-grey">
                <img
                  src="/images/about-team.png"
                  alt="SB Associate CA Team"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-navy/70 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-medium-grey flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-primary-blue font-sans">
                      <AnimatedCounter end="25+" />
                    </div>
                    <div className="text-xs font-bold text-text-muted uppercase tracking-wider mt-1">
                      Years of Professional Standing
                    </div>
                  </div>
                  <Award size={36} className="text-growth-green" />
                </div>
              </div>
            </motion.div>

            {/* Right - Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="space-y-6"
            >
              <span className="section-label">About Our Firm</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy leading-tight">
                Delivering Excellence in <span className="gradient-text">Chartered Accountancy</span> Since 2000
              </h2>
              <p className="text-text-body text-base leading-relaxed">
                SB Associate is a premier Chartered Accountancy and financial advisory firm. We combine Deloitte-style professional rigor, EY-style clean efficiency, and KPMG-style institutional trust to help businesses succeed.
              </p>
              <p className="text-text-body text-base leading-relaxed">
                Our team of certified professionals brings decades of collective experience across auditing, taxation, corporate compliance, and startup advisory, serving over 500 happy clients across India.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { title: 'Our Vision', desc: 'To be the most trusted financial architect for business scalability.' },
                  { title: 'Our Mission', desc: 'Delivering strategic compliance solutions with absolute transparency.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-light-grey rounded-xl p-5 border border-medium-grey">
                    <h4 className="font-extrabold text-primary-blue font-heading text-lg mb-2">{item.title}</h4>
                    <p className="text-xs text-text-body leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to="/about" className="gradient-btn text-sm no-underline">
                  Read Full Profile
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW GRID */}
      <section className="py-24 bg-light-grey relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Service Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy leading-tight mt-2">
              Comprehensive Financial & <span className="gradient-text">Regulatory Solutions</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto mt-4 text-base">
              Explore our core areas of expertise. We provide high-end, tailored advisory to secure your cashflow and keep you compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  custom={idx}
                  className="group bg-white rounded-2xl border border-medium-grey overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-growth-green bg-dark-navy/70 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                        CA Certified
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between grow">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-4 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                        <IconComp size={24} />
                      </div>
                      <h3 className="text-xl font-extrabold text-dark-navy mb-2 group-hover:text-primary-blue transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-text-body text-sm leading-relaxed mb-6">
                        {svc.shortDesc}
                      </p>
                    </div>

                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm hover:gap-3 transition-all underline"
                    >
                      Explore Service Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US - INTERACTIVE COUNTERS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="section-label">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy">
                We Build Long-Term <span className="gradient-text">Trust & Stability</span>
              </h2>
              <p className="text-text-body text-base leading-relaxed">
                At SB Associate, corporate governance and financial excellence are at the core of what we do. Our team ensures that your company avoids compliance pitfalls while maximizing fiscal opportunities.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Client-Centric Philosophy', desc: 'No one-size-fits-all. We build bespoke plans matching your industry dynamics.' },
                  { title: 'Proactive Alert System', desc: 'We notify you about tax updates, filing dates, and regulatory changes beforehand.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-light-grey border border-medium-grey">
                    <div className="w-10 h-10 rounded-lg bg-growth-green/10 flex items-center justify-center text-growth-green shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-dark-navy text-base">{item.title}</h4>
                      <p className="text-xs text-text-body leading-normal mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Counters Block */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              {[
                { label: 'Happy Clients', value: '500+', icon: Users, color: 'text-primary-blue' },
                { label: 'Satisfaction Rate', value: '98%', icon: ShieldCheck, color: 'text-growth-green' },
                { label: 'Years Experience', value: '25+', icon: Award, color: 'text-primary-blue' },
                { label: 'Compliances Met', value: '100%', icon: TrendingUp, color: 'text-growth-green' }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-light-grey rounded-2xl p-6 border border-medium-grey text-center hover:border-primary-blue/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 shadow-xs">
                      <Icon size={24} className="text-primary-blue" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-dark-navy font-sans tracking-tight">
                      <AnimatedCounter end={stat.value} />
                    </div>
                    <div className="text-xs font-bold text-text-muted uppercase tracking-wider mt-2">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY EXPERTISE SECTION */}
      <section className="py-24 bg-light-grey relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Industries We Support</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy">
              Tailored Financial Management for <span className="gradient-text">Your Sector</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto mt-4 text-base">
              Every industry has a distinct tax framework. Our partners are specialists in compliance requirements across multiple fields.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.slice(0, 10).map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeUp}
                  custom={idx}
                  className="bg-white rounded-xl p-6 border border-medium-grey hover:border-primary-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/5 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300 flex items-center justify-center text-primary-blue mb-4">
                      <IconComp size={20} />
                    </div>
                    <h4 className="font-extrabold text-dark-navy text-base group-hover:text-primary-blue transition-colors">
                      {ind.title}
                    </h4>
                    <p className="text-text-body text-xs leading-relaxed mt-2">
                      {ind.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries" className="outline-btn text-sm py-3 px-8 no-underline">
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES HIGHLIGHT */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="section-label">Success Chronicles</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy leading-tight mt-2">
                Real Impact, <span className="gradient-text">Proven Results</span>
              </h2>
            </div>
            <Link to="/case-studies" className="text-primary-blue font-bold hover:underline mt-4 md:mt-0 inline-flex items-center gap-1.5">
              Read All Success Stories &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((cs) => (
              <div key={cs.title} className="bg-light-grey rounded-2xl border border-medium-grey p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {cs.category}
                  </span>
                  <span className="text-xs font-bold text-text-muted">{cs.industry}</span>
                </div>
                <h3 className="text-xl font-extrabold text-dark-navy mb-4 font-heading">{cs.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-bold text-primary-blue uppercase tracking-wider">Challenge:</div>
                    <p className="text-xs text-text-body leading-relaxed mt-1">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-growth-green uppercase tracking-wider">Our Solution:</div>
                    <p className="text-xs text-text-body leading-relaxed mt-1">{cs.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-medium-grey pt-6">
                  {cs.stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-primary-blue">{st.value}</div>
                      <div className="text-[0.62rem] font-bold text-text-muted uppercase tracking-wider mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINANCIAL INSIGHTS (KNOWLEDGE CENTRE PREVIEW) */}
      <section className="py-24 bg-light-grey relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="section-label">Knowledge Centre</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy leading-tight mt-2">
                Latest Regulatory <span className="gradient-text">Updates & Articles</span>
              </h2>
            </div>
            <Link to="/knowledge-centre" className="text-primary-blue font-bold hover:underline mt-4 md:mt-0 inline-flex items-center gap-1.5">
              Browse Knowledge Base &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-medium-grey overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <div className="flex items-center justify-between text-xs text-text-muted mb-3 font-semibold">
                      <span className="text-primary-blue bg-primary-blue/5 px-2 py-0.5 rounded">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark-navy mb-3 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-text-body text-xs leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link to="/knowledge-centre" className="inline-flex items-center gap-1 text-xs font-bold text-primary-blue hover:underline">
                    Read Full Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TEAM SHOWCASE CAROUSEL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Leadership Team</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy">
              Chartered Accountants Committed to <span className="gradient-text">Your Success</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto mt-4 text-base">
              Work directly with seasoned partners who understand the complexities of corporate finance, GST compliance, and auditing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-light-grey rounded-2xl overflow-hidden border border-medium-grey text-center hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-dark-navy/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-navy mb-1">{member.name}</h3>
                  <div className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-3">{member.role}</div>
                  <p className="text-xs text-text-body leading-relaxed mb-4">{member.bio}</p>
                  <div className="inline-block bg-white text-[0.62rem] font-bold text-text-muted uppercase tracking-wider px-3 py-1 rounded border border-medium-grey">
                    {member.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLIENT TESTIMONIAL SLIDER */}
      <section className="py-24 bg-light-grey relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Client Reviews</span>
            <h2 className="text-3xl font-extrabold text-dark-navy font-heading">
              Feedback from Our Partners
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-medium-grey relative shadow-lg">
            <div className="absolute top-6 right-8 text-6xl text-primary-blue/15 font-serif select-none pointer-events-none">
              “
            </div>

            <div className="min-h-[140px]">
              <p className="text-dark-navy text-lg leading-relaxed italic mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-medium-grey pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center text-lg font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark-navy text-sm">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-xs text-text-muted">{testimonials[currentTestimonial].role} ({testimonials[currentTestimonial].industry})</p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-medium-grey flex items-center justify-center text-dark-navy hover:bg-light-grey transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-medium-grey flex items-center justify-center text-dark-navy hover:bg-light-grey transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONSULTATION CTA */}
      <ConsultationCTA />

      {/* 12. QUICK CONTACT SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Connect Instantly</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy">
                Get in Touch with Our <span className="gradient-text">CA Experts</span>
              </h2>
              <p className="text-text-body text-base leading-relaxed mt-4">
                Have questions about tax notices, company incorporation, or GST filings? Contact our Bhubaneswar office directly. Our partners respond within 24 business hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  { title: 'Call Office', desc: '+91 98765 43210', info: 'Mon-Sat (10AM - 7PM)' },
                  { title: 'Email Address', desc: 'info@sbassociate.in', info: '24/7 Advisory Response' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-light-grey rounded-xl p-5 border border-medium-grey">
                    <h4 className="font-extrabold text-primary-blue text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-base font-bold text-dark-navy m-0">{item.desc}</p>
                    <p className="text-xs text-text-muted mt-1 m-0">{item.info}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-light-grey rounded-2xl p-8 border border-medium-grey">
              <h3 className="text-xl font-extrabold text-dark-navy mb-6 font-heading">
                Request Quick Consultation Callback
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Callback request submitted successfully!"); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Your Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-sm focus:outline-none focus:border-primary-blue transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Phone Number</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-sm focus:outline-none focus:border-primary-blue transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Interested Service</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-sm focus:outline-none focus:border-primary-blue transition-all">
                    <option>GST Return Filing</option>
                    <option>Income Tax Advisory</option>
                    <option>Statutory Audit & Assurance</option>
                    <option>Startup Company Incorporation</option>
                    <option>Accounting & Bookkeeping</option>
                  </select>
                </div>
                <button type="submit" className="w-full gradient-btn justify-center text-sm py-3 mt-4">
                  Request Callback
                  <PhoneCall size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

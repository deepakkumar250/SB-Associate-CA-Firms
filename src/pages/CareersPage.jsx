import { useState } from 'react';
import { MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const jobOpenings = [
  {
    id: 1,
    title: 'Assistant Manager - Statutory Audit',
    experience: '3-5 Years post-qualification CA experience',
    type: 'Full Time',
    location: 'Bhubaneswar',
    description: 'Lead statutory audit assignments under the Companies Act, manage audit teams, verify Ind AS compliance, and draft audit reports for corporate clients.'
  },
  {
    id: 2,
    title: 'Associate Chartered Accountant - Taxation',
    experience: '1-3 Years post-qualification experience',
    type: 'Full Time',
    location: 'Bhubaneswar',
    description: 'Handle Income Tax scrutiny assessment drafting, corporate tax computations, GST dispute representation replies, and client tax advisory.'
  },
  {
    id: 3,
    title: 'Article Assistant (Paid Assistant)',
    experience: 'Cleared IPCC (Group-1 or both groups) / Direct Entry',
    type: '3-Year Internship',
    location: 'Bhubaneswar',
    description: 'Learn statutory audits, prepare accounting sheets, assist with GSTR returns, verify direct tax computations, and participate in client visits.'
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: 'Assistant Manager - Statutory Audit', coverLetter: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      <PageHero
        title="Careers at SB Associate"
        subtitle="Work with seasoned partners, handle audits for leading corporates, and build a rewarding career."
        bgImage="/images/hero-boardroom.png"
        breadcrumbs={[{ name: 'Careers' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Job Listings */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="section-label">Join Our Team</span>
                <h2 className="text-3xl font-extrabold text-dark-navy font-heading mt-2">
                  Open Positions in Audit, Taxation, & Advisory
                </h2>
                <p className="text-text-body text-base leading-relaxed mt-4">
                  We look for ambitious professionals who value integrity, attention to detail, and proactive strategic planning. Explore our open positions and internship tracks.
                </p>
              </div>

              {/* Job Cards */}
              <div className="space-y-8">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="bg-light-grey rounded-2xl p-8 border border-medium-grey hover:border-primary-blue transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-extrabold text-dark-navy font-heading">{job.title}</h3>
                      <span className="text-xs font-bold text-primary-blue bg-primary-blue/5 border border-primary-blue/10 px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-growth-green" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-growth-green" />
                        {job.experience}
                      </div>
                    </div>

                    <p className="text-xs text-text-body leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, position: job.title }));
                        const element = document.getElementById('apply-form');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-blue hover:underline bg-transparent border-none cursor-pointer p-0"
                    >
                      Apply for this Position &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div id="apply-form" className="lg:col-span-4 sticky top-28 space-y-8">
              <div className="bg-light-grey rounded-2xl p-8 border border-medium-grey">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-growth-green/10 rounded-full flex items-center justify-center text-growth-green mx-auto mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-xl font-extrabold text-dark-navy font-heading mb-2">Application Received</h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Thank you for submitting your application. Our recruitment partners will review your profile and contact you within 5 business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-extrabold text-dark-navy font-heading mb-6">
                      Submit Your Profile
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Applying Position</label>
                        <select
                          value={formData.position}
                          onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all"
                        >
                          {jobOpenings.map((job) => (
                            <option key={job.id} value={job.title}>{job.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Brief Summary / Cover Letter</label>
                        <textarea
                          placeholder="Describe your background and why you want to join..."
                          rows={4}
                          value={formData.coverLetter}
                          onChange={(e) => setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-medium-grey bg-white text-dark-navy text-xs focus:outline-none focus:border-primary-blue transition-all resize-none"
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full gradient-btn justify-center text-xs py-3 mt-4">
                        Submit Application
                        <Send size={14} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

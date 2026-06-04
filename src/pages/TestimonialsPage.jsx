import { Star, MessageSquare } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { testimonials } from '../data/testimonials';
import ConsultationCTA from '../components/sections/ConsultationCTA';

export default function TestimonialsPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Client Testimonials"
        subtitle="Read real-world feedback from founders, CEOs, and directors who partner with us."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Testimonials' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-light-grey rounded-2xl border border-medium-grey p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6 text-primary-blue/10 text-4xl font-serif pointer-events-none select-none">
                  “
                </div>

                <div>
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500" />
                    ))}
                  </div>
                  
                  <p className="text-dark-navy text-sm leading-relaxed mb-6 italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="border-t border-medium-grey pt-4 mt-auto">
                  <h4 className="font-bold text-dark-navy text-sm">{test.name}</h4>
                  <p className="text-xs text-text-muted mt-0.5">{test.role}</p>
                  <span className="inline-block mt-2 text-[0.62rem] font-bold text-primary-blue bg-primary-blue/5 px-2 py-0.5 rounded uppercase">
                    {test.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

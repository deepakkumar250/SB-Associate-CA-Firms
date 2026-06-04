import { useState } from 'react';
import { Search, BookOpen, Clock, ArrowRight, Calendar, User } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { blogPosts } from '../data/blogPosts';
import ConsultationCTA from '../components/sections/ConsultationCTA';

const categories = ['All', 'GST Updates', 'Tax Planning Tips', 'Budget Analysis', 'Startup Compliance Guide', 'Financial Growth Strategies'];

export default function KnowledgeCentrePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-enter">
      <PageHero
        title="Knowledge Centre"
        subtitle="Stay updated with latest direct tax slabs, GST notifications, and startup regulatory guidelines."
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Knowledge Centre' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtering controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input
                type="text"
                placeholder="Search articles, notifications, updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-medium-grey text-sm bg-white text-dark-navy focus:outline-none focus:border-primary-blue transition-all"
              />
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary-blue text-white shadow-xs'
                      : 'bg-light-grey text-text-muted hover:bg-medium-grey border border-medium-grey'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Blog Post Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-light-grey rounded-2xl border border-medium-grey overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-navy/60 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col justify-between grow">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-text-muted mb-4 font-semibold">
                        <span className="text-primary-blue bg-primary-blue/5 px-2.5 py-1 rounded border border-primary-blue/10">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-extrabold text-dark-navy mb-3 line-clamp-2 leading-snug font-heading group-hover:text-primary-blue transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-text-body text-xs leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="border-t border-medium-grey/60 pt-4 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-primary-blue font-bold">
                        Read More
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-light-grey rounded-2xl border border-medium-grey">
              <BookOpen size={48} className="text-text-light mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dark-navy">No Articles Found</h3>
              <p className="text-text-muted mt-2 text-sm">Try modifying your search queries or selecting a different category.</p>
            </div>
          )}

        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}

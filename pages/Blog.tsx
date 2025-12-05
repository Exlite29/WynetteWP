import React from 'react';
import { BlogPost } from '../types';

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Trends for 2025 Weddings',
    excerpt: 'From sustainable décor to micro-weddings, here is what we are seeing for the upcoming season.',
    category: 'Planning Advice',
    date: 'Oct 12, 2024',
    image: 'https://picsum.photos/800/600?random=60'
  },
  {
    id: '2',
    title: 'A Romantic Seaside Affair: Emily & John',
    excerpt: 'A look back at this stunning Newport coast celebration featuring blue hydrangeas and a tent under the stars.',
    category: 'Real Weddings',
    date: 'Sep 28, 2024',
    image: 'https://picsum.photos/800/600?random=61'
  },
  {
    id: '3',
    title: 'Choosing the Perfect Venue',
    excerpt: 'Questions you must ask before signing the contract for your dream location.',
    category: 'Tips',
    date: 'Sep 15, 2024',
    image: 'https://picsum.photos/800/600?random=62'
  },
  {
    id: '4',
    title: 'Vendor Spotlight: Petal & Stem Florals',
    excerpt: 'An interview with one of our favorite local florists about creating organic, flowing arrangements.',
    category: 'Vendor Spotlight',
    date: 'Aug 30, 2024',
    image: 'https://picsum.photos/800/600?random=63'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">The Journal</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Inspiration, advice, and stories from the aisle.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map(post => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 aspect-[3/2]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3 uppercase tracking-wide font-medium">
                <span className="text-navy-900">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-navy-900 text-sm font-medium underline decoration-slate-200 underline-offset-4 group-hover:decoration-navy-900 transition-all mt-auto">
                Read Article
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

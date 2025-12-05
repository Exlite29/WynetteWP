import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Elegant Estate Wedding', category: 'Spring', image: 'https://picsum.photos/800/600?random=30', date: 'April 2024' },
  { id: '2', title: 'Coastal Romance', category: 'Summer', image: 'https://picsum.photos/800/600?random=31', date: 'July 2024' },
  { id: '3', title: 'Urban Chic Loft', category: 'City', image: 'https://picsum.photos/800/600?random=32', date: 'September 2023' },
  { id: '4', title: 'Intimate Garden Party', category: 'Spring', image: 'https://picsum.photos/800/600?random=33', date: 'May 2024' },
  { id: '5', title: 'Winter Wonderland', category: 'Winter', image: 'https://picsum.photos/800/600?random=34', date: 'December 2023' },
  { id: '6', title: 'Vineyard Vows', category: 'Destination', image: 'https://picsum.photos/800/600?random=35', date: 'October 2023' },
  { id: '7', title: 'Classic Black Tie', category: 'City', image: 'https://picsum.photos/800/600?random=36', date: 'February 2024' },
  { id: '8', title: 'Bohemian Sunset', category: 'Summer', image: 'https://picsum.photos/800/600?random=37', date: 'August 2023' },
  { id: '9', title: 'Tuscan Dream', category: 'Destination', image: 'https://picsum.photos/800/600?random=38', date: 'June 2024' },
];

const CATEGORIES = ['All', 'Spring', 'Summer', 'Winter', 'City', 'Destination'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Portfolio</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">A collection of our favorite love stories.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-navy-900 text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-widest mb-1">{item.date}</p>
                  <p className="font-serif text-xl">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

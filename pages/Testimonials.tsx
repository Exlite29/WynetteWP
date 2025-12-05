import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & James',
    role: 'Bride & Groom',
    quote: "Wynette didn't just plan our wedding; she orchestrated a dream. Every detail was perfect, and her calm presence made the entire process a joy. We couldn't have done it without her.",
    image: 'https://picsum.photos/150/150?random=40'
  },
  {
    id: '2',
    name: 'Eleanor & David',
    role: 'Bride & Groom',
    quote: "From the moment we met Wynette, we knew we were in good hands. She understood our vision immediately and elevated it beyond what we thought possible. Best investment we made.",
    image: 'https://picsum.photos/150/150?random=41'
  },
  {
    id: '3',
    name: 'Margaret P.',
    role: 'Mother of the Bride',
    quote: "As a perfectionist, I found it hard to let go of control, but Wynette's organization and attention to detail earned my trust instantly. The day was flawless.",
    image: 'https://picsum.photos/150/150?random=42'
  },
  {
    id: '4',
    name: 'Jessica & Tom',
    role: 'Bride & Groom',
    quote: "Wynette has an incredible eye for design. She transformed a blank canvas warehouse into a romantic garden oasis. Our guests are still talking about it!",
    image: 'https://picsum.photos/150/150?random=43'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Kind Words</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Love notes from our wonderful couples.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex flex-col items-center text-center">
              <div className="mb-6 text-navy-200">
                <Quote size={48} className="fill-current" />
              </div>
              <p className="font-serif text-lg md:text-xl text-slate-700 italic leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                />
                <div className="text-left">
                  <div className="font-medium text-navy-900">{t.name}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

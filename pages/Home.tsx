import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Elegant Wedding Setting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/30 backdrop-brightness-75"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h2 className="text-sm md:text-base tracking-[0.2em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Wedding Planning & Design</h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Crafting Timeless <br/> Wedding Experiences
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link 
              to={PageRoutes.CONTACT}
              className="px-8 py-4 bg-white text-navy-900 font-medium rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            >
              Book Your Initial Consultation
            </Link>
            <Link 
              to={PageRoutes.PORTFOLIO}
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <span className="text-navy-900 font-medium tracking-wider text-sm uppercase block mb-4">The Philosophy</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-8 leading-snug">
            We believe that every love story deserves a masterpiece. <br/>
            Meticulously planned, beautifully designed, and flawlessly executed.
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 text-lg">
            Wynette Mcphee is a premier wedding planning studio dedicated to creating celebrations that are as unique as they are unforgettable. From the initial concept to the final dance, we handle every detail with grace and precision, allowing you to immerse yourself fully in the joy of your special day.
          </p>
          <img 
            src="https://picsum.photos/800/400?random=2" 
            alt="Table setting detail" 
            className="w-full h-64 md:h-96 object-cover rounded-sm shadow-sm"
          />
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-4">Our Curated Services</h2>
            <div className="w-16 h-0.5 bg-navy-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Full Service Planning', desc: 'Comprehensive guidance from "Yes" to "I Do".', img: 3 },
              { title: 'Partial Planning', desc: 'Expert support for the couple who has started the journey.', img: 4 },
              { title: 'Month-of Coordination', desc: 'Ensuring your plans are executed flawlessly on the day.', img: 5 },
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/600/400?random=${service.img}`} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center relative">
                  <h3 className="font-serif text-xl font-medium text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <Link 
                    to={PageRoutes.SERVICES}
                    className="inline-flex items-center text-navy-900 text-sm font-medium uppercase tracking-wide hover:text-navy-700"
                  >
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="flex justify-center mb-8 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8">
            "Wynette didn't just plan our wedding; she orchestrated a dream. Every detail was perfect, and her calm presence made the entire process a joy."
          </blockquote>
          <cite className="not-italic">
            <div className="font-medium text-lg">Sarah & James</div>
            <div className="text-slate-400 text-sm">Married Summer 2024 at The Grand Estate</div>
          </cite>
        </div>
      </section>

      {/* Latest Journal Entries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-2">The Journal</h2>
              <p className="text-slate-500">Inspiration, advice, and real weddings.</p>
            </div>
            <Link to={PageRoutes.BLOG} className="hidden md:block text-navy-900 font-medium hover:underline">View All Articles</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Top 5 Trends for 2025 Weddings', cat: 'Planning Advice', date: 'Oct 12, 2024', img: 6 },
              { title: 'A Romantic Seaside Affair: Emily & John', cat: 'Real Weddings', date: 'Sep 28, 2024', img: 7 },
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="h-80 overflow-hidden mb-6 relative">
                  <img 
                    src={`https://picsum.photos/800/600?random=${post.img}`} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-navy-900">
                    {post.cat}
                  </div>
                </div>
                <div className="text-xs text-slate-500 mb-2 uppercase tracking-wide">{post.date}</div>
                <h3 className="font-serif text-2xl text-navy-900 group-hover:text-navy-700 transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to={PageRoutes.BLOG} className="text-navy-900 font-medium hover:underline">View All Articles</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

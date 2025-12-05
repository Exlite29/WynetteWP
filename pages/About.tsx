import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">About Wynette</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">The heart and soul behind the celebrations.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-navy-900/10 z-0"></div>
            <img 
              src="https://picsum.photos/600/800?random=10" 
              alt="Wynette Mcphee" 
              className="relative z-10 w-full h-[600px] object-cover shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6">Hello, I'm Wynette.</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                My passion for wedding planning was born from a love of storytelling. I believe that a wedding is more than just an event; it is the first chapter of a new family legacy, told through flowers, food, music, and moments.
              </p>
              <p>
                With over a decade of experience in the luxury event industry, I have honed the art of blending logistical precision with creative vision. My approach is deeply personal—I take the time to know my couples, understanding not just their aesthetic preferences, but their shared history and values.
              </p>
              <p>
                Whether you envision a grand ballroom affair or an intimate garden gathering, my goal remains the same: to create a stress-free environment where you can be a guest at your own wedding, confident that every detail is being managed with expert care.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-slate-100">
               <h3 className="font-serif text-xl text-navy-900 mb-4">What I Love Most</h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 text-sm">
                 <li className="flex items-center"><span className="w-2 h-2 bg-navy-900 rounded-full mr-3"></span>The quiet moment before the bride walks down the aisle.</li>
                 <li className="flex items-center"><span className="w-2 h-2 bg-navy-900 rounded-full mr-3"></span>Designing tablescapes that spark conversation.</li>
                 <li className="flex items-center"><span className="w-2 h-2 bg-navy-900 rounded-full mr-3"></span>Late-night logistics (truly!).</li>
                 <li className="flex items-center"><span className="w-2 h-2 bg-navy-900 rounded-full mr-3"></span>Seeing grandparents on the dance floor.</li>
               </ul>
            </div>

            <div className="mt-10">
              <img 
                src="https://picsum.photos/200/100?random=signature" 
                alt="Wynette Signature" 
                className="opacity-60 h-16"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-navy-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Let's create something beautiful together.</h2>
          <Link 
            to={PageRoutes.CONTACT}
            className="inline-block px-8 py-4 bg-white text-navy-900 font-medium rounded-full hover:bg-slate-100 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

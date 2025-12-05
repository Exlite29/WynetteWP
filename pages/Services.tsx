import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes, ServicePackage } from '../types';
import { Check } from 'lucide-react';

const PACKAGES: ServicePackage[] = [
  {
    id: 'full-service',
    title: 'Full Service Planning',
    description: 'For the couple who wants a professional to guide them through every step of the process. We manage everything from vendor selection to design execution, budget management, and logistics.',
    features: [
      'Unlimited consultations',
      'Budget development & management',
      'Venue scouting & selection',
      'Vendor curation & contract negotiation',
      'Full design concept & execution',
      'Guest list & RSVP management',
      'Wedding weekend coordination'
    ],
    image: 'https://picsum.photos/600/800?random=20'
  },
  {
    id: 'partial',
    title: 'Partial Planning',
    description: 'Perfect for couples who have secured their venue and major vendors but need expert guidance to bring the design together and manage the logistical details leading up to the day.',
    features: [
      'Monthly check-in meetings',
      'Vendor recommendations',
      'Design guidance & refinement',
      'Timeline creation',
      'Final walkthrough management',
      'Vendor liaison (3 months out)'
    ],
    image: 'https://picsum.photos/600/800?random=21'
  },
  {
    id: 'month-of',
    title: 'Month-of Coordination',
    description: 'Ensure your hard work pays off with a flawless execution. We step in 6 weeks prior to finalize logistics, confirm vendors, and manage the wedding day so you can relax.',
    features: [
      'Handover meeting (6 weeks out)',
      'Detailed minute-by-minute timeline',
      'Vendor confirmation',
      'Ceremony rehearsal direction',
      'Full wedding day management (10 hours)',
      'Setup & breakdown supervision'
    ],
    image: 'https://picsum.photos/600/800?random=22'
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Services</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg"> tailored packages to meet you where you are in your planning journey.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="space-y-32">
          {PACKAGES.map((pkg, idx) => (
            <div key={pkg.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className={`absolute -bottom-4 ${idx % 2 === 1 ? '-right-4' : '-left-4'} w-full h-full bg-navy-50 z-0`}></div>
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="relative z-10 w-full h-[500px] object-cover shadow-sm"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6">{pkg.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{pkg.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <Check size={18} className="text-navy-900 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`${PageRoutes.CONTACT}?service=${pkg.id}`}
                  className="inline-block px-8 py-3 border border-navy-900 text-navy-900 font-medium rounded-full hover:bg-navy-900 hover:text-white transition-all"
                >
                  Inquire About This Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Callout */}
      <div className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="font-serif text-2xl mb-4">Not sure which package is right for you?</h3>
          <p className="text-slate-300 mb-8">
            Every wedding is unique. We also offer custom proposals and hourly consultation for specific needs like venue hunting or budget creation.
          </p>
          <Link 
            to={PageRoutes.CONTACT}
            className="text-white border-b border-white pb-1 hover:text-slate-200 hover:border-slate-200 transition-colors"
          >
            Book a complimentary discovery call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

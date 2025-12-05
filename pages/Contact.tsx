import React, { useState } from 'react';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Get in Touch</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">We can't wait to hear about your celebration.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl text-navy-900 mb-8">Contact Information</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4 text-navy-900">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-900">Email</h3>
                  <p className="text-slate-600">hello@wynettemcphee.com</p>
                  <p className="text-slate-400 text-sm mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4 text-navy-900">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-900">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-slate-400 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-full mr-4 text-navy-900">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-900">Studio</h3>
                  <p className="text-slate-600">123 Wedding Lane, Suite 400<br/>New York, NY 10012</p>
                  <p className="text-slate-400 text-sm mt-1">By appointment only.</p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 text-white p-8 rounded-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-serif text-xl mb-4">Ready to book a consultation?</h3>
                 <p className="text-slate-300 mb-6 text-sm">
                   Skip the email tag and schedule your complimentary discovery call directly on our calendar.
                 </p>
                 <button className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-medium rounded-full hover:bg-slate-100 transition-colors">
                   <Calendar size={18} className="mr-2" />
                   Schedule Now
                 </button>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={32} />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Thank you for your inquiry!</h3>
                <p className="text-slate-600">
                  We have received your message and will get back to you shortly to discuss your big day.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-navy-900 font-medium underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-2xl text-navy-900 mb-6">Send a Message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 outline-none transition-all"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 outline-none transition-all"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">Wedding Date (Approx)</label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 outline-none transition-all"
                      placeholder="Summer 2025"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested Service</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 outline-none transition-all"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="Full Service">Full Service Planning</option>
                      <option value="Partial">Partial Planning</option>
                      <option value="Month-of">Month-of Coordination</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 outline-none transition-all"
                    placeholder="Tell us a little about your vision..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors shadow-lg mt-4"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

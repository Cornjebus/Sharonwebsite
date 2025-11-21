import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    county: '',
    role: 'Sheriff',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your interest. We will be in touch shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Side */}
          <div className="bg-navy-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-10">
                Ready to discuss a strategy for your county? Fill out the form or contact us directly to schedule a confidential consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-gold-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400">Phone</h3>
                    <p>{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-gold-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400">Email</h3>
                    <p>{COMPANY_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400">Location</h3>
                    <p>{COMPANY_INFO.location}</p>
                    <p className="text-xs text-gray-400 mt-1">Available for travel statewide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="h-1 w-20 bg-gold-500 mb-6"></div>
              <p className="font-serif italic text-gray-300">"Leadership is not about being in charge. It is about taking care of those in your charge."</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                    placeholder="Sheriff John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select 
                    name="role"
                    value={formState.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                  >
                    <option>Sheriff</option>
                    <option>Chief Deputy</option>
                    <option>Public Information Officer</option>
                    <option>Campaign Manager</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                    placeholder="john@sheriffsoffice.gov"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">County/Organization</label>
                  <input 
                    type="text" 
                    name="county"
                    required
                    value={formState.county}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                    placeholder="Wake County"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                  placeholder="I am interested in the Leadership Retainer..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gold-500 text-navy-900 font-bold py-3 rounded hover:bg-gold-400 transition-colors shadow-lg"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
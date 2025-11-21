import React from 'react';
import { Link } from 'react-router-dom';
import { RETAINER_PACKAGES } from '../constants';
import { Check, Star } from 'lucide-react';

export const Retainers: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Retainer Packages</h1>
          <p className="text-xl text-gray-600">
            Recommended for Sheriffs who want consistent partnership, priority access, and a proactive approach to community trust and political strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {RETAINER_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 border ${pkg.isRecommended ? 'border-gold-500 ring-4 ring-gold-500/10' : 'border-gray-200'}`}
            >
              {pkg.isRecommended && (
                <div className="bg-gold-500 text-navy-900 text-center py-2 font-bold text-sm uppercase tracking-wider flex justify-center items-center gap-2">
                  <Star size={16} fill="currentColor" /> Best Value
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-navy-900 mb-2 h-14 flex items-center">{pkg.title}</h3>
                <div className="text-3xl font-bold text-navy-700 mb-4">{pkg.price}</div>
                <p className="text-gray-500 text-sm mb-6 italic">{pkg.description}</p>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-700 p-1 rounded-full shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                   <span className="text-xs font-bold text-navy-900 uppercase tracking-wide block mb-1">Best For:</span>
                   <p className="text-sm text-gray-600">{pkg.bestFor}</p>
                </div>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <Link 
                  to="/contact"
                  className={`block w-full py-3 rounded text-center font-bold transition-colors ${
                    pkg.isRecommended 
                      ? 'bg-navy-900 text-white hover:bg-navy-800' 
                      : 'bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-50'
                  }`}
                >
                  Select This Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="md:w-2/3">
             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Custom County Plans</h3>
             <p className="text-gray-300 text-lg mb-2">For large counties or complex political climates.</p>
             <p className="text-gray-400 text-sm">Includes tailored partnerships, multiple programs, and cross-departmental initiatives.</p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
             <p className="text-2xl font-bold text-gold-500 mb-4">Starting at $7,500/mo</p>
             <Link 
               to="/contact" 
               className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded font-bold hover:bg-gold-400 transition-colors"
             >
               Discuss Custom Needs
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
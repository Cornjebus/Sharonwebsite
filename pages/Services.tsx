import React from 'react';
import { Link } from 'react-router-dom';
import { ALA_CARTE_SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  // Group services by category
  const categories = {
    engagement: "Community Engagement",
    political: "Political Strategy & Comms",
    youth: "Youth & Family Programs",
    grant: "Grant Writing Support"
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">À La Carte Services</h1>
          <p className="text-xl text-gray-600">
            For Sheriffs wanting specific services without a monthly retainer commitment. 
            Select exactly what you need to enhance your department's capabilities.
          </p>
        </div>

        <div className="grid gap-16">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey) => {
            const services = ALA_CARTE_SERVICES.filter(s => s.category === catKey);
            if (services.length === 0) return null;

            return (
              <div key={catKey} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-navy-900 py-4 px-8">
                  <h2 className="text-2xl font-serif font-bold text-gold-500">{categories[catKey]}</h2>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map(service => (
                    <div key={service.id} className="flex flex-col h-full border-b md:border-b-0 md:border-r last:border-0 border-gray-100 pb-6 md:pb-0 pr-0 md:pr-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                      <p className="text-lg font-semibold text-gold-600 mb-4">{service.price}</p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-navy-400 mt-1">•</span> {detail}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center text-navy-700 font-semibold hover:text-gold-600 text-sm transition-colors mt-auto"
                      >
                        Inquire Now <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gold-50 rounded-xl p-8 text-center border border-gold-200">
          <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Need Ongoing Support?</h3>
          <p className="text-gray-700 mb-6">Our Retainer Packages offer the best value for consistent partnership and long-term strategy.</p>
          <Link 
            to="/retainers" 
            className="bg-navy-900 text-white px-8 py-3 rounded font-bold hover:bg-navy-800 transition-colors"
          >
            View Retainer Packages
          </Link>
        </div>
      </div>
    </div>
  );
};
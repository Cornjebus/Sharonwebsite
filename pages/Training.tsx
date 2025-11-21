import React from 'react';
import { Link } from 'react-router-dom';
import { TRAINING_SERVICES } from '../constants';
import { BookOpen, Clock, Users } from 'lucide-react';

export const Training: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Deputy Training Sessions</h1>
             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
               Equip your officers with the tools they need to navigate modern policing challenges. Our sessions are interactive, evidence-based, and designed to improve safety for both deputies and citizens.
             </p>
             <div className="flex gap-6 text-sm font-semibold text-navy-700">
                <div className="flex items-center gap-2">
                   <Clock className="text-gold-500" size={20} />
                   <span>½-Day Format</span>
                </div>
                <div className="flex items-center gap-2">
                   <Users className="text-gold-500" size={20} />
                   <span>Up to 40 Attendees</span>
                </div>
             </div>
          </div>
          <div className="md:w-1/2">
             <img src="https://picsum.photos/600/400" alt="Training Session" className="rounded-xl shadow-lg" />
          </div>
        </div>

        <div className="grid gap-8">
          {TRAINING_SERVICES.map((training) => (
            <div key={training.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                   <BookOpen className="text-navy-400" size={24} />
                   <h3 className="text-2xl font-bold text-navy-900">{training.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                   {training.details.map((detail, i) => (
                      <li key={i} className="text-gray-600 text-sm list-disc list-inside marker:text-gold-500">{detail}</li>
                   ))}
                </ul>
              </div>
              <div className="text-center md:text-right shrink-0 flex flex-col items-center md:items-end gap-4">
                 <span className="text-2xl font-bold text-gold-600">{training.price}</span>
                 <Link 
                   to="/contact"
                   className="bg-navy-900 text-white px-6 py-2 rounded font-medium hover:bg-navy-800 transition-colors text-sm"
                 >
                   Book Session
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
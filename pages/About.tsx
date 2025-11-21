import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">About Sharon McDonald Evans, PhD</h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-full md:w-1/3 shrink-0">
              <img 
                src="https://picsum.photos/400/500" 
                alt="Sharon McDonald Evans, PhD" 
                className="w-full rounded-lg shadow-xl border-4 border-white"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">A Lifetime of Service & Strategy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                For over three decades, Dr. Sharon McDonald Evans has been a pivotal figure in North Carolina’s public policy and community engagement landscape. With a unique ability to navigate both grassroots community movements and high-level government strategy, she bridges the divide that often separates law enforcement from the citizens they serve.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Holding a PhD in Public Policy, Sharon does not just offer theory; she offers battle-tested strategies. She has advised Sheriffs through volatile election cycles, managed crisis communications during high-profile incidents, and designed training curriculums that have reshaped departmental cultures.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Her approach is nonpartisan but politically astute. She understands that a Sheriff is both a law enforcement officer and an elected official, and her consulting practice honors the complexity of that dual role.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md mb-16">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-8 text-center">Professional Highlights & Accomplishments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "30+ Years Experience in NC Public Policy",
                "Advisor to 10+ NC Sheriff's Offices",
                "PhD in Public Policy & Administration",
                "Architect of 'Community First' Policing Models",
                "Secured over $5M in Federal Grants for Clients",
                "Keynote Speaker on Police-Community Relations",
                "Certified Master Trainer for Law Enforcement",
                "Crisis Manager for High-Stakes Incidents"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-gold-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
             <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">Why Sheriffs Trust Her</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               <div className="bg-navy-50 p-6 rounded-lg">
                 <h4 className="font-bold text-navy-900 mb-2">Discretion</h4>
                 <p className="text-sm text-gray-600">She understands the sensitivity of internal affairs and political vulnerabilities. Your consultations are strictly confidential.</p>
               </div>
               <div className="bg-navy-50 p-6 rounded-lg">
                 <h4 className="font-bold text-navy-900 mb-2">Realism</h4>
                 <p className="text-sm text-gray-600">She knows budget realities. Her solutions are designed to scale for small rural counties and large metro areas alike.</p>
               </div>
               <div className="bg-navy-50 p-6 rounded-lg">
                 <h4 className="font-bold text-navy-900 mb-2">Results</h4>
                 <p className="text-sm text-gray-600">From winning elections to calming civil unrest, her strategies are focused on tangible, positive outcomes.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
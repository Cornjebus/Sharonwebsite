import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Mic, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Background texture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Serving NC Sheriffs for 30+ Years
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Strengthening Communities, <span className="text-gold-500">Building Trust</span>.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Expert guidance in community engagement, deputy training, and political strategy. Helping Sheriff’s Offices navigate modern challenges with integrity and foresight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-gold-500 text-navy-900 px-8 py-4 rounded font-bold text-lg hover:bg-gold-400 transition-all text-center shadow-lg shadow-gold-500/20"
              >
                Book a Consultation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-navy-900 transition-all text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview/Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                Bridging the Gap Between Law Enforcement & The Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In today's climate, the role of a Sheriff extends far beyond enforcement. It requires skilled diplomacy, proactive community building, and strategic communication.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dr. Evans provides the blueprint for Sheriffs who want to lead with transparency and secure public trust. From crisis management to youth programs, we build the infrastructure for long-term success.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: "Political Strategy" },
                  { icon: Users, label: "Community Engagement" },
                  { icon: Mic, label: "Crisis Communication" },
                  { icon: Award, label: "Grant Writing" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded shadow-sm border border-gray-100">
                    <div className="bg-navy-50 text-navy-900 p-2 rounded">
                      <item.icon size={24} />
                    </div>
                    <span className="font-semibold text-navy-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy-100 rounded-full z-0"></div>
              <img 
                src="https://picsum.photos/600/700" 
                alt="Dr. Evans Consulting" 
                className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Sheriffs Partner With Dr. Evans</h2>
            <p className="text-gray-400 text-lg">
              Our partnership delivers measurable results that strengthen your command and your community standing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-gold-500 mb-4 font-serif text-6xl opacity-20 font-bold">01</div>
              <h3 className="text-xl font-bold mb-3">Trust & Legitimacy</h3>
              <p className="text-gray-400">Build authentic relationships with marginalized communities, faith leaders, and youth through structured engagement.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-gold-500 mb-4 font-serif text-6xl opacity-20 font-bold">02</div>
              <h3 className="text-xl font-bold mb-3">Strategic Communication</h3>
              <p className="text-gray-400">Control the narrative during crises and elections. Deliver clear, powerful messages that resonate with voters.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-gold-500 mb-4 font-serif text-6xl opacity-20 font-bold">03</div>
              <h3 className="text-xl font-bold mb-3">Resource Expansion</h3>
              <p className="text-gray-400">Unlock federal and state funding through expert grant writing to support new initiatives without burdening the local budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gold-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-navy-900 mb-12">Trusted by Leaders Across North Carolina</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md border-b-4 border-gold-500">
                <div className="text-navy-800 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Strengthen Your Community Impact?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Choose a retainer package for ongoing support or select specific services to meet your immediate needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link 
                  to="/retainers" 
                  className="bg-gold-500 text-navy-900 px-8 py-3 rounded font-bold hover:bg-gold-400 transition-colors"
                >
                  View Retainer Packages
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
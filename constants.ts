import { RetainerPackage, ServiceItem, Testimonial } from './types';
import { Shield, Users, Mic, BookOpen, Gavel, HeartHandshake } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Sharon McDonald Evans, PhD",
  tagline: "Strengthening Communities, Building Trust, Supporting Sheriff Leadership",
  phone: "(555) 123-4567",
  email: "contact@sharonmcdonaldphd.com",
  location: "North Carolina",
};

export const RETAINER_PACKAGES: RetainerPackage[] = [
  {
    id: 'community',
    title: "Community Engagement Retainer",
    price: "$2,500/month",
    description: "Ongoing support for building bridges with the community.",
    features: [
      "1 community event per month (listening session, town hall)",
      "1 strategic advisory call per month",
      "Community engagement blueprint + monthly reporting",
      "Crisis community support (reactive guidance)"
    ],
    bestFor: "Medium–large counties, counties needing trust rebuilding."
  },
  {
    id: 'strategy',
    title: "Sheriff’s Public Strategy & Communications",
    price: "$3,500/month",
    description: "Strategic messaging and public perception management.",
    features: [
      "Messaging & narrative strategy",
      "Community perception analysis",
      "Speech writing",
      "Crisis communication support",
      "Oversight of community relations initiatives",
      "Media positioning consultation",
      "Monthly strategy meeting"
    ],
    bestFor: "Sheriffs facing elections or high community visibility."
  },
  {
    id: 'leadership',
    title: "Sheriff Leadership Retainer",
    price: "$5,000/month",
    description: "Comprehensive partnership combining engagement and strategy.",
    features: [
      "All community engagement services",
      "All political/communications strategy services",
      "Unlimited advisory calls",
      "Priority crisis support",
      "Quarterly comprehensive community report"
    ],
    bestFor: "Sheriffs who want consistent partnership & countywide impact.",
    isRecommended: true
  }
];

export const TRAINING_SERVICES: ServiceItem[] = [
  {
    id: 't1',
    title: "Cultural Diversity / Implicit Bias / Microaggressions",
    price: "$1,800 per session",
    category: 'training',
    details: ["½-day format", "On-site", "Up to 40 attendees", "Interactive scenarios"]
  },
  {
    id: 't2',
    title: "Community Relations & De-Escalation Communication",
    price: "$1,500 per session",
    category: 'training',
    details: ["Techniques for reducing tension", "Verbal judo", "Building rapport"]
  },
  {
    id: 't3',
    title: "Trauma-Informed Policing Training",
    price: "$1,500 per session",
    category: 'training',
    details: ["Understanding trauma impact", "Victim-centered approaches", "Officer wellness"]
  }
];

export const ALA_CARTE_SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: "Community Listening Session",
    price: "$1,750",
    category: 'engagement',
    details: ["Facilitated session", "Planning & Logistics", "Summary report"]
  },
  {
    id: 's2',
    title: "Faith-Based Outreach / Coalition Launch",
    price: "$2,000",
    category: 'engagement',
    details: ["Full coalition assembly", "Strategic blueprint", "Stakeholder alignment"]
  },
  {
    id: 's3',
    title: "Community Crisis Mediation",
    price: "$2,500 per incident",
    category: 'engagement',
    details: ["Emergency Deployment", "On-site or virtual", "Conflict resolution"]
  },
  {
    id: 'y1',
    title: "Youth Violence Prevention Strategy",
    price: "$3,000",
    category: 'youth',
    details: ["Stakeholder mapping", "Program design", "Implementation guide"]
  },
  {
    id: 'y2',
    title: "Juvenile Diversion Blueprint",
    price: "$3,500",
    category: 'youth',
    details: ["Collaborative plan", "Sheriff + schools + courts alignment"]
  },
  {
    id: 'p1',
    title: "Campaign Messaging Package",
    price: "$2,500",
    category: 'political',
    details: ["Core messaging", "3 speeches", "Community talking points", "Event script"]
  },
  {
    id: 'p2',
    title: "Political Strategy Consultation",
    price: "$350/hour",
    category: 'political',
    details: ["Elections", "Messaging", "Coalition-building"]
  },
  {
    id: 'g1',
    title: "Grant Writing (State or Local)",
    price: "$3,000 per grant",
    category: 'grant',
    details: ["Proposal development", "Budget narrative", "Submission support"]
  },
  {
    id: 'g2',
    title: "Federal Grant Writing (DOJ, OJP, COPS)",
    price: "$5,000 per grant",
    category: 'grant',
    details: ["Comprehensive narrative", "Compliance check", "High-value funding targeting"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Dr. Evans transformed how our department connects with the community. Trust has never been higher.",
    author: "Sheriff J. Thompson",
    role: "Eastern NC County"
  },
  {
    id: '2',
    quote: "Her strategic insight during the election year was invaluable. She understands the pulse of the voters and the badge.",
    author: "Sheriff A. Miller",
    role: "Piedmont Region"
  },
  {
    id: '3',
    quote: "The training sessions were eye-opening for our deputies. Practical, respectful, and deeply necessary.",
    author: "Chief Deputy R. Davis",
    role: "Western NC County"
  }
];

export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Retainers', path: '/retainers' },
  { name: 'Training', path: '/training' },
  { name: 'Contact', path: '/contact' },
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Sharon McDonald Evans, PhD.
You are helpful, professional, and knowledgeable about government consulting, sheriff leadership, and community engagement.
Your goal is to help visitors understand Sharon's services and pricing models.

Here is the core data you must use to answer questions:

**Retainer Packages:**
1. Community Engagement Retainer ($2,500/mo): 1 event/mo, 1 call/mo, blueprint. Best for Medium-large counties.
2. Sheriff's Public Strategy Retainer ($3,500/mo): Messaging, perception analysis, speeches, crisis comms. Best for elections.
3. Combined Leadership Retainer ($5,000/mo): Includes everything in 1 & 2 + priority support. Best Value.

**Training:**
- Cultural Diversity/Implicit Bias: $1,800/session (1/2 day).
- De-escalation: $1,500/session.
- Trauma-Informed Policing: $1,500/session.

**Services:**
- Community Listening Session: $1,750.
- Faith-Based Coalition: $2,000.
- Crisis Mediation: $2,500/incident.
- Youth Violence Prevention: $3,000.
- Campaign Messaging: $2,500.
- Grant Writing: $3,000 (State), $5,000 (Federal).

Tone: Professional, confident, warm, government-trusted.
Do not make up services not listed here. If asked for something custom, suggest the "Custom County Plan" starting at $7,500/mo.
`;

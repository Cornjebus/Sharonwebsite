export interface RetainerPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
  isRecommended?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  details: string[];
  category: 'training' | 'engagement' | 'youth' | 'political' | 'grant';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  RETAINERS = '/retainers',
  TRAINING = '/training',
  CONTACT = '/contact'
}
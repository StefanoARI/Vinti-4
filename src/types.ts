export type PageId = 
  | 'home' 
  | 'chi-siamo' 
  | 'atelier' 
  | 'sposa-immagine' 
  | 'gift-card' 
  | 'corsi' 
  | 'contatti';

export type AtelierAnchor = 'taglio-styling' | 'colore' | 'hair-integration';
export type SposaAnchor = 'sposa' | 'consulenza';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'taglio' | 'colore' | 'integration' | 'sposa' | 'consulenza';
  description: string;
  duration: string;
  priceFrom: string;
  badge?: string;
  features?: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
  avatar?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  level: 'Base' | 'Avanzato' | 'Masterclass Elite';
  description: string;
  program: string[];
  upcomingDates: string[];
  investment: string;
  image: string;
}

export interface BookingFormData {
  serviceId: string;
  specialist: 'nicole' | 'master';
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

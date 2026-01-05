
import React from 'react';
import { Room, Offer, Review, BlogPost } from './types';

export const COLORS = {
  GOLD: '#D4AF37',
  DARK_BLUE: '#0B1221',
  CHAMPAGNE: '#FDFBF7',
  SLATE: '#1E293B',
};

export const ROOMS: Room[] = [
  {
    id: 'royal-suite',
    name: "The Royal Heritage Suite",
    category: 'Suite',
    price: 1250,
    capacity: 2,
    size: '120m²',
    description: "Our most prestigious accommodation offering panoramic city views, a private terrace, and personalized butler service. Decorated with authentic 19th-century antiques and gold-leaf finishes.",
    amenities: ["Private Butler", "Panoramic View", "Mini Bar", "Walk-in Closet", "Smart Home Control", "Freestanding Marble Tub"],
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200", "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"],
    featured: true
  },
  {
    id: 'presidential-suite',
    name: "Presidential Skyline Suite",
    category: 'Suite',
    price: 2100,
    capacity: 3,
    size: '180m²',
    description: "The ultimate in Parisian luxury. Features a private library, grand piano, and an expansive terrace overlooking the Eiffel Tower.",
    amenities: ["Private Chef", "Rooftop Terrace", "Grand Piano", "Private Gym", "24/7 Chauffeur"],
    images: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200", "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200"],
    featured: true
  },
  {
    id: 'executive-deluxe',
    name: "Executive Deluxe Room",
    category: 'Deluxe',
    price: 450,
    capacity: 2,
    size: '45m²',
    description: "Designed for the modern traveler, combining elegant aesthetics with state-of-the-art functionality. Features soundproof windows and an artisan work desk.",
    amenities: ["Nespresso Machine", "Work Desk", "Luxury Bath", "High-speed Wi-Fi", "Rain Shower"],
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200"],
    featured: true
  },
  {
    id: 'family-terrace',
    name: "Family Terrace Suite",
    category: 'Suite',
    price: 680,
    capacity: 4,
    size: '75m²',
    description: "Spacious multi-room suite featuring a private garden terrace and child-friendly amenities. Perfect for long family stays in the city.",
    amenities: ["Terrace", "Kitchenette", "Living Area", "Connecting Rooms Available", "PlayStation 5"],
    images: ["https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200", "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200"]
  },
  {
    id: 'heritage-standard',
    name: "Heritage Standard Room",
    category: 'Standard',
    price: 290,
    capacity: 2,
    size: '30m²',
    description: "A cozy and refined space offering all the essential luxuries of L'Héritage. Ideal for the solo traveler or a quick business trip.",
    amenities: ["Queen Bed", "Luxury Linen", "City View", "Smart TV"],
    images: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200"]
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'romance-package',
    title: "Romantic Escape",
    description: "Champagne on arrival, a 3-course dinner for two at L'Orangerie, and late checkout until 4:00 PM.",
    discountCode: "LOVE24",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    validUntil: "2024-12-31"
  },
  {
    id: 'spa-retreat',
    title: "Wellness Retreat",
    description: "Two 60-minute signature gold facial treatments and unlimited access to the thermal circuit during your stay.",
    discountCode: "RELAX",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1200&auto=format&fit=crop",
    validUntil: "2024-10-15"
  }
];

export const REVIEWS: Review[] = [
  { id: '1', author: "Alexander Thorne", rating: 5, comment: "Exquisite service and the best sleep I've had in years. The Royal Suite is simply breathtaking.", date: "May 2024" },
  { id: '2', author: "Isabella Martinez", rating: 5, comment: "The attention to detail is remarkable. Every staff member made us feel like royalty.", date: "April 2024" },
  { id: '3', author: "James Wilson", rating: 4, comment: "Fantastic breakfast selection. The spa is a hidden sanctuary in the middle of the city.", date: "June 2024" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: "The Art of European Hospitality",
    excerpt: "Exploring the history and dedication behind our service standards.",
    author: "Elena Rossi",
    date: "June 12, 2024",
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=1200",
    category: "Hospitality"
  },
  {
    id: 'b2',
    title: "Hidden Gems of the Historic District",
    excerpt: "A guide to the secret spots only locals and our concierge know.",
    author: "Marc Dupont",
    date: "June 05, 2024",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    category: "Travel"
  }
];

export const ICONS = {
  Bed: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
  ),
  Wifi: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
  ),
  Coffee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
  ),
  Spa: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2"/><path d="M12 10 10 14v3a1 1 0 0 1-1 1H7"/><path d="M4.5 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/><path d="M19.5 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 22v-3"/><path d="M8 22v-3"/><path d="M16 22v-3"/><path d="M7 11h10"/><path d="M9.5 3h5"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )
};

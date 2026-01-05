
export interface Room {
  id: string;
  name: string;
  category: 'Suite' | 'Deluxe' | 'Standard';
  price: number;
  capacity: number;
  size: string;
  description: string;
  amenities: string[];
  images: string[];
  featured?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountCode: string;
  image: string;
  validUntil: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
}

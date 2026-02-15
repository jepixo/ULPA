export interface Accommodation {
  name: string;
  location: "On-Campus" | "Off-Campus";
  type: "Ensuite" | "Standard" | "Studio" | "House"; // Generalized types
  pricing: string;
  roomTypes: string[];
  amenities: string[];
  description: string;
  bookingURL: string;
  imageURLs: string[];
  videoURLs?: string[]; // Optional video links
  pros: string[];
  cons: string[];
  phone?: string;
  email?: string;
}

export interface ResearchSource {
  id: string;
  title: string;
  url: string;
  description: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export interface FilterState {
  location: string[];
  roomType: string[];
  amenities: string[];
}

// ── Production-Ready Types for UL Postgraduate Accommodation Guide ──

export interface ContractOption {
  lengthWeeks: 38 | 41 | 51;
  postgradAvailable: boolean;
  typicalTotalPriceEUR: number;
  utilitiesIncluded: boolean;
  priceNotes?: string;
}

export interface RoomOption {
  type: string;
  ensuite: boolean;
  sharedBathroom: boolean;
}

export interface Accommodation {
  id: string;
  name: string;
  locationType: "on-campus" | "off-campus";
  ulManaged: boolean;
  privateManaged: boolean;
  postgradDedicated: boolean;
  typicalResidentMix: "mostly-postgrad" | "mixed" | "mostly-undergrad";

  description: string;
  distanceToCampusMinutes: number;

  contractOptions: ContractOption[];
  roomOptions: RoomOption[];

  amenities: string[];
  pros: string[];
  cons: string[];

  pricingNotes?: string;
  allocationNotes?: string;

  bookingType: "ul-portal" | "direct-private";
  bookingURL: string;
  imageURLs: string[];
  videoURLs?: string[];

  phone?: string;
  email?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string; // emoji
}

export interface AdviceItem {
  id: string;
  title: string;
  content: string;
  icon: string; // emoji
}

export interface FilterState {
  show51WeekOnly: boolean;
  ensuiteOnly: boolean;
  ulManagedOnly: boolean;
  postgradFocused: boolean;
  maxWalkMinutes: number | null;
  locationType: "all" | "on-campus" | "off-campus";
}

export type SortOption = "price-asc" | "price-desc" | "distance" | "name";

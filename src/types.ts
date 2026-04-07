export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  type: 'PLATINO' | 'ORO' | 'PLATA';
  gender: 'Mujer' | 'Hombre' | 'Travesti';
  isVerified: boolean;
  hasVideo: boolean;
  imageUrl: string;
  phone?: string;
  likes?: number;
  weight?: number;
  height?: number;
  measurements?: string;
  description?: string;
  servicesIncluded?: string[];
  additionalServices?: string[];
  album?: string[];
}

export interface Activity {
  id: string;
  profileName: string;
  comment: string;
  time: string;
  location: string;
}

export interface Comment {
  id: string;
  user: string;
  date: string;
  text: string;
  avatar?: string;
}

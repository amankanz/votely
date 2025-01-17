/*
export interface Business {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  location: string[];
  category: string[];
  favorite: boolean;
  vote: boolean;
  image: string;
}
*/

export interface Business {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  location: string[];
  category: string[];
  favorite: boolean;
  vote: boolean;
  image: string;
  userRating?: number; // Added
  userReview?: string; // Added
  userVote?: string | null; // Added
}

export interface BusinessListProps {
  businesses: Business[];
}

export interface StarRatingProps {
  maxStars: number; // Maximum number of stars
  initialRating: number; // Initial rating value
  onRatingChange: (newRating: number) => void; // Callback for rating change
  readOnly: boolean; // Whether the stars are read-only
}

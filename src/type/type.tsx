/** @format */

export interface HotelData {
  id: string;
  name: string;
  country: string;
  city: string;
  location: string;
  pricePerNight: number;
  maxCapacity: number;
  petFriendly: boolean;
  pool: boolean;
  airConditioning: boolean;
  balcony: boolean;
  parking: boolean;
  breakfastIncluded: boolean;
  smokingAllowed: boolean;
  src: string;
  featured: boolean;
  description: string;
}

export interface HotelProps {
  id: string;
  name: string;
  city: string;
  country: string;
  pricePerNight: number;
  src: string;
}

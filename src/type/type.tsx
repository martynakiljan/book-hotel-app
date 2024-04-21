/** @format */

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";

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
  featured: boolean;
  id: string;
  name: string;
  city: string;
  country: string;
  pricePerNight: number;
  src: string;
}

export interface ReviewProps {
  name: string;
  review: string;
  src: string;
  stars: number;
}

export type BookingContextType = {
  startDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  endDate: string;
  setEndDate: Dispatch<SetStateAction<string>>;
  numOfGuest: number;
  setNumberOfGuest: Dispatch<SetStateAction<number>>;
  error: string;
  handleStartDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEndDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNumberOfGuest: (event: ChangeEvent<HTMLInputElement>) => void;
  isSubmitDisabled: boolean;
  handleSubmit: (event: FormEvent) => void;
};

export type BookingProviderProps = {
  children: ReactNode;
};

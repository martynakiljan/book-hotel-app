/** @format */

import { ChangeEvent, Dispatch, FormEvent, ReactNode, SetStateAction } from 'react'

export interface HotelProps {
	awarded: boolean
	id: string
	name: string
	city: string
	country: string
	pricePerNight: number
	src: string
}

export interface HotelData extends HotelProps {
	location: string
	maxCapacity: number
	petFriendly: boolean
	pool: boolean
	airConditioning: boolean
	balcony: boolean
	parking: boolean
	breakfastIncluded: boolean
	smokingAllowed: boolean
	description: string
}

export interface ReviewProps {
	name: string
	review: string
	src: string
	stars: number
}

export type BookingContextType = {
	startDate: string
	setStartDate: Dispatch<SetStateAction<string>>
	endDate: string
	setEndDate: Dispatch<SetStateAction<string>>
	numberOfGuests: number
	setNumberOfGuests: Dispatch<SetStateAction<number>>
	error: string
	handleStartDateChange: (event: ChangeEvent<HTMLInputElement>) => void
	handleEndDateChange: (event: ChangeEvent<HTMLInputElement>) => void
	handleNumberOfGuest: (event: ChangeEvent<HTMLInputElement>) => void
	isSubmitDisabled: boolean
	handleSubmit: (event: FormEvent) => void
	sortBy: string
	handleSortChange: (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => void
	handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void
	selectedOptions: sortOptions
	setSelectedOptions: Dispatch<SetStateAction<sortOptions>>
}

export type BookingProviderProps = {
	children: ReactNode
}

export type sortOptions = {
	pool: boolean
	airConditioning: boolean
	breakfastIncluded: boolean
	balcony: boolean
	freeCancellation: boolean
	childrenFriendly: boolean
	petFriendly: boolean
}

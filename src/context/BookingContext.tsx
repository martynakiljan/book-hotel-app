/** @format */

import React, { createContext, useContext, useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingContextType } from '../type/type'
import { BookingProviderProps } from '../type/type'

// create context
const BookingContext = createContext<BookingContextType | undefined>(undefined)

// hook for context
export const useBooking = () => {
	const context = useContext(BookingContext)
	if (!context) {
		throw new Error('useBooking must be used within a BookingProvider')
	}
	return context
}

// provider
export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [numOfGuest, setNumberOfGuest] = useState(0)

	//sort//

	const [sortBy, setSortBy] = useState('')
	const [selectedSortOption, setSelectedSortOption] = useState('')

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
		setSelectedSortOption(e.target.value)
	}

	const handleNumberOfGuest = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseInt(event.target.value)
		setNumberOfGuest(inputValue)
	}

	const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStartDate(event.target.value)
	}

	const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEndDate(event.target.value)
	}

	const isSubmitDisabled = !startDate || !endDate || !numOfGuest

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		if (startDate > endDate) {
			setError('Start date cannot be later than end date.')
			return
		}

		const today = new Date().toISOString().split('T')[0]

		if (startDate < today || endDate < today) {
			setError('Cannot select a past date.')
			return
		}
		setError('')
		setTimeout(() => {
			navigate('/hotels')
		}, 200)
	}

	return (
		<BookingContext.Provider
			value={{
				startDate,
				setStartDate,
				endDate,
				setEndDate,
				numOfGuest,
				setNumberOfGuest,
				error,
				handleStartDateChange,
				handleNumberOfGuest,
				handleEndDateChange,
				isSubmitDisabled,
				handleSubmit,
				sortBy,
				handleSortChange,
			}}
		>
			{children}
		</BookingContext.Provider>
	)
}

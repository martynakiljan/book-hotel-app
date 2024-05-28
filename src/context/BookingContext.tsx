/** @format */

import React, { createContext, useContext, useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingContextType, sortOptions } from '../type'
import { BookingProviderProps } from '../type'

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
	const [numberOfGuests, setNumberOfGuests] = useState<number>(1)

	useEffect(() => {
		if (isNaN(numberOfGuests)) {
			setNumberOfGuests(1)
		}
	}, [numberOfGuests])

	const [selectedOptions, setSelectedOptions] = useState<sortOptions>({
		pool: false,
		airConditioning: false,
		breakfastIncluded: false,
		balcony: false,
		freeCancellation: false,
		childrenFriendly: false,
		petFriendly: false,
	})

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target
		setSelectedOptions(prevState => ({ ...prevState, [name]: checked }))
		console.log(name)
	}

	//sort//

	const [sortBy, setSortBy] = useState('')
	const [selectedSortOption, setSelectedSortOption] = useState('')

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
		setSelectedSortOption(e.target.value)
		setSortBy(e.target.value)
	}

	const handleNumberOfGuest = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseInt(event.target.value)
		setNumberOfGuests(inputValue)
	}

	const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStartDate(event.target.value)
		console.log(event.target.value)
	}

	const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEndDate(event.target.value)
	}

	const isSubmitDisabled = !startDate || !endDate || !numberOfGuests

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		if (startDate > endDate) {
			setError('Start date cannot be later than end date.')
			return
		}

		const today = new Date().toISOString().split('T')[0]

		if (endDate < today) {
			setError('Cannot select a past date.')
			return
		}
		setError('')

		const filters = {
			selectedOptions,
		}
		navigate('/hotels', { state: filters })
	}

	// calculate days for total price  //

	const [numberOfDays, setNumberOfDays] = useState(0)

	const calculateNumberOfDays = () => {
		const start = new Date(startDate)
		const end = new Date(endDate)
		const differenceInTime = end.getTime() - start.getTime()
		const differenceInDays = differenceInTime / (1000 * 3600 * 24)
		return differenceInDays
	}

	useEffect(() => {
		if (startDate && endDate && numberOfGuests) {
			const days = calculateNumberOfDays()
			setNumberOfDays(days)
		}
	}, [startDate, endDate, numberOfGuests])

	const tax = 4.65
	const [totalPrice, setTotalPrice] = useState<number>(0)

	return (
		<BookingContext.Provider
			value={{
				startDate,
				setStartDate,
				endDate,
				setEndDate,
				numberOfGuests,
				setNumberOfGuests,
				error,
				handleStartDateChange,
				handleNumberOfGuest,
				handleEndDateChange,
				isSubmitDisabled,
				handleSubmit,
				sortBy,
				handleSortChange,
				handleCheckboxChange,
				selectedOptions,
				setSelectedOptions,
				numberOfDays,
				totalPrice,
				tax,
			}}
		>
			{children}
		</BookingContext.Provider>
	)
}

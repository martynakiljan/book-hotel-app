import { useState } from 'react'
import { hotels } from '../data/hotels'
import Hotel from '../components/Hotel'
import { HotelData, HotelProps } from '../type'
import InfoAboutStay from './InfoAboutStay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { sortHotels } from '../helpers/helpers'
import { useBooking } from '../context/BookingContext'

const Hotels = () => {
	const { sortBy, handleSortChange, selectedOptions } = useBooking()

	//pagination //
	const [searchQuery, setSearchQuery] = useState('')

	//search//
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	//filter//
	console.log(hotels)
	const filteredHotels = sortHotels(hotels, sortBy, searchQuery, selectedOptions)

	console.log(filteredHotels)

	return (
		<div className='px-4 py-16 container mx-auto mt-auto mb-auto h-full'>
			<InfoAboutStay />
			<div className='flex justify-between items-center mb-5'>
				<h1 className='text-3xl font-bold'>Hotels</h1>
				<div className='flex items-end'>
					<div className='relative w-full max-w-xs'>
						<label htmlFor='sort' className='block text-m font-medium text-teal-600'>
							Sort by:
						</label>
						<div className='relative'>
							<select
								id='sort'
								name='sort'
								className='mt-1 block w-full pl-3 pr-10 py-2 text-base border border-teal-600 focus:outline-none rounded-md appearance-none'
								onChange={handleSortChange}
							>
								<option value='lowest_price'>Price: Low to High</option>
								<option value='highest_price'>Price: High to Low</option>
								<option value='most_recommended'>Most Recommended</option>
							</select>
							<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-700'>
								<FontAwesomeIcon icon={faChevronDown} size='lg' />
							</div>
						</div>
					</div>
					<div className='relative w-full max-w-xs ml-4'>
						<input
							type='text'
							placeholder='Search...'
							className='mt-1 block w-full pl-3 pr-10 py-2 text-base  placeholder-gray-900 border border-teal-600 focus:outline-none rounded-md appearance-none'
							onChange={handleSearchChange}
						/>
						<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-700'>
							<FontAwesomeIcon icon={faSearch} size='lg' />
						</div>
					</div>
				</div>
			</div>
			{filteredHotels.length > 0 ? (
				filteredHotels.map((hotel: HotelData, index: number) => <Hotel key={index} hotel={hotel} />)
			) : (
				<p className='text-lg text-gray-600 mt-10'>Sorry! No hotels matching your criteria found :( </p>
			)}
		</div>
	)
}

export default Hotels

import { useState } from 'react'
import { hotels } from '../data/hotels'
import Hotel from '../components/Hotel'
import { HotelData } from '../type/type'
import InfoAboutStay from './InfoAboutStay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { sortHotels } from '../helpers/helpers'
import { useBooking } from '../context/BookingContext'

const Hotels = () => {
	const { sortBy, handleSortChange } = useBooking()

	//pagination //
	const [currentPage, setCurrentPage] = useState(1)
	const [hotelsPerPage] = useState(4)
	const [searchQuery, setSearchQuery] = useState('')

	const indexOfLastHotel = currentPage * hotelsPerPage
	const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage
	const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	//search//
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	return (
		<div className='px-4 py-16 container mx-auto mt-auto mb-auto h-full'>
			<InfoAboutStay />
			<div className='flex items-center'>
				<h1 className='text-3xl font-bold mr-4'>Hotels</h1>
				<div className='flex items-end'>
					<div className='relative w-full max-w-xs mx-4'>
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
					<div className='relative w-full max-w-xs mx-4'>
						<input
							type='text'
							placeholder='Search...'
							className='mt-1 block w-full pl-3 pr-10 py-2 text-base border border-teal-600 focus:outline-none rounded-md appearance-none'
							onChange={handleSearchChange}
						/>
						<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-700'>
							<FontAwesomeIcon icon={faSearch} size='lg' />
						</div>
					</div>
				</div>
			</div>
			{sortHotels(currentHotels, sortBy, searchQuery).length > 0 ? (
				sortHotels(currentHotels, sortBy, searchQuery).map((hotel: HotelData, index: number) => (
					<Hotel key={index} hotel={hotel} />
				))
			) : (
				<p className='text-lg text-gray-600 mt-10'>Sorry! No hotels matching your criteria found :( </p>
			)}
			<div className='flex justify-center mt-4'>
				{[...Array(Math.ceil(hotels.length / hotelsPerPage)).keys()].map(number => (
					<button
						key={number}
						onClick={() => paginate(number + 1)}
						className={`mx-1 px-3 py-1 rounded-lg ${
							currentPage === number + 1 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'
						}`}
					>
						{number + 1}
					</button>
				))}
			</div>
		</div>
	)
}

export default Hotels

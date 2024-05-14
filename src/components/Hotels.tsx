/** @format */

import { useState } from 'react'
import { hotels } from '../data/hotels'
import Hotel from '../components/Hotel'
import { HotelData } from '../type/type'
import InfoAboutStay from './InfoAboutStay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Hotels = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [hotelsPerPage] = useState(4)

	const indexOfLastHotel = currentPage * hotelsPerPage
	const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage
	const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	return (
		<div className='px-4 py-16 container mx-auto mt-auto mb-auto h-full'>
			<InfoAboutStay />
			<div className='flex flex-col md:flex-row items-center'>
				<h1 className='text-3xl font-bold my-8 md:mr-4 md:mb-0 order-1 md:order-none'>Hotels</h1>
				<div className='relative w-full max-w-xs mx-0 md:mx-20 md:order-1'>
					<label htmlFor='sort' className='block text-m font-medium text-teal-600'>
						Sort by:
					</label>
					<div className='relative'>
						<select
							id='sort'
							name='sort'
							className='mt-1 block w-full pl-3 pr-10 py-2 text-base border border-teal-600 focus:outline-none rounded-md appearance-none'
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
			</div>
			{currentHotels.map((hotel: HotelData, index: number) => (
				<Hotel key={index} hotel={hotel} />
			))}
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

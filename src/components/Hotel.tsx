import React from 'react'
import { Link } from 'react-router-dom'
import { HotelProps } from '../type'
import withHighlight from '../components/HOC'

const Hotel: React.FC<{ hotel: HotelProps }> = ({ hotel }) => {
	return (
		<div className='py-16 md:flex hotel-container '>
			<div className='md:w-1/3'>
				<img
					src={hotel.src}
					alt={hotel.name}
					className='hotel-img w-full h-auto md:object-cover md:aspect-w-16 md:aspect-h-4 max-h-220 md:mx-4  '
				/>
			</div>
			<div className='md:w-2/3 md:p-4  mt-2 md:mx-4'>
				<h2 className='text-2xl text-teal-600 mb-2 flex items-center  mt-2 md:mt-0'>{hotel.name}</h2>
				<p>
					<strong>Location:</strong> {hotel.city}, {hotel.country}
				</p>
				<p>
					<strong>Price per night:</strong> CHF {hotel.pricePerNight}
				</p>
				<Link to={`/hotel/${hotel.id}`} state={{ hotel }}>
					<button className=' bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 mt-4 rounded mb-4'>
						I want to see this hotel
					</button>
				</Link>
			</div>
		</div>
	)
}

export default withHighlight(Hotel)

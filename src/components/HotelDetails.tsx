/** @format */

import HotelNotFound from './HotelNotFound'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'
import {
	faDog,
	faSwimmingPool,
	faSnowflake,
	faSun,
	faParking,
	faCoffee,
	faSmokingBan,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { hotels } from '../data/hotels'
import { useParams } from 'react-router-dom'
import { HotelData } from '../type'
import BackToAllHotels from './BackToAllHotels'
import Reviews from './Reviews'

const icons: { [key: string]: any } = {
	petFriendly: faDog,
	pool: faSwimmingPool,
	airConditioning: faSnowflake,
	balcony: faSun,
	parking: faParking,
	breakfastIncluded: faCoffee,
	smokingAllowed: faSmokingBan,
	maxCapacity: faUsers,
}

const HotelDetails = () => {
	const { id } = useParams<{ id: string }>()
	const location = useLocation()
	const hotel: HotelData | undefined = location.state?.hotel || hotels.find(hotel => hotel.id === id)

	if (!hotel) return <HotelNotFound />

	return (
		<div className='py-16 container mx-auto mt-auto mb-auto h-full p-4'>
			<div className='flex items-center mb-4'>
				<BackToAllHotels />
			</div>
			<h3 className='text-2xl font-bold text-rgb(12, 148, 136) mb-2'>{hotel.name}</h3>
			<p className='text-gray-600 mb-4'>
				{hotel.city}, {hotel.country}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4  mb-10'>
				<div className='w-full'>
					<img src={hotel.src} alt={hotel.name} className='w-full max-h-400 mb-4' />
					<p className='mb-4'>{hotel.description}</p>
					<h4 className='text-lg font-bold mb-2'>Overview</h4>

					<div className='flex items-start justify-between mb-4 w-1/2'>
						<div>
							<p className='font-bold color-teal-600'>Check-In</p>
							<p>from 16:00 to 21:00</p>
						</div>
						<div>
							<p className='font-bold color-teal-600'>Check-Out</p>
							<p>until 12:00</p>
						</div>
					</div>

					<div className='flex items-start justify-between mb-4 w-1/2'>
						<div>
							<p className='font-bold color-teal-600'>Address</p>
							<p>
								{hotel.city}, {hotel.country}
							</p>
						</div>
					</div>

					<div className='mt-10 mb-10'>
						<h4 className='text-lg font-bold mb-2'> Amenities:</h4>
						<ul className='list-disc flex flex-wrap'>
							{Object.entries(icons).map(([key, icon]) =>
								key === 'maxCapacity' && hotel[key as keyof HotelData] ? (
									<li key={key} className='flex items-center px-0 pr-15'>
										<FontAwesomeIcon icon={icon} className='text-2xl text-teal-500 mr-2' />
										<span className='inline-block'>max number of people: {hotel[key as keyof HotelData]}</span>
									</li>
								) : hotel[key as keyof HotelData] && key !== 'maxCapacity' ? (
									<li key={key} className='flex items-center mb-2 px-0 py-2 pr-3'>
										<FontAwesomeIcon icon={icon} className='text-2xl text-teal-500 mr-2' />
										<span className='inline-block'>
											{key === 'petFriendly'
												? 'pet Friendly'
												: key === 'airConditioning'
												? 'air Conditioning'
												: key === 'breakfastIncluded'
												? 'breakfast Included'
												: key === 'smokingAllowed'
												? 'smoking Allowed'
												: key}
										</span>
									</li>
								) : null
							)}
						</ul>
					</div>
				</div>
				{/* Second column */}
				<div className='w-full'>
					<div className='bg-gray-200 rounded-lg p-4'>
						<h3 className='text-xl font-bold text-(12, 148, 136) mb-2'>Price from:</h3>
						<p className='box-price text-teal-700 text-7xl text-rgb(12, 148, 136) mb-2'>{hotel.pricePerNight} CHF</p>
						<div className='mt-4 border border-black'></div>
						<p className='text-lg font-bold text-rgb(12, 148, 136)'>Includes:</p>
						<ul className='list-disc flex-col flex-wrap'>
							{Object.entries(hotel).map(
								([key, value]) =>
									typeof value === 'boolean' &&
									value && (
										<li key={key} className='flex items-center mb-2 px-0 '>
											<span className='mr-2 text-teal-700'>+</span>
											{key === 'petFriendly'
												? 'pet Friendly'
												: key === 'airConditioning'
												? 'air Conditioning'
												: key === 'breakfastIncluded'
												? 'breakfast Included'
												: key === 'smokingAllowed'
												? 'smoking Allowed'
												: key}
										</li>
									)
							)}
						</ul>
						<div className='mt-4 rounded-lg bg-gray-200'>
							<h4 className='text-lg font-bold text-rgb(12, 148, 136)'>Exclusive:</h4>
							<p className='text-gray-600'>City-Tax (4.65.- per person / Night)</p>
						</div>
						<NavLink to='/booking' state={{ hotel }}>
							<button className=' text-white px-4 py-2 rounded-lg mt-4  bg-teal-600 hover:bg-teal-500 focus:ring-opacity-50'>
								Book Now
							</button>
						</NavLink>
					</div>
				</div>
			</div>

			<Reviews />
		</div>
	)
}

export default HotelDetails

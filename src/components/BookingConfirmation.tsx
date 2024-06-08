import { useLocation } from 'react-router-dom'
import { HotelData } from '../type'

const BookingConfirmation = () => {
	const location = useLocation()

	const { hotel, startDate, endDate, numberOfGuests, totalPrice } = location.state as {
		hotel: HotelData
		startDate: string
		endDate: string
		numberOfGuests: number
		totalPrice: number
	}

	console.log(hotel)
	return (
		<div className='py-16 mt-16 container mx-auto mt-auto mb-auto h-full p-4'>
			<h1 className='text-3xl font-bold mb-8 text-teal-600'>Booking Confirmation</h1>
			<h2 className='text-xl font-semibold mb-4 text-teal-600'>Thank you for your booking!</h2>
			<div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4'>
				<h2 className='text-lg font-semibold mb-2'>Booking Details</h2>
				<div className='flex flex-col md:flex-row'>
					<div className='md:w-1/3'>
						<img src={hotel.src} alt={hotel.name} className='w-full h-auto rounded-lg mb-4 md:mb-0' />
					</div>
					<div className='md:w-2/3 md:pl-4'>
						<p className='mb-2'>
							<strong>Hotel:</strong> {hotel.name}
						</p>
						<p className='mb-2'>
							<strong>Location:</strong> {hotel.city}, {hotel.country}
						</p>
						<p className='mb-2'>
							<strong>Check-in:</strong> {startDate}
						</p>
						<p className='mb-2'>
							<strong>Check-out:</strong> {endDate}
						</p>
						<p className='mb-2'>
							<strong>Guests:</strong> {numberOfGuests}
						</p>
						<p className='mb-2'>
							<strong>Total Price:</strong> {totalPrice} CHF
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingConfirmation

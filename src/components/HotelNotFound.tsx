/** @format */

import BackToAllHotels from './BackToAllHotels'

const HotelNotFound = () => {
	return (
		<div className='py-16 container mx-auto mt-auto mb-auto h-full p-4 flex flex-col items-center justify-center'>
			<div className='text-center mb-8'>
				<p className='text-3xl font-bold text-gray-800'>Hotel not found</p>
				<p className='text-lg text-gray-600 mt-2'>Sorry! We couldn't find the hotel you were looking for.</p>
			</div>
			<BackToAllHotels />
		</div>
	)
}

export default HotelNotFound

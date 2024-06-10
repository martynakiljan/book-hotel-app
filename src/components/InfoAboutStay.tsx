/** @format */

import { useBooking } from '../context/BookingContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const InfoAboutStay = () => {
	const { startDate, endDate } = useBooking()

	if (!startDate || !endDate) {
		return null
	}

	return (
		<div className='bg-gray-100 p-4 rounded-lg shadow-md mb-5'>
			<p className='text-gray-800 mb-5'>
				You selected date: <strong>{startDate}</strong> to <strong>{endDate}</strong>
			</p>
			<Link
				to='/'
				className='display-block items-center text-white py-2 px-4 rounded-lg bg-teal-600 hover:bg-teal-500   mt-5'
			>
				<FontAwesomeIcon icon={faArrowLeft} className='text-lg mr-2 ' />
				Edit your date
			</Link>
		</div>
	)
}

export default InfoAboutStay

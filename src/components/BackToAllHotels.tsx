/** @format */

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackToAllHotels = () => {
	return (
		<Link to='/hotels' className='flex items-center text-white p  bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg'>
			<FontAwesomeIcon icon={faArrowLeft} className='text-lg mr-2' />
			Back to All Hotels
		</Link>
	)
}

export default BackToAllHotels

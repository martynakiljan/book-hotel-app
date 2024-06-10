/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Highlight = ({ children }: any) => {
	return (
		<div className='bg-yellow-100 relative text-gray-800  mt-2  mb-5md:mb-0 hotel-container '>
			<div className='flex items-center justify-end py-2 absolute top-0 right-2'>
				<FontAwesomeIcon icon={faStar} className='text-yellow-600 mr-2 text-3xl' />
				<span className='text-lg font-bold'>Highly Recommended!</span>
			</div>
			{children}
		</div>
	)
}

export default Highlight

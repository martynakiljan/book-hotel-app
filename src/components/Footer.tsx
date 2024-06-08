/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
const Footer = () => {
	return (
		<div className='bg-teal-600 text-gray-100 py-16 px-4'>
			<div className='flex flex-col md:flex-row gap-4 container mx-auto pt-6 pb-6'>
				<div className='text-3xl flex-shrink-0 mr-20'>
					<FontAwesomeIcon icon={faSuitcaseRolling} className='text-3xl mr-2' />
					<span className='text-gray-100 font-normal leading-4 text-xl'>BookHotel App</span>
					<div className='my-5'>
						<a href='#' className='mr-4'>
							<FontAwesomeIcon icon={faInstagram} className='text-2xl text-teal-300' />
						</a>
						<a href='#' className='mr-4'>
							<FontAwesomeIcon icon={faFacebook} className='text-2xl text-teal-300' />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faYoutube} className='text-2xl text-teal-300' />
						</a>
					</div>
					<div className='footer container mx-auto my-5 text-sm'>
						<NavLink to='/contact' className='text-teal-300 mr-4'>
							Contact
						</NavLink>
						<NavLink to='/vouchers' className='text-teal-300 mr-4'>
							Vouchers
						</NavLink>
						<NavLink to='/imprint' className='text-teal-300'>
							Imprint
						</NavLink>
					</div>
					<span className='text-gray-100 font-normal text-sm'>© 2024 BookHotel</span>
				</div>

				<div className='text-xl flex-grow'>
					<p className='text-gray-100 text-2xl pb-4'>Looking for a little adventure?</p>
					<p className='font-light text-sm'>
						Here you will find various unique accommodations for a real experience in Swiss nature.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer

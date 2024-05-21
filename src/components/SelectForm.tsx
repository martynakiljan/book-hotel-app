/** @format */

import React from 'react'
import '../styles/all.scss'
import { useBooking } from '../context/BookingContext'

const CheckboxContainer: React.FC = () => {
	const { handleCheckboxChange, selectedOptions } = useBooking()

	return (
		<div className='mt-8 text-white'>
			<form>
				<div className='flex flex-wrap items-center justify-center mb-4'>
					<label htmlFor='pool' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='pool'
								name='pool'
								value='pool'
								checked={selectedOptions.pool}
								onChange={handleCheckboxChange}
							/>
						</span>
						<span className='ml-2'>Pool</span>
					</label>

					<label htmlFor='airConditioning' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='airConditioning'
								name='airConditioning'
								value='airConditioning'
								checked={selectedOptions.airConditioning}
								onChange={handleCheckboxChange}
							/>
						</span>
						<span className='ml-2'>Air Conditioning</span>
					</label>

					<label htmlFor='breakfastIncluded' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='breakfastIncluded'
								name='breakfastIncluded'
								value='breakfastIncluded'
								checked={selectedOptions.breakfastIncluded}
								onChange={handleCheckboxChange}
							/>
						</span>
						<span className='ml-2'>Breakfast Included</span>
					</label>

					<label htmlFor='balcony' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='balcony'
								name='balcony'
								value='balcony'
								checked={selectedOptions.balcony}
								onChange={handleCheckboxChange}
							/>
						</span>
						<span className='ml-2'>Balcony</span>
					</label>
					<label htmlFor='petFriendly' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='petFriendly'
								name='petFriendly'
								value='petFriendly'
								checked={selectedOptions.petFriendly}
								onChange={handleCheckboxChange}
							/>
						</span>
						<span className='ml-2'>Pet Friendly</span>
					</label>
				</div>
			</form>
		</div>
	)
}

export default CheckboxContainer

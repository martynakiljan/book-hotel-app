/** @format */

import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import '../styles/all.scss'
import { sortOptions } from '../type/type'

const CheckboxContainer: React.FC = () => {
	const [selectedOptions, setSelectedOptions] = useState<sortOptions>({
		pool: false,
		airConditioning: false,
		breakfastIncluded: false,
		balcony: false,
		freeCancellation: false,
		childrenFriendly: false,
		petFriendly: false,
	})

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target
		setSelectedOptions(prevState => ({ ...prevState, [name]: checked }))
	}

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

					<label htmlFor='freeCancellation' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='freeCancellation'
								name='freeCancellation'
								value='freeCancellation'
								checked={selectedOptions.freeCancellation}
								onChange={handleCheckboxChange}
							/>
						</span>
						<span className='ml-2'>Free Cancellation</span>
					</label>

					<label htmlFor='childrenFriendly' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='childrenFriendly'
								name='childrenFriendly'
								value='childrenFriendly'
								checked={selectedOptions.childrenFriendly}
								onChange={e => handleCheckboxChange(e, setSelectedOptions, selectedOptions)}
							/>
						</span>
						<span className='ml-2'>Children Friendly</span>
					</label>

					<label htmlFor='petFriendly' className='checkbox-label'>
						<span className='custom-checkbox'>
							<input
								type='checkbox'
								id='petFriendly'
								name='petFriendly'
								value='petFriendly'
								checked={selectedOptions.petFriendly}
								onChange={e => handleCheckboxChange(e, setSelectedOptions, selectedOptions)}
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

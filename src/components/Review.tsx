/** @format */

import React from 'react'
import { ReviewProps } from '../type'

const Review: React.FC<ReviewProps> = ({ name, review, src, stars }) => {
	return (
		<div className='flex items-center border-b border-dotted border-gray-400 py-4'>
			<img src={src} alt={name} className='w-16 h-16 rounded-full mr-4' />
			<div className='content'>
				<div className='name font-bold '>{name}</div>
				<div className='stars text-teal-600 '>({stars} / 5.0)</div>
				<div className='review-text'>{review}</div>
			</div>
		</div>
	)
}

export default Review

/** @format */
import { useState } from 'react'
import '../styles/all.scss'
import DateForm from './DateForm'

const Home = () => {
	return (
		<div className=''>
			<div className='bg-no-repeat bg-center header-img'></div>
			<div className='header-img__mask'></div>
			<div className='booking__form '>
				<DateForm showButton={true} />
			</div>
		</div>
	)
}

export default Home

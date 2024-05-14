/** @format */
import { useForm } from 'react-hook-form'
import '../styles/all.scss'
import { useEffect, useState } from 'react'

const Newsletter = () => {
	const [formCorrect, setFormCorrect] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = () => {
		setFormCorrect(true)
		reset()
	}

	useEffect(() => {
		if (formCorrect) {
			const timer = setTimeout(() => {
				setFormCorrect(false)
			}, 2000)
			return () => clearTimeout(timer)
		}
	}, [formCorrect])

	return (
		<div className='bg-gray-100 py-16 px-4 md:px-0'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-2xl font-regular text-gray-800 mb-4'>Subscribe to our Newsletter</h2>
				<p className='text-gray-600 mb-6'>Stay up-to-date with the latest news and updates.</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col md:flex-row items-center justify-center max-w-lg mx-auto'
				>
					<input
						{...register('email', {
							required: true,
							pattern: /^\S+@\S+$/i,
						})}
						type='email'
						id='email'
						placeholder='Your email address'
						className='bg-white focus:outline-none border border-gray-300 rounded-md py-2 px-4 mb-2 md:mb-0 mr-0 md:mr-2 w-full md:w-auto'
					/>

					<button className='bg-teal-600 text-white  py-2 px-4 rounded-md transition duration-300' type='submit'>
						Subscribe
					</button>
				</form>
				{errors.email && <p className='text-red-500 py-2'>Please enter a valid email address.</p>}
				{formCorrect ? (
					<p className='text-teal-600 py-2'>Thank you! you have successfully subscribed to the newsletter.</p>
				) : null}
			</div>
		</div>
	)
}

export default Newsletter

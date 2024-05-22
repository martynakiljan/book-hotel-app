/** @format */


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import Form  from './Form'

const Contact = () => {
	const [showMessage, setShowMessage] = useState(false)

	const onSubmit = () => {
		setShowMessage(true)
	}

	useEffect(() => {
		if (showMessage) {
			const timer = setTimeout(() => {
				setShowMessage(false)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [showMessage])

	return (
		<div className='py-16 px-4 container mx-auto mt-auto mb-auto h-full'>
			<h3 className='text-3xl font-bold dark:text-white my-8 '>Contact us</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-4'>
				<div>
				<Form onSubmit={onSubmit} showMessage={showMessage} showPhoneInput={false}/>
				</div>
				<div>
					<h2 className='text-xl font-bold mb-4'>Social Media</h2>
					<div className='flex items-center space-x-4'>
						<FontAwesomeIcon icon={faFacebook} className='text-blue-600 text-3xl' />
						<FontAwesomeIcon icon={faTwitter} className='text-blue-400 text-3xl' />
						<FontAwesomeIcon icon={faInstagram} className='text-pink-600 text-3xl' />
					</div>
					<p className='mt-4 text-gray-700'>
						Need help? Contact us! Use the form on the left or feel free to reach out via social media.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Contact

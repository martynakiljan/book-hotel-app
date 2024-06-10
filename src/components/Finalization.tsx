import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'
import { useForm } from 'react-hook-form'

type FormInputs = {
	firstName: string
	lastName: string
	email: string
	phone: string
	message: string
}

const Finalization = () => {
	const location = useLocation()
	const { voucherValue, quantity, totalPrice } = location.state || { voucherValue: '', quantity: 0, totalPrice: 0 }
	const [showMessage, setShowMessage] = useState<boolean>(false)

	const onSubmit = () => {
		setShowMessage(true)
	}

	useEffect(() => {
		if (showMessage) {
			const timer = setTimeout(() => {
				setShowMessage(false)
			}, 2000)
			return () => clearTimeout(timer)
		}
	}, [showMessage])

	return (
		<div className='py-8 container mx-auto mt-auto mb-auto p-4 flex flex-col md:flex-row'>
			<div className='w-full md:w-3/5 pr-4 md:pr-8 mb-8 md:mb-0'>
				<h1 className='text-3xl font-bold mb-8 text-teal-600'>Finalize payment!</h1>

				<Form onSubmit={onSubmit} showMessage={showMessage} showPhoneInput={false} showButton={true} />
				<div className='mb-4 mt-4'>
					<label htmlFor='newsletter' className='inline-flex items-center'>
						<input type='checkbox' id='newsletter' className='mr-2 checked:bg-green-900' />
						Subscribe to newsletter
					</label>
				</div>
			</div>
			<div className='w-full md:w-2/5'>
				<div className='mr-4 md:mr-8'>
					<div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4'>
						<h2 className='text-lg font-semibold mb-2'>Details: </h2>
						<p>
							Voucher {quantity} x {voucherValue} CHF
						</p>
					</div>
					<div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4'>
						<div className='flex items-center mb-2'>
							<FontAwesomeIcon icon={faLock} className='w-6 h-6 mr-2 text-teal-600' />
							<h2 className='text-lg font-semibold text-teal-600'>Your payment is secure</h2>
						</div>
						<p className='text-gray-600'>Your payment is 100% secure using SSL encryption.</p>
					</div>
					<div className='bg-teal-600 border border-gray-300 rounded-lg shadow-md p-4'>
						<div className='flex items-center mb-2'>
							<FontAwesomeIcon icon={faBasketShopping} className='w-6 h-6 mr-2 text-white' />
							<h2 className='text-lg font-semibold text-white'>TOTAL PRICE: {totalPrice} CHF</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Finalization

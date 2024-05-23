/** @format */

import '../styles/all.scss'
import { useBooking } from '../context/BookingContext'
import SelectForm from './SelectForm'

interface DateFormProps {
	showButton?: boolean
	changeStyling?: boolean
}

const DateForm: React.FC<DateFormProps> = ({ showButton, changeStyling }) => {
	const {
		handleSubmit,
		startDate,
		endDate,
		handleStartDateChange,
		handleEndDateChange,
		handleNumberOfGuest,
		isSubmitDisabled,
		error,
	} = useBooking()

	console.log(showButton)

	return (
		<>
			<div className={`p-8 rounded-lg ${changeStyling ? 'bg-transparent p-0 pt-4' : 'bg-gray-100 shadow-lg'}`}>
				{' '}
				{showButton && <h2 className='text-teal-600 text-2xl font-semibold mb-4'>Book Your Stay</h2>}
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col md:flex-row mb-4 h-full'>
						<div className='flex items-center mr-4 h-full'>
							<label htmlFor='startDate' className='block text-sm font-medium text-gray-700 mr-2'>
								Start Date
							</label>
							<input
								type='date'
								id='startDate'
								name='startDate'
								value={startDate}
								onChange={handleStartDateChange}
								className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500'
							/>
						</div>

						<div className='flex items-center mr-4'>
							<label htmlFor='endDate' className='block text-sm font-medium text-gray-700 mr-2'>
								End Date
							</label>
							<input
								type='date'
								id='endDate'
								name='endDate'
								value={endDate}
								onChange={handleEndDateChange}
								className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500'
							/>
						</div>

						<div className='flex items-center'>
							<label htmlFor='guests' className='block text-sm font-medium text-gray-700 mr-2'>
								Number of Guests
							</label>
							<input
								pattern='[0-9]*'
								inputMode='numeric'
								id='guests'
								name='guests'
								type='number'
								className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 '
								style={{ maxWidth: '50px', flexShrink: 0 }}
								onChange={handleNumberOfGuest}
							/>
						</div>
					</div>
					{error && <p className='text-red-500 mb-4 text-xs'>{error}</p>}
					{showButton && (
						<button
							type='submit'
							disabled={isSubmitDisabled}
							className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                            ${
															isSubmitDisabled
																? 'bg-gray-400 text-gray-700 cursor-not-allowed'
																: 'bg-teal-600 text-white hover:bg-teal-700'
														}
                            ${showButton ? 'hidden' : ''}`}
						>
							Submit
						</button>
					)}
				</form>
			</div>
			<SelectForm />
		</>
	)
}

export default DateForm

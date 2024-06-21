import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type FormInputs = {
	firstName: string
	lastName: string
	email: string
	phone: string
	message: string
}

interface FormProps {
	onSubmit: () => void
	showMessage: boolean
	showPhoneInput: boolean
	showButton: boolean
}

const Form: React.FC<FormProps> = ({ onSubmit, showMessage, showPhoneInput, showButton }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>()

	useEffect(() => {
		if (showMessage) {
			reset()
		}
	}, [showMessage, reset])

	return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700">
          First Name
        </label>
        <input
          {...register("firstName", { required: true, minLength: 3 })}
          type="text"
          id="firstName"
          className="border border-gray-300 rounded-md px-3 py-2 w-full  mb-1"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs">
            First name is required and must be at least 3 characters long.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700">
          Last Name
        </label>
        <input
          {...register("lastName", { required: true, minLength: 3 })}
          type="text"
          id="lastName"
          className="border border-gray-300 rounded-md px-3 py-2 w-full  mb-1"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">
            Last name is required and must be at least 3 characters long.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          type="email"
          id="email"
          className="border border-gray-300 rounded-md px-3 py-2 w-full  mb-1"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">
            Please enter a valid email address.
          </p>
        )}
      </div>
      {showPhoneInput && (
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            {...register("phone", {
              required: true,
              pattern: {
                value:
                  /^\+?\d{1,4}[-\s]?(?:\d{3}[-\s]?\d{3}[-\s]?\d{3}|\d{9})$/,
                message:
                  "Please enter a valid phone number with optional country code",
              },
            })}
            type="tel"
            id="phone"
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">
              Please enter a valid phone number.
            </p>
          )}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message
        </label>
        <textarea
          {...register("message", { required: true, minLength: 10 })}
          id="message"
          className="border border-gray-300 rounded-md px-3 py-2 w-full  mb-1"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">
            Message must be at least 10 characters long.
          </p>
        )}
      </div>
      {showButton && (
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 mx-auto flex-shrink-0 ml-0 mr-auto "
        >
          Send
        </button>
      )}
      {showMessage ? <p className="text-teal-600 py-2">Thank you!</p> : null}
    </form>
  );
}

export default Form

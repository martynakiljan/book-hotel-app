/** @format */

import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="py-16 px-4 container mx-auto mt-auto mb-auto h-full">
      <h3 className="text-3xl font-bold dark:text-white my-8 ">Contact us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name
              </label>
              <input
                {...register("firstName", { required: true, minLength: 3 })}
                type="text"
                id="firstName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.firstName && (
                <p className="text-red-500">
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
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.lastName && (
                <p className="text-red-500">
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
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: true, minLength: 10 })}
                id="message"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">
                  Message must be at least 10 characters long.
                </p>
              )}
            </div>
            <button
              style={{
                backgroundColor: "rgb(12, 148, 136)",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-600 text-3xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-blue-400 text-3xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-600 text-3xl"
            />
          </div>
          <p className="mt-4 text-gray-700">
            Need help? Contact us! Use the form on the left or feel free to
            reach out via social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

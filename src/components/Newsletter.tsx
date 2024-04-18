/** @format */

import "../styles/all.scss";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-regular text-gray-800 mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Stay up-to-date with the latest news and updates.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-white focus:outline-none border border-gray-300 rounded-md py-2 px-4 mb-2 md:mb-0 mr-0 md:mr-2 w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white  py-2 px-4 rounded-md transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

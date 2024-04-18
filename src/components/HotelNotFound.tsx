/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HotelNotFound = () => {
  return (
    <div className="py-16 mt-16 container mx-auto mt-auto mb-auto h-full p-4 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-gray-800">Hotel not found</p>
        <p className="text-lg text-gray-600 mt-2">
          We couldn't find the hotel you were looking for.
        </p>
      </div>
      <Link
        to="/hotels"
        className="flex items-center text-rgb(12, 148, 136) hover:underline"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg mr-2" />
        Back to All Hotels
      </Link>
    </div>
  );
};

export default HotelNotFound;

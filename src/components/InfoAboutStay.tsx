/** @format */

import { useBooking } from "../context/BookingContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InfoAboutStay = () => {
  const { startDate, endDate } = useBooking();

  if (!startDate || !endDate) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="text-gray-800 mt-10">
        You selected: <strong>{startDate}</strong> to <strong>{endDate}</strong>
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "rgb(12, 148, 136)",
          padding: "8px 16px",
          borderRadius: "8px",
          display: "inline-block",
          marginTop: "20px",
        }}
        className="flex items-center text-white py-2 px-4 rounded-lg"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg mr-2" />
        Edit your date
      </Link>
    </div>
  );
};

export default InfoAboutStay;

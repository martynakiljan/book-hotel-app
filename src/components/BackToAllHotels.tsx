/** @format */

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToAllHotels = () => {
  return (
    <Link
      to="/hotels"
      style={{
        backgroundColor: "rgb(12, 148, 136)",
        padding: "8px 16px",
        borderRadius: "8px",
      }}
      className="flex items-center text-white py-2 px-4 rounded-lg"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-lg mr-2" />
      Back to All Hotels
    </Link>
  );
};

export default BackToAllHotels;

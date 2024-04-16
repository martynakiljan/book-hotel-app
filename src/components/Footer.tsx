import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-teal-600 text-gray-100 p-4">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto pt-6 pb-6">
        <div className="text-3xl">
          <FontAwesomeIcon icon={faSuitcaseRolling} className="text-3xl" />
          <span className="text-gray-100 font-normal leading-4 text-xl">
            {" "}
            BookHotel App
          </span>
        </div>

        <div className="text-xl">
          <p className="text-gray-100 text-2xl pb-4">
            Are you looking for a little adventure?
          </p>
          <p className="font-normal font-light text-sm">
            Here you will find various extraordinary accommodations for a real
            experience in Swiss nature.
          </p>
        </div>

        <div className="flex justify-center">
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="container mx-auto pt-5">
        <a href="#" className="text-gray-100 hover:text-gray-200 mr-4">
          Contact
        </a>
        <a href="#" className="text-gray-100 hover:text-gray-200 mr-4">
          Vouchers
        </a>
        <a href="#" className="text-gray-100 hover:text-gray-200">
          Impressum
        </a>
      </div>
    </div>
  );
};

export default Footer;

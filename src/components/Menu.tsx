import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <nav className="nav bg-slate-100 p-4">
      <div className="container mx-auto mt-auto mb-auto h-full">
        <div className="flex justify-between items-center">
          <div className="text-gray-800 font-bold text-xl">
            <FontAwesomeIcon icon={faSuitcaseRolling} />
            <span className="text-teal-600 font-normal leading-4">
              {" "}
              BookHotel App
            </span>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800  hover:text-teal-600">
              Hotels
            </a>

            <a href="#" className="text-gray-800  hover:text-teal-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-teal-600">
              Vouchers
            </a>
            <a href="#" className="text-gray-800 hover:text-teal-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="nav bg-slate-100 p-4">
      <div className="container mx-auto mt-auto mb-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="text-gray-800 font-bold text-xl">
            <NavLink to="/" className="text-teal-600">
              <FontAwesomeIcon icon={faSuitcaseRolling} />
              <span className="font-normal leading-4"> BookHotel App</span>
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-gray-800 hover:text-teal-600">
              Home
            </NavLink>
            <NavLink to="/hotels" className="text-gray-800 hover:text-teal-600">
              Hotels
            </NavLink>

            <NavLink to="/about" className="text-gray-800 hover:text-teal-600">
              About
            </NavLink>
            <NavLink
              to="/vouchers"
              className="text-gray-800 hover:text-teal-600"
            >
              Vouchers
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-800 hover:text-teal-600"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

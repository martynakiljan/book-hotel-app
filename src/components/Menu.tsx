/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav bg-slate-100">
      <div className="container mx-auto mt-auto mb-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="text-gray-800 font-bold text-xl">
            <NavLink to="/" className="text-teal-600">
              <FontAwesomeIcon icon={faSuitcaseRolling} />
              <span className="font-normal leading-4"> BookHotel App</span>
            </NavLink>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              onClick={toggleMenu}
              className="text-gray-800 text-xl cursor-pointer"
            />
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50">
              <div className="flex flex-col h-full justify-center items-center">
                <NavLink
                  to="/"
                  className="text-gray-800 hover:text-teal-600 py-2 px-4 block"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/hotels"
                  className="text-gray-800 hover:text-teal-600 py-2 px-4 block"
                  onClick={toggleMenu}
                >
                  Hotels
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-800 hover:text-teal-600 py-2 px-4 block"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
                <NavLink
                  to="/vouchers"
                  className="text-gray-800 hover:text-teal-600 py-2 px-4 block"
                  onClick={toggleMenu}
                >
                  Vouchers
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-800 hover:text-teal-600 py-2 px-4 block"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
                {/* Cross Icon to Close Menu */}
                <div
                  onClick={toggleMenu}
                  className="absolute top-0 right-0 m-4 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-gray-800 text-xl"
                  />
                </div>
              </div>
            </div>
          )}
          {/* End Mobile Menu */}

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-4">
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
          {/* End Desktop Menu */}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

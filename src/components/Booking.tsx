/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Booking = () => {
  return (
    <div className="py-8 mt-8 container mx-auto mt-auto mb-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-3/5 pr-4 md:pr-8 mb-8 md:mb-0">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "rgb(12, 148, 136)" }}
        >
          Finalize your booking!
        </h1>
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: "rgb(12, 148, 136)" }}
        >
          Reservation Details
        </h2>
        <div className="mb-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="check-in" className="block mb-1">
              Check-in Date
            </label>
            <input
              type="date"
              id="check-in"
              className="border border-gray-400 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label htmlFor="check-out" className="block mb-1">
              Check-out Date
            </label>
            <input
              type="date"
              id="check-out"
              className="border border-gray-400 rounded px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="guests" className="mr-2">
            Number of guests:
          </label>
          <button className="bg-gray-300 rounded px-4 py-2 mr-2">-</button>
          <span className="border border-gray-400 rounded px-4 py-2">2</span>
          <button className="bg-gray-300 rounded px-4 py-2 ml-2">+</button>
        </div>
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: "rgb(12, 148, 136)" }}
        >
          Guest Details
        </h2>
        <div className="mb-4">
          <label htmlFor="first-name" className="block mb-1">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newsletter" className="inline-flex items-center">
            <input type="checkbox" id="newsletter" className="mr-2" />
            Subscribe to newsletter
          </label>
        </div>
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: "rgb(12, 148, 136)" }}
        >
          Special Requests
        </h2>
        <div className="mb-4">
          <textarea
            id="special-requests"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          ></textarea>
        </div>
        <button
          style={{
            backgroundColor: "rgb(12, 148, 136)",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          <NavLink to="/booking-confirmation" className="">
            Book now!
          </NavLink>
        </button>
      </div>
      <div className="w-full md:w-2/5">
        <div className="mr-4 md:mr-8">
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">Price Details</h2>
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-teal-600 font-bold">From $200/night</p>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faLock}
                className="w-6 h-6 mr-2 text-teal-600"
              />
              <h2 className="text-lg font-semibold text-teal-600">
                Your payment is secure
              </h2>
            </div>
            <p className="text-gray-600">
              Your payment is 100% secure using SSL encryption.
            </p>
          </div>
          <div className="bg-teal-600 border border-gray-300 rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="w-6 h-6 mr-2 text-white"
              />
              <h2 className="text-lg font-semibold text-white">TOTAL PRICE</h2>
            </div>
            <p className="text-gray-100">CHF 500</p>
            <p className="text-xs text-gray-100 mt-1">
              (+ City-Tax (4.65.- per person / Night))
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

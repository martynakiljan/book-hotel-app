/** @format */

import React, { useState } from "react";
import { hotels } from "../data/hotels";
import Hotel from "../components/Hotel";
import { HotelData } from "../type/type";
import InfoAboutStay from "./InfoAboutStay";
import { BookingProvider } from "../context/BookingContext";

const Hotels = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(4);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 py-16 container mx-auto mt-auto mb-auto h-full">
      <InfoAboutStay />
      <h1 className="text-3xl font-bold my-8 ">Hotels</h1>
      {currentHotels.map((hotel: HotelData, index: number) => (
        <Hotel key={index} hotel={hotel} />
      ))}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(hotels.length / hotelsPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === number + 1
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Hotels;

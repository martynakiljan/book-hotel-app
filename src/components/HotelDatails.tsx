/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faSwimmingPool,
  faSnowflake,
  faSun,
  faParking,
  faCoffee,
  faSmokingBan,
} from "@fortawesome/free-solid-svg-icons";
import { hotels } from "../data/hotels";
import { useParams } from "react-router-dom";
import { HotelData } from "../type/type";

// Icon definitions
const icons: { [key: string]: any } = {
  petFriendly: faDog,
  pool: faSwimmingPool,
  airConditioning: faSnowflake,
  balcony: faSun,
  parking: faParking,
  breakfastIncluded: faCoffee,
  smokingAllowed: faSmokingBan,
};

const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const hotel: HotelData | undefined = hotels.find((h) => h.id === id);

  if (!hotel) return <div>Hotel not found</div>;

  return (
    <div className="py-16 mt-16 container mx-auto mt-auto mb-auto h-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pierwsza kolumna */}
        <div className="w-full md:w-7/12">
          <img src={hotel.src} alt={hotel.name} className="w-full mb-4" />
          <h3 className="text-xl font-bold text-green-700 mb-2">
            {hotel.name}
          </h3>
          <p className="text-gray-600 mb-4">
            Location: {hotel.city}, {hotel.country}
          </p>
          <p className="mb-4">{hotel.description}</p>
          <h4 className="text-lg font-bold mb-2">Overview</h4>
          <ul className="list-disc pl-5 grid grid-cols-3">
            {Object.entries(icons).map(
              ([key, icon]) =>
                hotel[key as keyof HotelData] && (
                  <li key={key} className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-2xl text-green-700 mr-2"
                    />
                    {key}
                  </li>
                )
            )}
          </ul>
        </div>
        {/* Druga kolumna (opcjonalnie) */}
        <div className="w-full md:w-5/12">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Price: ${hotel.pricePerNight}
            </h3>
            <p className="mb-2">Includes:</p>
            <ul className="list-disc pl-5">
              {Object.entries(hotel).map(
                ([key, value]) =>
                  typeof value === "boolean" &&
                  value && (
                    <li key={key} className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={icons[key as keyof HotelData]}
                        className="text-green-700 mr-2"
                      />
                      {key}
                    </li>
                  )
              )}
            </ul>
            <button className="bg-green-700 text-white px-4 py-2 mt-4 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;

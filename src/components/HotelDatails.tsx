/** @format */

import React from "react";
import HotelNotFound from "./HotelNotFound";
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
import { useParams} from "react-router-dom";
import { HotelData } from "../type/type";
import BackToAllHotels from "./BackToAllHotels";

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

  if (!hotel) return <HotelNotFound />;

  return (
    <div className="py-16 mt-16 container mx-auto mt-auto mb-auto h-full p-4">
      <div className="flex items-center mb-4">
        <BackToAllHotels />
      </div>
      <h3 className="text-2xl font-bold text-rgb(12, 148, 136) mb-2">
        {hotel.name}
      </h3>
      <p className="text-gray-600 mb-4">
        {hotel.city}, {hotel.country}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First column */}
        <div className="w-full">
          <img
            src={hotel.src}
            alt={hotel.name}
            className="w-full max-h-400 mb-4"
          />
          <p className="mb-4">{hotel.description}</p>
          <h4 className="text-lg font-bold mb-2">Overview</h4>

          <div className="flex items-start justify-between mb-4">
            <div>
              <p style={{ color: "rgb(12, 148, 136)" }} className="font-bold">
                Check-In
              </p>
              <p>from 16:00 to 21:00</p>
            </div>
            <div>
              <p style={{ color: "rgb(12, 148, 136)" }} className="font-bold">
                Check-Out
              </p>
              <p>until 12:00</p>
            </div>
          </div>
          <ul className="list-disc flex flex-wrap">
            {Object.entries(icons).map(
              ([key, icon]) =>
                hotel[key as keyof HotelData] && (
                  <li
                    key={key}
                    className="flex items-center mb-2 px-0 py-2"
                    style={{ paddingRight: "15px" }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-2xl text-rgb(12, 148, 136) mr-2"
                    />
                    {key}
                  </li>
                )
            )}
          </ul>
        </div>
        {/* Second column */}
        <div className="w-full">
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold text-rgb(12, 148, 136) mb-2">
              Price from:
            </h3>
            <p className="text-7xl text-rgb(12, 148, 136) mb-2">
              {hotel.pricePerNight} CHF
            </p>
            <div className="mt-4 border border-black"></div>
            <p className="text-lg font-bold text-rgb(12, 148, 136)">
              Includes:
            </p>
            <ul className="list-disc flex-col flex-wrap">
              {Object.entries(hotel).map(
                ([key, value]) =>
                  typeof value === "boolean" &&
                  value && (
                    <li key={key} className="flex items-center mb-2 px-0 py-2">
                      <span
                        style={{ color: "rgb(12, 148, 136)" }}
                        className="mr-2"
                      >
                        +
                      </span>
                      {key}
                    </li>
                  )
              )}
            </ul>
            <div className="mt-4 rounded-lg bg-gray-200">
              <h4 className="text-lg font-bold text-rgb(12, 148, 136)">
                Exclusive:
              </h4>
              <p className="text-gray-600">
                City-Tax (4.65.- per person / Night)
              </p>
            </div>
            <button
              style={{
                backgroundColor: "rgb(12, 148, 136)",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
              className="text-white px-4 py-2 mt-4 rounded bg-teal-500"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;

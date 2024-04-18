/** @format */

import React from "react";
import { hotels } from "../data/hotels";
import Hotel from "../components/Hotel";
import { HotelData } from "../type/type";

const Hotels = () => {
  return (
    <div className="px-4 py-16 container mx-auto mt-auto mb-auto h-full">
      <h1 className="text-3xl font-bold my-8 ">Hotels</h1>
      {hotels.map((hotel: HotelData, index: number) => (
        <Hotel key={index} hotel={hotel} />
      ))}
    </div>
  );
};

export default Hotels;

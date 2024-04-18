/** @format */

import React from "react";

interface HotelProps {
  name: string;
  city: string;
  country: string;
  pricePerNight: number;
  src: string;
}

const Hotel: React.FC<{ hotel: HotelProps }> = ({ hotel }) => {
  return (
    <div className="my-8">
      <h2>{hotel.name}</h2>
      <img
        src={hotel.src}
        alt={hotel.name}
        className="my-4"
        style={{ maxWidth: "100%" }}
      />
      <p>
        <strong>Location:</strong> {hotel.city}, {hotel.country}
      </p>
      <p>
        <strong>Price per night:</strong> ${hotel.pricePerNight}
      </p>
    </div>
  );
};

export default Hotel;

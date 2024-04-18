/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Hotels from "./Hotels";
import About from "./About";
import Home from "./Home";
import Vouchers from "./Vouchers";
import Contact from "./Contact";
import HotelDetails from "./HotelDatails";
const Sections = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/vouchers" element={<Vouchers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Sections;

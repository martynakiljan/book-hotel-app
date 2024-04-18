/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hotels from "./Hotels";
import About from "./About";
import Home from "./Home";
import Vouchers from "./Vouchers";
import Contact from "./Contact";

const Sections = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/about" element={<About />} />
      <Route path="/vouchers" element={<Vouchers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Sections;

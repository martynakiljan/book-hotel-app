/** @format */

import { Routes, Route } from "react-router-dom";
import Hotels from "./Hotels";
import About from "./About";
import Home from "./Home";
import Vouchers from "./Vouchers";
import Contact from "./Contact";
import HotelDetails from "./HotelDetails";
import Imprint from "./Imprint";
import Booking from "./Booking";
import BookingConfirmation from "./BookingConfirmation";
import Finalization from "./Finalization";
import ScrollToTop from "./ScrollToTop";

const Sections = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/book-hotel-app" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/finalization" element={<Finalization />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </>
  );
};

export default Sections;

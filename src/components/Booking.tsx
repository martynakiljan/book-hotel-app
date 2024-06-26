import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HotelData } from "../type";
import { useBooking } from "../context/BookingContext";
import FormBooking from "./FormBooking";
import DateFormBooking from "./DateFormBooking";

const Booking = () => {
  const { numberOfDays, numberOfGuests, startDate, endDate, isValidFormDate } =
    useBooking();
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isFormBookingValid, setIsFormBookingValid] = useState<boolean>(false);
  const location = useLocation();
  const hotel: HotelData | undefined = location.state?.hotel;

  const onSubmit = () => {
    setShowMessage(true);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // total price //
  const tax = 4.65;
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (
      hotel &&
      numberOfDays &&
      typeof numberOfGuests === "number" &&
      !isNaN(numberOfGuests)
    ) {
      const price = hotel.pricePerNight * numberOfDays * numberOfGuests;
      const taxAmount = numberOfGuests * tax * numberOfDays;
      setTotalPrice(price + taxAmount);
    }
  }, [hotel, numberOfDays, numberOfGuests, tax]);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);


  const canBook = isValidFormDate && isFormBookingValid;

  return (
    <div className="py-8 container mx-auto mt-auto mb-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-3/5 pr-4 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-8 text-teal-600">
          Finalize your booking!
        </h1>
        <h2 className="text-xl font-semibold mb-4 text-teal-600">
          Reservation Details
        </h2>
        <DateFormBooking changeStyling={true} />
        <h2 className="text-xl font-semibold mb-4 text-teal-600 mt-5">
          Guest Details
        </h2>
        <FormBooking 
          setIsFormBookingValid={setIsFormBookingValid}
          onSubmit={onSubmit}
          showMessage={showMessage}
          showPhoneInput={true}
          showButton={true}
          setFormData={setFormData}
        />
        <div className="mb-4 mt-4">
          <label htmlFor="newsletter" className="inline-flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              className="mr-2 checked:bg-green-900"
            />
            Subscribe to newsletter
          </label>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-teal-600">
          Special Requests
        </h2>
        <div className="mb-4">
          <textarea
            id="special-requests"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          ></textarea>
        </div>
        <button
          disabled={!canBook}
          className="button-booking text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-500"
        >
          <NavLink
            to={"/booking-confirmation"}
            state={{
              hotel,
              startDate,
              endDate,
              numberOfGuests,
              totalPrice,
              formData,
            }}
          >
            Book now!
          </NavLink>
        </button>
      </div>
      <div className="w-full md:w-2/5">
        <div className="mr-4 md:mr-8">
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">Details: </h2>
            <h2 className="text-lg font-italic mb-2">
              {hotel
                ? `${hotel.name} in ${hotel.location}, ${hotel.country}`
                : ""}
            </h2>

            <p className="text-gray-600 mb-2">
              {hotel ? hotel.description : "Loading description..."}
            </p>
            <p className="text-teal-600 font-bold">
              From{" "}
              {hotel ? `${hotel.pricePerNight} CHF/night` : "Loading price..."}
            </p>
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
            <p className="text-gray-100">{totalPrice} CHF</p>
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

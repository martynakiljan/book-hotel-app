/** @format */

import "../styles/all.scss";
import { useBooking } from "../context/BookingContext";

interface DateFormProps {
  showButton?: boolean;
  changeStyling?: boolean;
  showSelectForm?: boolean;
}

const DateFormBooking: React.FC<DateFormProps> = ({
  showButton,
  changeStyling,
}) => {
  const {
    handleSubmit,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleNumberOfGuest,
    error,
    numberOfGuests,
  } = useBooking();

  return (
    <>
      <div
        className={`rounded-lg ${
          changeStyling
            ? "bg-transparent p-0 pt-4"
            : "bg-gray-100 shadow-lg p-8"
        }`}
      >
        {showButton && (
          <h2 className="text-teal-600 text-2xl font-semibold mb-4">
            Book Your Stay
          </h2>
        )}
        <form onChange={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4 h-full">
            <div className="flex items-center h-full mr-4 p-1">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center mr-4 mb-1 p-1">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div className="flex items-center mb-1 p-1">
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                Number of Guests
              </label>
              <input
                pattern="[0-9]*"
                inputMode="numeric"
                id="guests"
                name="guests"
                min="1"
                type="number"
                value={numberOfGuests}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 max-w-[50px]"
                onChange={handleNumberOfGuest}
              />
            </div>
          </div>
          {error && <p className="text-red-500 mb-4 text-xs">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default DateFormBooking;

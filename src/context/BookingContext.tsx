/** @format */

import React, {
  createContext,
  useContext,
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingContextType, sortOptions } from "../type";
import { BookingProviderProps } from "../type";

// create context
const BookingContext = createContext<BookingContextType | undefined>(undefined);

// hook for context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

// provider
export const BookingProvider: React.FC<BookingProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const [isValidFormDate, setIsValidFormDate] = useState<boolean>(false);
  const location = useLocation();

  const [selectedOptions, setSelectedOptions] = useState<sortOptions>({
    pool: false,
    airConditioning: false,
    breakfastIncluded: false,
    balcony: false,
    freeCancellation: false,
    childrenFriendly: false,
    petFriendly: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevState) => ({ ...prevState, [name]: checked }));
  };

  // sort //
  const [sortBy, setSortBy] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const handleSortChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedSortOption(e.target.value);
    setSortBy(e.target.value);
  };

  const handleNumberOfGuest = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue === "") {
      setNumberOfGuests(NaN);
      return;
    }

    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setNumberOfGuests(parsedValue);
    } else {
      setNumberOfGuests(1);
    }
  };

  const handleBlur = () => {
    if (isNaN(numberOfGuests)) {
      setNumberOfGuests(1);
    }
  };

  //date form //

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

useEffect(() => {
  const today = new Date().toISOString().split("T")[0];
  const currentYear = new Date().getFullYear();
  let currentError = "";

  let start, end, startYear, endYear;
  if (startDate) {
    start = new Date(startDate);
    startYear = start.getFullYear();
  }
  if (endDate) {
    end = new Date(endDate);
    endYear = end.getFullYear();
  }

  if ((startDate || endDate) && (!startDate || !endDate)) {
    currentError = "Both start date and end date must be selected.";
  } else if (startDate && startDate < today) {
    currentError = "The start date cannot be in the past.";
  } else if (endDate && endDate < today) {
    currentError = "The end date cannot be in the past.";
  } else if (startDate && endDate && startDate === endDate) {
    currentError = "The start date and end date cannot be the same.";
  } else if (start && end && start > end) {
    currentError = "The start date cannot be later than the end date.";
  }
  if (startYear && endYear && startYear !== currentYear) {
    currentError = "Please enter a correct year for the start date.";
  } else if (endYear && startYear && endYear !== currentYear) {
    currentError = "Please enter a correct year for the end date.";
  }

  setError(currentError);
  setIsValidFormDate(currentError === "" && startDate !== "" && endDate !== "");
}, [startDate, endDate]);


  const isSubmitDisabled = !startDate || !endDate || numberOfGuests < 1;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (error) {
      return;
    }
    const filters = { selectedOptions };
    if (location.pathname !== "/booking") {
      navigate("/hotels", { state: filters });
    }
  };

  // calculate days for total price  //
  const [numberOfDays, setNumberOfDays] = useState(0);

  const calculateNumberOfDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };

  useEffect(() => {
    if (startDate && endDate && numberOfGuests >= 1) {
      const days = calculateNumberOfDays();
      setNumberOfDays(days);
    }
  }, [startDate, endDate, numberOfGuests]);

  return (
    <BookingContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        numberOfGuests,
        setNumberOfGuests,
        error,
        handleStartDateChange,
        handleNumberOfGuest,
        handleEndDateChange,
        isSubmitDisabled,
        handleSubmit,
        sortBy,
        handleSortChange,
        handleCheckboxChange,
        selectedOptions,
        setSelectedOptions,
        numberOfDays,
        isValidFormDate,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;

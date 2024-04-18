/** @format */

import { useState } from "react";
import "../styles/all.scss";

const CheckboxContainer = () => {
  const [amenities, setAmenities] = useState({
    pool: false,
    airConditioning: false,
    breakfastIncluded: false,
    balcony: false,
    freeCancellation: false,
    childrenFriendly: false,
    petFriendly: false,
  });

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setAmenities({ ...amenities, [name]: checked });
  };

  return (
    <div className=" mt-8 text-white">
      <form>
        <div className="flex flex-wrap items-center justify-center mb-4">
          <label htmlFor="pool" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="pool"
                name="pool"
                checked={amenities.pool}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Pool</span>
          </label>

          <label htmlFor="airConditioning" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="airConditioning"
                name="airConditioning"
                checked={amenities.airConditioning}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Air Conditioning</span>
          </label>

          <label htmlFor="breakfastIncluded" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="breakfastIncluded"
                name="breakfastIncluded"
                checked={amenities.breakfastIncluded}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Breakfast Included</span>
          </label>

          <label htmlFor="balcony" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="balcony"
                name="balcony"
                checked={amenities.balcony}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Balcony</span>
          </label>

          <label htmlFor="freeCancellation" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="freeCancellation"
                name="freeCancellation"
                checked={amenities.freeCancellation}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Free Cancellation</span>
          </label>

          <label htmlFor="childrenFriendly" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="childrenFriendly"
                name="childrenFriendly"
                checked={amenities.childrenFriendly}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Children Friendly</span>
          </label>

          <label htmlFor="petFriendly" className="checkbox-label">
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="petFriendly"
                name="petFriendly"
                checked={amenities.petFriendly}
                onChange={handleCheckboxChange}
              />
            </span>
            <span className="ml-2">Pet Friendly</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default CheckboxContainer;

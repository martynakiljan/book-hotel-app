/** @format */
import { useState } from "react";
import voucherImg from "../assets/mix-images/voucher.png";
const Vouchers = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = () => {};

  const handleOrder = () => {};

  return (
    <div className="px-4 py-16  container mx-auto mt-auto mb-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={voucherImg} alt="Voucher" className="" />
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="text-xl font-bold mb-4">Voucher</h2>
          <p className="mb-4">
            A value voucher to print out directly. The perfect last-minute gift
            idea.
          </p>
          <p className="mb-2">Desired voucher value</p>

          <div className="flex flex-wrap mb-4">
            <button
              onClick={() => setSelectedValue("100")}
              className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2 mb-2"
            >
              100 CHF
            </button>
            <button
              onClick={() => setSelectedValue("200")}
              className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2 mb-2"
            >
              200 CHF
            </button>
            <button
              onClick={() => setSelectedValue("300")}
              className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2 mb-2"
            >
              300 CHF
            </button>
            <button
              onClick={() => setSelectedValue("500")}
              className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2 mb-2"
            >
              500 CHF
            </button>
          </div>
          {/* Select z wyborem ilości i obok cena */}
          <div className="flex items-center mb-4">
            <select
              value={selectedValue}
              onChange={handleSelectChange}
              className="border border-gray-300 rounded-md mr-2 px-2 py-1"
            >
              <option value="">Select quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span>
              Price: {selectedValue ? `${selectedValue} CHF` : "0"} CHF{" "}
            </span>
          </div>
          {/* Przycisk zamówienia */}
          <button
            onClick={handleOrder}
            className="bg-teal-500 text-white px-2 py-2 rounded-md hover:bg-teal-600 w-1/2"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vouchers;

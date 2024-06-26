/** @format */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import voucherImg from "../assets/mix-images/voucher.png";
import Info from "./Info";

const Vouchers = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const handleVoucherSelect = (value: number) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setTotalPrice(selectedValue * quantity);
  }, [selectedValue, quantity]);

  const handleOrder = () => {
    if (totalPrice) {
      navigate("/finalization", {
        state: {
          voucherValue: selectedValue,
          quantity: quantity,
          totalPrice: totalPrice,
        },
      });
    }
  };

  return (
    <>
      <div className="px-4 py-16 container mx-auto mt-auto mb-auto h-full">
        <h3 className="text-3xl font-bold dark:text-white my-8">
          Out of gift ideas?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <img src={voucherImg} alt="Voucher" className="" />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-4">Voucher</h2>
            <p className="mb-4">
              Printable voucher. The perfect last-minute gift idea.
            </p>
            <p className="mb-2">Requested voucher value</p>

            <div className="flex flex-wrap mb-4">
              {["100", "200", "300", "500"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleVoucherSelect(Number(amount))}
                  className={`text-white px-4 py-2 rounded-md mr-2 mb-2 ${
                    selectedValue === Number(amount)
                      ? "bg-teal-700"
                      : "bg-teal-600"
                  }`}
                >
                  {amount} CHF
                </button>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2">Select:</label>
              <select
                value={quantity}
                onChange={handleSelectChange}
                className="border border-gray-300 rounded-md mr-2 px-2 py-1"
              >
                <option value="">quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <span>Price: {totalPrice ? `${totalPrice} CHF` : "0 CHF"}</span>
            </div>
            <button
              onClick={handleOrder}
              disabled={!totalPrice}
              className={`px-4 py-2 rounded-lg w-1/4 text-white ${
                !totalPrice
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-500  0 hover:bg-teal-600"
              }`}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      <Info />
    </>
  );
};

export default Vouchers;

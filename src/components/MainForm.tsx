import "../App.css";

const MainForm = () => {
  return (
    <div className=" bg-gray-100  p-8 rounded-lg shadow-lg">
      {" "}
      <h2 className="text-teal-600 text-2xl font-semibold mb-4">
        Book Your Stay
      </h2>
      <form>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mr-4">
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
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="flex items-center mr-4">
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
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700 mr-2"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 "
              style={{ maxWidth: "100px", flexShrink: 0 }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MainForm;

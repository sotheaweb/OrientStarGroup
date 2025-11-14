import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white w-[100vw] flex flex-col items-center justify-center py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-5">
          We will get to you as soon as we can.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-[100%] max-w-6xl p-6 sm:p-8">
        <form className="flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="email"
              placeholder="Email:"
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company Name:"
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name:"
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject:"
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Please leave your message here..."
            rows="5"
            className="w-full p-3 bg-gray-200 rounded-md text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-[15vw] sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

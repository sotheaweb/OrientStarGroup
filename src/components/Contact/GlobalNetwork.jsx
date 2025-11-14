import React from "react";
import image from "../../assets/Contact/globalnetwork.jpg";
import { div } from "framer-motion/client";

const GlobalNetwork = () => {
  return (

    <div className="bg-white py-16 px-4 sm:px-8 lg:px-20 relative">
        {/* Title Section */}
        <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Global Network
            </h1>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Our reliable global shipping solutions are designed to meet your diverse needs,
            ensuring timely and secure delivery. With a vast network and advanced technology,
            we handle all cargo types, providing cost-effective and efficient services.
            </p>
        </div>

      {/* Image Section */}
        <div className="max-w-6xl mx-auto mt-10">
            <img
            src={image}
            alt="Global network map"
            className="w-full object-cover"
            />
        </div>

    </div>

  );
};

export default GlobalNetwork;

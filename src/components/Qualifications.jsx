import React, { useState } from "react";
import logo from "../assets/About/logo1.png";
import logo2 from "../assets/About/logo2.jpg";

const Qualifications = () => {
  const [isPaused, setIsPaused] = useState(false);

  const qualifications = [
    { image: logo, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo2, title: "C-TPAT Certified Partner" },
    { image: logo, title: "WCA World Member" },
    { image: logo, title: "AEO Certified Company" },
    { image: logo, title: "IATA Accredited Agent" },
    { image: logo, title: "ACI Registration Approved" },
    { image: logo, title: "ACI Registration Approved" },
  ];

  return (
    <div className="bg-white w-full py-16 px-4 overflow-hidden">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-4">
        Qualifications
      </h1>
      <p className="max-w-3xl mx-auto text-gray-500 mb-10 text-justify px-4">
        Our reliable global shipping solutions are designed to meet your diverse
        needs, ensuring timely and secure delivery. With a vast network and
        advanced technology, we handle all cargo types, providing cost-effective
        and efficient services.
      </p>

      {/* Scrolling container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-10"
          style={{
            animation: "scroll 20s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[...qualifications, ...qualifications].map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)} // pause animation
              onMouseLeave={() => setIsPaused(false)} // resume animation
            >
              <div className="p-4 rounded-xl w-50 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-out">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-25 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="opacity-0 group-hover:opacity-100 text-center text-gray-700 text-sm mt-3 w-40 transition-opacity duration-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

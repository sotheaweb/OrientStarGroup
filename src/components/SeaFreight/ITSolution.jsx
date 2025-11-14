import React from "react";
import service6 from "../../assets/SeaFreight/service6.png";
import service9 from "../../assets/SeaFreight/service9.png";
import service10 from "../../assets/SeaFreight/service10.png";
import service11 from "../../assets/SeaFreight/service11.png";
import service12 from "../../assets/SeaFreight/service12.png";

const ITSolution = () => {
  const services = [
    {
      image: service9,
      title: "Booking Management",
      des: "We have more than 20 service contracts signed with varied carriers.",
    },
    {
      image: service6,
      title: "Track and Trace",
      des: "We have more than 20 service contracts signed with varied carriers.",
    },
    {
      image: service10,
      title: "Sailing Schedules",
      des: "We have more than 20 service contracts signed with varied carriers.",
    },
    {
      image: service11,
      title: "Integration",
      des: "We have more than 20 service contracts signed with varied carriers.",
    },
  ];

  return (
    <section className="bg-gray-50 w-full px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            IT Solutions
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We have developed a fully functional, reliable IT system to support
            every operation efficiently.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items- justify-between gap-12">
          {/* Left Side: Services */}
          <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white group rounded-2xl shadow-[0_4px_20px_rgba(56,189,248,0.2)]
                           flex flex-col items-center justify-center text-center 
                           p-2 pt-16 cursor-pointer transition-all duration-500 mt-10 hover:bg-sky-500"
              >
                {/* Floating Image */}
                <div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 
                             w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] 
                             transition-all duration-500 group-hover:opacity-0"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Title (always visible) */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 mt-4 group-hover:-mt-15 group-hover:text-white transition">
                  {service.title}
                </h3>

                {/* Description (appears on hover) */}
                <p
                  className="text-gray-600 text-sm sm:text-base opacity-0 
                             group-hover:opacity-100 group-hover:text-white 
                             transition-opacity duration-500 leading-relaxed"
                >
                  {service.des}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Illustration */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center">
            <img
              src={service12}
              alt="IT Solutions Overview"
              className="w-full max-w-lg h-auto object-contain
                         rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSolution;

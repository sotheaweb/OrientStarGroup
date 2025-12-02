import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import pc from "../../assets/ITSolution/pc.png";
import analyst from "../../assets/ITSolution/analyst.jpg";
import dashboard1 from "../../assets/ITSolution/dashboard1.jpg";
import dashboard2 from "../../assets/ITSolution/dashboard2.jpg";

const VisibilityControl = () => {
  const CardData = [
    {
      image: analyst,
      title: "Performance Dashboards",
      des: "Visualize shipment volumes, warehouse trends, and purchase order statuses in one glance—empowering smarter, faster decisions.",
    },
    {
      image: dashboard1,
      title: "Shipment Visibility",
      des: "Track your purchase order status, ETA, freight movement and delays in real-time.",
    },
    {
      image: dashboard2,
      title: "Warehouse Insights",
      des: "Monitor inventory movements, storage usage, and picking activities instantly.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // interval increased for readability

    return () => clearInterval(timer);
  }, []);

  // ---- NEXT ----
  const handleNext = () => {
    setSlide(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % CardData.length);
      setSlide(false);
    }, 300); // match CSS transition duration
  };

  // ---- PREVIOUS ----
  const handlePrev = () => {
    setSlide(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + CardData.length) % CardData.length);
      setSlide(false);
    }, 300); // match CSS transition duration
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden px-5">
      {/* Header */}
      <div className="text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Visibility, Control & Analytics
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Stay in control with real-time insights and proactive alerts
        </p>
      </div>

      {/* Images Wrapper */}
      <div className="relative max-w-7xl mx-auto mt-10 flex items-center justify-center px-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Left button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 lg:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow hover:bg-gray-100 z-20"
        >
          <IoChevronBack className="text-2xl text-gray-700" />
        </button>

        {/* Left faded */}
        <img
          src={CardData[(index + CardData.length - 1) % CardData.length].image}
          className="hidden lg:block w-[400px] -translate-x-20 opacity-40 transition-transform duration-700 ease-in-out"
        />

        {/* PC frame (center) */}
        <div className="relative w-full max-w-4xl flex justify-center">
          <img src={pc} className="w-full z-10" />

          {/* Sliding Screen Image */}
          <img
            src={CardData[index].image}
            className={`absolute top-[5%] w-[97%] h-[65%] object-cover rounded-sm shadow-md transition-transform duration-700 ease-in-out
              ${slide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
            `}
          />
        </div>

        {/* Right faded */}
        <img
          src={CardData[(index + 1) % CardData.length].image}
          className="hidden lg:block w-[400px] translate-x-20 opacity-40 transition-transform duration-700 ease-in-out"
        />

        {/* Right button */}
        <button
          onClick={handleNext}
          className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow hover:bg-gray-100 z-20"
        >
          <IoChevronForward className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-3">
        {CardData.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setSlide(true);
              setTimeout(() => {
                setIndex(i);
                setSlide(false);
              }, 700); // match animation duration
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <div
        className={`max-w-xl mx-auto text-center mt-10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-lg p-5 transition-transform duration-700 ease-in-out
            ${slide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
        `}
      >
        <h3
          className={`text-xl font-bold text-gray-800 transition-transform duration-700 ease-in-out
            ${slide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
        >
          {CardData[index].title}
        </h3>

        <p
          className={`text-gray-600 mt-2 text-sm sm:text-base transition-transform duration-700 ease-in-out
            ${slide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
        >
          {CardData[index].des}
        </p>
      </div>
    </section>
  );
};

export default VisibilityControl;

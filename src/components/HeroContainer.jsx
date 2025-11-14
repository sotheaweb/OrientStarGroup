import React from "react";
import { Link } from "react-router-dom";

const HeroContainer = ({ img, title, des }) => {
  return (
    <div 
      className="relative"
    >

      {/* Hero Image Background (Full, Not Cropped) */}
      <div 
        className="fixed top-15 md:top-20 left-0 w-full h-[50vh] lg:h-screen -z-10 flex items-center justify-center bg-black"
        data-aos="fade-up"
        data-aos-duration="1000"  
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Color (Optional subtle dark layer) */}
      <div 
        className="fixed top-0 left-0 -z-10 w-full h-[50vh] lg:h-screen bg-black/5"
        ata-aos="fade-up"
        data-aos-duration="1000"
      ></div>

      {/* Hero Content */}
      <div 
        className="relative z-20 flex flex-col items-start justify-center h-[50vh] lg:h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-md sm:max-w-lg md:max-w-xl drop-shadow-md">
          {des}
        </p>
        <Link to="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md transition-all duration-300 text-sm sm:text-base cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContainer;

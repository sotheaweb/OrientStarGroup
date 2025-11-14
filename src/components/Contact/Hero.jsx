import React from "react";
import HeroContact from "../../assets/Contact/HeroContact.png";

const Hero = () => {
  return (
    <div className="relative">

      {/* Hero Image Background Fixed */}
      <div className="fixed top-20 left-0 w-full h-[50vh] lg:h-screen -z-1 overflow-hidden">
        <img
          src={HeroContact}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Color Dark / Optional */}
      {/* <div className="fixed top-0 left-0 -z-1 w-full h-[65vh] lg:h-screen bg-black/20"></div> */}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-[50vh] lg:h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-md sm:max-w-lg md:max-w-xl">
          You are always welcome to contact us, no matter by walking in, online form, phone call or offcial account.
        </p>
      </div>
    </div>
  );
};

export default Hero;

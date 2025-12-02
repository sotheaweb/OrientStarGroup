import React, { useState } from "react";
import logo1 from "../assets/About/logo1.png";
import logo2 from "../assets/About/logo2.jpg";
import logo3 from "../assets/About/logo3.png";
import logo4 from "../assets/About/logo4.png";
import logo5 from "../assets/About/logo5.png";
import logo6 from "../assets/About/logo6.png";
import logo7 from "../assets/About/logo7.png";
import { useTranslation } from "react-i18next";

const Qualifications = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation("about");

  const qualifications = [
    { image: logo1, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo2, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo3, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo4, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo5, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo6, title: "AMS Filer With Type I Bond For USA Shipment" },
    { image: logo7, title: "AMS Filer With Type I Bond For USA Shipment" },
  ];

  return (
    <div className="bg-white w-full py-16 px-4 overflow-hidden">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {t('qualifications.title')}
      </h1>
      <p className="max-w-3xl mx-auto text-gray-500 mb-10 text-justify px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {t('qualifications.intro')}
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
              <p className="lg:opacity-0 lg:group-hover:opacity-100 text-center text-gray-700 text-sm mt-3 w-40 transition-opacity duration-500">
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

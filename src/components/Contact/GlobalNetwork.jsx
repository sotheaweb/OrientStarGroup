import React from "react";
import image from "../../assets/Contact/globalnetwork.jpg";
import { useTranslation } from "react-i18next";

const GlobalNetwork = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-20 relative">
        {/* Title Section */}
        <div className="max-w-6xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('globalNetwork.title')}
            </h1>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              {t('globalNetwork.desc')}  
            </p>
        </div>

      {/* Image Section */}
        <div className="max-w-6xl mx-auto mt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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

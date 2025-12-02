import React from "react";
import service1 from "../../assets/SeaFreight/service1.png";
import service6 from "../../assets/SeaFreight/service6.png"
import service7 from "../../assets/SeaFreight/service7.png"
import service8 from "../../assets/SeaFreight/service8.png"
import { useTranslation } from "react-i18next";

const Carriers = () => {
  const { t } = useTranslation("seaFreight");

    const services = [
        {
        image: service1,
        title: t('carriers.item.contracts1.title'),
        description: t('carriers.item.contracts1.desc')
        },
        {   
        image: service6,    
        title: t('carriers.item.routingOptions.title'),
        description: t('carriers.item.routingOptions.desc'),
        },
        {
        image: service7,
        title: t('carriers.item.contracts2.title'),
        description: t('carriers.item.contracts2.desc'),
        },
        {
        image: service8,
        title: t('carriers.item.multiModalTransportation.title'),
        description: t('carriers.item.multiModalTransportation.desc'),
        },
    ];

  return (
    <section className="bg-white w-full px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Carriers, Routes & Modes
        </h2>
        <p className="text-center mt-5 text-gray-800">A comprehensive range of services are available for inbound, outbound and cross-trade movements.</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white group hover:bg-sky-500 transition-all duration-300
                         rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.2)]
                         flex flex-col items-center text-center w-full p-6 mt-10"
            >
              {/* Image (optional) */}
              {service.image && (
                <div className="absolute -top-15 w-[150px] h-[150px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Text Content */}
              <div className={`${service.image ? "mt-16" : "mt-4"} flex flex-col items-center`}>
                <h3
                  className="text-lg sm:text-xl font-semibold text-gray-800 
                             group-hover:text-white transition"
                >
                  {service.title}
                </h3>
                <p
                  className="mt-3 text-sm sm:text-base text-gray-600 
                             group-hover:text-gray-100 transition leading-relaxed"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carriers;

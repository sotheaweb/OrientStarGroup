import React from "react";
import service1 from "../../assets/SeaFreight/service1.png";
import service2 from "../../assets/SeaFreight/service2.png";
import service3 from "../../assets/SeaFreight/service3.png";
import service4 from "../../assets/SeaFreight/service4.png";
import service5 from "../../assets/SeaFreight/service5.png";
import { useTranslation } from "react-i18next";

const RangOfServices = () => {
  const { t } = useTranslation("seaFreight");

  const services = [
    {
      image: service1,
      title: "FCL",
      description: t('rangeOfService.service.FCL'),
    },
    {
      image: service2,
      title: "LCL",
      description: t('rangeOfService.service.LCL'),
    },
    {
      image: service3,
      title: "",
      description: t('rangeOfService.service.consolidation'),
    },
    {
      image: service4,
      title: "",
      description: t('rangeOfService.service.doorToDoor'),
    },
    {
      image: service5,
      title: "",
      description: t('rangeOfService.service.customeServices'),
    },
  ];

  return (
    <section className="bg-gray-100 w-full px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          {t('rangeOfService.title')}
        </h2>
        <p className="text-center mt-5 text-gray-800">
          {t('rangeOfService.intro')}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">
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
              <div
                className={`${
                  service.image ? "mt-16" : "mt-4"
                } flex flex-col items-center`}
              >
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

export default RangOfServices;

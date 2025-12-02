import React from 'react'
import integration from '../../assets/ITSolution/integration.png'
import api from '../../assets/ITSolution/api.png'
import custom from '../../assets/ITSolution/custom.png'
import multisystem from '../../assets/ITSolution/multisystem.png'
import { IoSettingsSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next'

const Integration = () => {
  const { t } = useTranslation('itSolution');

  const cardData = [
    {
      image: api,
      title: t("integration.item1.title"),
      des: t("integration.item1.desc"),
    },
    {
      image: custom,
      title: t("integration.item2.title"),
      des: t("integration.item2.desc"),
    },
    {
      image: multisystem,
      title: t("integration.item3.title"),
      des: t("integration.item3.desc"),
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16 relative overflow-hidden">

      {/* --- Rotating Icon (LG only) --- */}
      <div className="hidden lg:block absolute left-300 top-40 z-0">
        <IoSettingsSharp className="w-[350px] h-auto text-white animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("integration.title")}
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            {t("integration.desc")}
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center px-5">

          {/* Left — Image */}
          <div className="w-full flex justify-center lg:justify-start relative z-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={integration}
              alt="integration overview"
              className="w-full max-w-md"
            />
          </div>

          {/* Right — Cards */}
          <div className="space-y-6 relative z-10">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Integration;

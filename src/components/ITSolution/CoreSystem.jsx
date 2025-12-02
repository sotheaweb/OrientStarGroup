import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import clientPortal from "../../assets/ITSolution/clientPortal.png";
import poms from "../../assets/ITSolution/poms.png";
import ims from "../../assets/ITSolution/ims.png";
import tms from "../../assets/ITSolution/tms.png";
import billing from "../../assets/ITSolution/billing.png";
import { useTranslation } from 'react-i18next'

const CoreSystem = () => {
  const { t } = useTranslation('itSolution');

  const cardData = [
    {
      image: poms,
      title: t('coreSystem.item2.title'),
      des: t("coreSystem.item2.desc"),
    },
    {
      image: ims,
      title: t("coreSystem.item3.title"),
      des: t("coreSystem.item3.desc"),
    },
    {
      image: tms,
      title: t("coreSystem.item4.title"),
      des: t("coreSystem.item4.desc"),
    },
    {
      image: billing,
      title: t("coreSystem.item5.title"),
      des: t("coreSystem.item5.desc"),
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("coreSystem.title")}
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            {t("coreSystem.desc")}
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side – Client Portal */}
          <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2">
            <div className="relative flex items-center justify-center">
              <IoSettingsSharp className="text-gray-100 w-[300px] sm:w-[400px] lg:w-[600px] h-auto animate-spin-slow" />
              <div className="absolute flex flex-col items-center text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src={clientPortal}
                  alt="Client Portal"
                  className="w-20 sm:w-20 mb-3"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {t("coreSystem.item1.title")}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base w-50">
                  {t("coreSystem.item1.desc")} 
                </p>
              </div>
            </div>
          </div>

          {/* Right Side – System Cards */}
          <div className="grid grid-cols-1 gap-6 w-full lg:w-2/2 md:px-5">
            {cardData.map((data, index) => (
              <div
                key={index}
                className="rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition duration-300 p-5 flex gap-2 items-start"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-14 h-14 mb-4"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
                <div 
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {data.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{data.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSystem;

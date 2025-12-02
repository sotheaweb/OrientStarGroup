import React from "react";
import overview from "../../assets/AirFreight/overview.png";
import overview1 from "../../assets/AirFreight/overview1.png";
import overview2 from "../../assets/AirFreight/overview2.png";
import overview3 from "../../assets/AirFreight/overview3.png";
import overview4 from "../../assets/AirFreight/overview4.png";
import overview5 from "../../assets/AirFreight/overview5.png";
import overview6 from "../../assets/AirFreight/overview6.png";
import { useTranslation } from "react-i18next";

const Overview = () => {
  const { t } = useTranslation("airFreight");

  const leftOverview = [
    {
      image: overview1,
      title: t('overView.item.customized.title'),
      des: t('overView.item.customized.desc'),
    },
    {
      image: overview2,
      title: t('overView.item.fast.title'),
      des: t('overView.item.fast.desc'),
    },
    {
      image: overview3,
      title: t('overView.item.door.title'),
      des: t('overView.item.door.desc'),
    },
  ];

  const rightOverview = [
    {
      image: overview4,
      title: t('overView.item.complex.title'),
      des: t('overView.item.complex.desc'),
    },
    {
      image: overview5,
      title: t('overView.item.consolidation.title'),
      des: t('overView.item.consolidation.desc'),
    },
    {
      image: overview6,
      title: t('overView.item.customs.title'),
      des: t('overView.item.customs.desc'),
    },
  ];

  return (
    <section className="w-full bg-white pt-25 pb-25 px-4 sm:px-6 md:px-10">
      <div
        className="w-full min-h-[80vh] bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage: `url(${overview})`,
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {t('overView.title')}
          </h1>

          <div className="w-full flex flex-col md:flex-row md:justify-between mt-5 gap-10">
            {/* Left Column */}
            <div className="w-full md:w-[45%] flex flex-col gap-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="mt-5 text-gray-800 text-center md:text-left">
                {t('overView.desc')}
              </p>
              {leftOverview.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition group hover:bg-sky-500 mt-10"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-100">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-100">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[45%] flex flex-col gap-6">
              {rightOverview.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition group hover:bg-sky-500 mt-10"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-100">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-100">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

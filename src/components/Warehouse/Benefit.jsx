import React from "react";
import dimon from "../../assets/Warehouse/dimon.png";
import b1 from "../../assets/Warehouse/b1.png";
import b2 from "../../assets/Warehouse/b2.png";
import b3 from "../../assets/Warehouse/b3.png";
import b4 from "../../assets/Warehouse/b4.png";
import { useTranslation } from "react-i18next";

const Benefit = () => {
  const { t } = useTranslation('warehouse');

  const services = [
    { image: b1, title: t('benifits.item1.title') },
    { image: b2, title: t('benifits.item2.title') },
    { image: b3, title: t('benifits.item3.title') },
    { image: b4, title: t('benifits.item4.title') },

  ];

  return (
    <section className="bg-white py-20 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between lg:px-20 xl:px-0">
        {/* left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-start mt-12 lg:mt-0 lg:flex lg:flex-col items-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            {t('benifits.title')}
          </h2>
          <p className="text-gray-500 mt-6 px-5 lg:px-0 leading-relaxed max-w-md mx-auto lg:mx-0 lg:text-start">
            {t('benifits.desc')}
          </p>
          <div className="mt-8 w-40 h-2 bg-gradient-to-r from-blue-800 to-blue-400 rounded-full mx-auto lg:mx-0"></div>
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* ✅ Circle layout only visible on lg+ */}
          <div className="relative hidden lg:flex w-[450px] h-[450px] items-center justify-center">
            {/* Outer Circle */}
            <div className="absolute w-[450px] h-[450px] border-[30px] border-gray-100 rounded-full"></div>

            {/* Inner Circle */}
            <div className="absolute w-[350px] h-[350px] bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center">
              <img src={dimon} alt="Diamond" className="w-40 opacity-90" />
            </div>

            {/* Services Around Circle */}

            <div className="absolute top-[5%] -right-25 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[1].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-36">
                {services[1].title}
              </p>
            </div>

            <div className="absolute bottom-[5%] -right-30 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[2].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-32">
                {services[2].title}
              </p>
            </div>

            <div className="absolute bottom-[5%] -left-20 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[3].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-32">
                {services[3].title}
              </p>
            </div>

            <div className="absolute top-[5%] -left-30 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[0].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-32">
                {services[0].title}
              </p>
            </div>
          </div>

          {/* ✅ Grid layout for md and below */}
          <div className="grid grid-cols-2 sm:grid-cols-2 px-5 gap-6 mt-10 lg:hidden">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-4 hover:shadow-md transition"
              >
                <img src={s.image} alt={s.title} className="w-12 h-12" />
                <p className="text-sm font-medium mt-3">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;

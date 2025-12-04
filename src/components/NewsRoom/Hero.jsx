import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Hero = ({newsData}) => {
  const {t} = useTranslation('news')
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextHero();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextHero = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevHero = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + newsData.length) % newsData.length
    );
  };

  return (
    <section className="w-full  py-10 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden bg-gray-50">
      {/* Header */}
      <div className="mb-10 text-center" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          {t('newsRoom')}
        </h1>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {newsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row w-full flex-shrink-0"
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-[350px] lg:h-[350px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-2/2 p-6 sm:p-10 flex flex-col justify-center bg-gray-50">
                <p className="text-xs sm:text-sm font-bold text-sky-600 mb-1 mt-5">
                  {item.date}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
                  {item.desc.slice(0, 130) + "..."}
                </p>
                <button
                  onClick={() => navigate(`/news/${item.id}`)} 
                  className="self-start px-5 sm:px-6 py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md cursor-pointer"
                >
                  {t('readMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevHero}
          className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-md transition cursor-pointer"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={nextHero}
          className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-md transition cursor-pointer"
        >
          <FaChevronRight size={16} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {newsData.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all ${
                i === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

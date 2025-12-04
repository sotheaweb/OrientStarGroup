import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = ({ newsData }) => {
  const {t} = useTranslation('news')
  const navigate = useNavigate();


  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 bg-gray-50">
      <div className="flex flex-col gap-5 max-w-7xl mx-auto">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row group h-100 md:h-50 lg:h-50 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="md:w-80 w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:h-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-3/3 p-6 bg-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-sky-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3 line-clamp-3">
                  {item.desc.slice(0, 150) + "..."}
                </p>
              </div>

              <div className="mt-4 flex w-full items-center justify-between">
                <p className="text-sm text-gray-500 font-bold">{item.date}</p>
                <button
                  onClick={() => navigate(`/news/${item.id}`)}
                  className="text-sky-600 font-medium hover:text-sky-700 transition cursor-pointer"
                >
                  {t('readMore')} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;

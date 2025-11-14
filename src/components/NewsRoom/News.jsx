import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const News = ({ newsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 bg-gray-50">
      <div className="flex flex-col gap-5 max-w-7xl mx-auto">
        {currentNews.map((item) => (
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
                <p className="text-gray-600 mt-3 line-clamp-3">{item.desc}</p>
              </div>

              <div className="mt-4 flex w-full items-center justify-between">
                <p className="text-sm text-gray-500 font-bold">{item.date}</p>
                <button
                  onClick={() => navigate(`/news/${item.id}`)}
                  className="text-sky-600 font-medium hover:text-sky-700 transition cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination with numbers + icons */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        {/* Previous Icon */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-3 py-3 rounded-full cursor-pointer ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-400 hover:text-white hover:bg-sky-600"
          } transition`}
        >
          <FaChevronLeft />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              currentPage === index + 1
                ? "text-white cursor-not-allowed bg-sky-600"
                : "text-gray-700 hover:text-white hover:bg-sky-600 "
            } transition`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Icon */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-3 rounded-full cursor-pointer ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-400 hover:text-white hover:bg-sky-600"
          } transition`}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default News;

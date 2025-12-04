import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import seaFreight from "../assets/News/seaFreight.jpg";
import technology from '../assets/News/technology.jpg'
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {t} = useTranslation('news');

  const Newshero = [
    {
      id: 1,
      image: seaFreight,
      date: t('joc.date'),
      title: t('joc.title'),
      description: t('joc.desc')
    },
    {
      id: 2,
      image: technology,
      date: t('ost.date'),
      title: t('ost.title'),
      description: t('ost.desc')
    },
  ];

  const index = Newshero.findIndex((item) => item.id === Number(id));
  const article = Newshero[index];

  const goBack = () => navigate("/newsroom");
  const goNext = () =>
    index < Newshero.length - 1 &&
    navigate(`/news/${Newshero[index + 1].id}`);
  const goPrev = () =>
    index > 0 && navigate(`/news/${Newshero[index - 1].id}`);

  if (!article)
    return (
      <div className="text-center p-10 text-gray-600">Article not found.</div>
    );

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg -mt-16 p-6 sm:p-10 flex flex-col gap-6 relative z-10">
          <p className="text-sky-600 text-sm sm:text-base font-semibold tracking-wide">
            {article.date}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            {article.title}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {article.description}
          </p>
          <p className={article.id === 1 ? "hidden" : "block"}>
            <strong>{t('ost.contact')}</strong>{" "}
            <a
              href="mailto:orientstar_hkg@orientstargroup.com"
              className="underline hover:text-sky-500"
            >
              orientstar_hkg@orientstargroup.com
            </a>
          </p>  

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
            {index > 0 && (
              <button
                onClick={goPrev}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition cursor-pointer"
              >
                <FaArrowLeft /> {t('previous')}
              </button>
            )}

            <button
              onClick={goBack}
              className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition cursor-pointer"
            >
              {t('back')}
            </button>

            {index < Newshero.length - 1 && (
              <button
                onClick={goNext}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition cursor-pointer"
              >
                {t('next')} <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;

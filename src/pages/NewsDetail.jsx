import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/News/heronews.jpg";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Newshero = [
    {
      id: 1,
      image: heroImage,
      date: "April 8, 2025",
      title: "Breaking News: The Rise of Modern Newsrooms",
      description:
        "Discover how digital transformation is reshaping the modern newsroom...",
      content:
        "Full article details for Breaking News: The Rise of Modern Newsrooms...",
    },
    {
      id: 2,
      image: heroImage,
      date: "April 12, 2025",
      title: "Tech Trends Transforming Journalism in 2025",
      description:
        "AI, data analytics, and digital ethics are shaping the next generation of journalism...",
      content:
        "Full article details for Tech Trends Transforming Journalism in 2025...",
    },
    {
      id: 3,
      image: heroImage,
      date: "April 20, 2025",
      title: "Inside the Future of Media: Interactive Storytelling",
      description:
        "Explore how multimedia storytelling brings readers closer to the news experience.",
      content:
        "Full article details for Inside the Future of Media: Interactive Storytelling...",
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
          <h1 className="absolute bottom-4 left-4 text-white text-lg sm:text-2xl md:text-3xl font-bold shadow-md">
            {article.title}
          </h1>
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
            {article.content}
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
            {index > 0 && (
              <button
                onClick={goPrev}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition"
              >
                <FaArrowLeft /> Previous
              </button>
            )}

            <button
              onClick={goBack}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition"
            >
              Back to Newsroom
            </button>

            {index < Newshero.length - 1 && (
              <button
                onClick={goNext}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition"
              >
                Next <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;

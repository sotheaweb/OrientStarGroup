import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import heroImage from "../../assets/News/heronews.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const Newshero = [
    {
      id: 1,
      image: heroImage,
      date: "April 8, 2025",
      title: "Breaking News: The Rise of Modern Newsrooms",
      description:
        "Discover how digital transformation is reshaping the modern newsroom — from storytelling to instant updates that reach global audiences.",
      content:
        "Digital transformation is not just a buzzword anymore — it's redefining how journalism operates. From real-time updates to data-driven storytelling, newsrooms are becoming more interactive and audience-focused. This article dives deep into how technology is reshaping news production and distribution in 2025.",
    },
    {
      id: 2,
      image: heroImage,
      date: "April 12, 2025",
      title: "Tech Trends Transforming Journalism in 2025",
      description:
        "AI, data analytics, and digital ethics are shaping the next generation of journalism like never before.",
      content:
        "Artificial intelligence is automating repetitive newsroom tasks and helping journalists analyze massive datasets quickly. However, ethical considerations about AI bias and misinformation detection remain critical in 2025’s media landscape.",
    },
    {
      id: 3,
      image: heroImage,
      date: "April 20, 2025",
      title: "Inside the Future of Media: Interactive Storytelling",
      description:
        "Explore how multimedia storytelling brings readers closer to the news experience.",
      content:
        "The rise of interactive storytelling combines text, visuals, and immersive media to give readers agency in how they consume stories. Journalists are now becoming experience designers, blending emotion with interactivity.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextHero();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextHero = () => {
    setCurrentIndex((prev) => (prev + 1) % Newshero.length);
  };

  const prevHero = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Newshero.length) % Newshero.length
    );
  };

  return (
    <section className="w-full  py-10 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden bg-gray-50">
      {/* Header */}
      <div className="mb-10 text-center" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          Newsroom
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
          {Newshero.map((item) => (
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
                  {item.description}
                </p>
                <button
                  onClick={() => navigate(`/news/${item.id}`)} // ✅ navigate to detail page
                  className="self-start px-5 sm:px-6 py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevHero}
          className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-md transition"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={nextHero}
          className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-md transition"
        >
          <FaChevronRight size={16} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {Newshero.map((_, i) => (
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

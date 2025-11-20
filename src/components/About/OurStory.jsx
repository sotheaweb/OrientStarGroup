import React, { useState } from "react";

const OurStory = () => {
  const [activeYear, setActiveYear] = useState(1984);

  const timeNews = [
    {
      concludeYear: {
        year: "1984-2000",
        des: `In 1984, Jonathan Tseng founded the Orient Star Group in Taiwan. As a start-up, 
              we faced numerous challenges; however, we successfully navigated those difficulties.
              Before the new century, we had already established a preliminary service network in Asia.`,
      },
      eachYear: [
        {
          year: 1984,
          des: `Taipei office was established
                Singapore office was established`,
        },
        {
          year: 1987,
          des: `Hong Kong office was established`,
        },
        {
          year: 1988,
          des: `Bangkok office was established`,
        },
        {
          year: 1992,
          des: `Jakarta office was established`,
        },
        {
          year: 2000,
          des: `Xiamen office was established 
                Shanghai office was established 
                Qingdao office was established
                Tianjin office was established 
                Dalian office was established`,
        },
      ],
    },
    {
      concludeYear: {
        year: "1984-2000",
        des: `In 1984, Jonathan Tseng founded the Orient Star Group in Taiwan. As a start-up, 
              we faced numerous challenges; however, we successfully navigated those difficulties.
              Before the new century, we had already established a preliminary service network in Asia.`,
      },
      eachYear: [
        {
          year: 1984,
          des: `Taipei office was established
                Singapore office was established`,
        },
        {
          year: 1987,
          des: `Hong Kong office was established`,
        },
        {
          year: 1988,
          des: `Bangkok office was established`,
        },
        {
          year: 1992,
          des: `Jakarta office was established`,
        },
        {
          year: 2000,
          des: `Xiamen office was established 
                Shanghai office was established 
                Qingdao office was established
                Tianjin office was established 
                Dalian office was established`,
        },
      ],
    },
    {
      concludeYear: {
        year: "1984-2000",
        des: `In 1984, Jonathan Tseng founded the Orient Star Group in Taiwan. As a start-up, 
              we faced numerous challenges; however, we successfully navigated those difficulties.
              Before the new century, we had already established a preliminary service network in Asia.`,
      },
      eachYear: [
        {
          year: 1984,
          des: `Taipei office was established
                Singapore office was established`,
        },
        {
          year: 1987,
          des: `Hong Kong office was established`,
        },
        {
          year: 1988,
          des: `Bangkok office was established`,
        },
        {
          year: 1992,
          des: `Jakarta office was established`,
        },
        {
          year: 2000,
          des: `Xiamen office was established 
                Shanghai office was established 
                Qingdao office was established
                Tianjin office was established 
                Dalian office was established`,
        },
      ],
    },
  ];

  const timeline = timeNews[0];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
            Over more than 40 years, Orient Star has expanded across Asia with
            multiple offices and strong networks.
          </p>
        </div>

        {/* Conclude Year Box */}
        <div className="bg-sky-100 border-l-4 border-sky-600 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {timeline.concludeYear.year} Summary
          </h2>
          <p className="text-gray-800 whitespace-pre-line">
            {timeline.concludeYear.des}
          </p>
        </div>

        {/* Timeline Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar: Years */}
          <div className="lg:w-2/5 space-y-4">
            {timeline.eachYear.map((yearItem) => (
              <div
                key={yearItem.year}
                onMouseEnter={() => setActiveYear(yearItem.year)}
                onClick={() => setActiveYear(yearItem.year)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeYear === yearItem.year
                    ? "bg-blue-100 border-l-4 border-blue-600"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <h4
                  className={`font-semibold text-lg ${
                    activeYear === yearItem.year
                      ? "text-blue-700"
                      : "text-gray-900"
                  }`}
                >
                  {yearItem.year}
                </h4>
              </div>
            ))}
          </div>

          {/* Right Content Box */}
          <div className="lg:w-3/5 flex flex-col gap-4 h-full">
            {timeline.eachYear
              .filter((y) => y.year === activeYear)
              .map((yearItem) => (
                <div
                  key={yearItem.year}
                  className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-300 h-full"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {yearItem.year}
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {yearItem.des}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

import React, { useState } from 'react';

const OurStory = () => {
  const [activeYear, setActiveYear] = useState(1984);

  const timelineData = {
    1984: {
      title: "1984",
      events: [
        "Taipei office was established",
        "Singapore office was established"
      ],
      description: "In 1984, Jonathan Tseng founded the Orient Star Group in Taiwan. As a start-up, we faced numerous challenges; however, we successfully navigated those difficulties."
    },
    1987: {
      title: "1987",
      events: [],
      description: "Expansion continued with new partnerships across Southeast Asia."
    },
    1988: {
      title: "1988",
      events: [],
      description: "Strengthened our logistics network and improved service quality."
    },
    1992: {
      title: "1992",
      events: [],
      description: "Further expanded our operations and established more regional offices."
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Over more than 40 years of development, Orient Star has already built a strong network across South and East Asia. Our local offices promise clients with smooth transportation and native services.
          </p>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        {/* Timeline Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Timeline Years - Left Side */}
          <div className="lg:w-2/5">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">1984-2000</h3>
              
              <div className="space-y-4">
                {Object.keys(timelineData).map((year) => (
                  <div
                    key={year}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeYear === parseInt(year) 
                        ? 'bg-blue-100 border-l-4 border-blue-600' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                    onMouseEnter={() => setActiveYear(parseInt(year))}
                    onClick={() => setActiveYear(parseInt(year))}
                  >
                    <h4 className={`font-semibold text-lg ${
                      activeYear === parseInt(year) ? 'text-blue-700' : 'text-gray-900'
                    }`}>
                      {year}
                    </h4>
                    {timelineData[year].events.length > 0 && (
                      <div className="mt-2 space-y-1 ml-4">
                        {timelineData[year].events.map((event, index) => (
                          <p key={index} className="text-gray-700 text-sm">• {event}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Content - Right Side */}
          <div className="lg:w-3/5">
            <div className="bg-blue-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1984-2000</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {timelineData[activeYear].description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Before the new century, we had already established a preliminary service network in Asia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
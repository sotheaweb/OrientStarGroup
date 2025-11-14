import React from 'react';
import graph from "../../assets/SeaFreight/graph.jpg";
import Qualifications from '../Qualifications';

const Accreditation = () => {
  return (
    <section className="bg-white w-full px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12 mb-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col gap-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold">JOC Ranking</h2>
          <p className="text-gray-600 mb-4 sm:text-lg">Top NVOCC in Trans-Pacific Market</p>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-1">
            216,000<sup>+</sup>
          </h3>
          <p className="text-gray-600 sm:text-lg">TEUs handled in 2024</p>
        </div>

        {/* Image */}
        <div className="overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.2)] rounded-xl bg-gray-50">
          <img
            src={graph}
            alt="JOC Ranking Graph"
            className="w-full max-w-md lg:max-w-lg h-full object-contain"
          />
        </div>
      </div>
        <Qualifications />
    </section>
  );
};

export default Accreditation;

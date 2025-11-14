import React from "react";
import overview from "../../assets/AirFreight/overview.png";
import overview1 from "../../assets/AirFreight/overview1.png";
import overview2 from "../../assets/AirFreight/overview2.png";
import overview3 from "../../assets/AirFreight/overview3.png";
import overview4 from "../../assets/AirFreight/overview4.png";
import overview5 from "../../assets/AirFreight/overview5.png";
import overview6 from "../../assets/AirFreight/overview6.png";

const Overview = () => {
  const leftOverview = [
    {
      image: overview1,
      title: "Customized",
      des: `We offer customized air freight service for major international routes.`,
    },
    {
      image: overview2,
      title: "Fast",
      des: `Fast transit time for sample shipment and time sensitive shipments.`,
    },
    {
      image: overview3,
      title: "Door",
      des: `Door delivery and pick up service.`,
    },
  ];

  const rightOverview = [
    {
      image: overview4,
      title: "Complex",
      des: `To move both single and complex air shipments`,
    },
    {
      image: overview5,
      title: "Consolidation",
      des: `Air consolidation service to and from Asia.`,
    },
    {
      image: overview6,
      title: "Customs",
      des: `Customs clearance at both origin and destination.`,
    },
  ];

  return (
    <section className="w-full bg-white pt-25 pb-25 px-4 sm:px-6 md:px-10">
      <div
        className="w-full min-h-[80vh] bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage: `url(${overview})`,
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            Overview
          </h1>

          <div className="w-full flex flex-col md:flex-row md:justify-between mt-5 gap-10">
            {/* Left Column */}
            <div className="w-full md:w-[45%] flex flex-col gap-6">
              <p className="mt-5 text-gray-800 text-center md:text-left">
                In addition to sea freight, we also handle a full range of air
                freight transportation, specializing for time-critical cargoes.
              </p>
              {leftOverview.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition group hover:bg-sky-500 mt-10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-100">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-100">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[45%] flex flex-col gap-6">
              {rightOverview.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition group hover:bg-sky-500 mt-10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-gray-100">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-100">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

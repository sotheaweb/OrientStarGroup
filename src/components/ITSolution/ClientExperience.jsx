import React from "react";
import c1 from "../../assets/ITSolution/c1.png";
import c2 from "../../assets/ITSolution/c2.png";
import c3 from "../../assets/ITSolution/c3.png";
import c4 from "../../assets/ITSolution/c4.png";
import c5 from "../../assets/ITSolution/c5.png";
import c6 from "../../assets/ITSolution/c6.png";
import c7 from "../../assets/ITSolution/c7.png";
import { useTranslation } from "react-i18next";

const ClientExperience = () => {
  const { t } = useTranslation("itsolution");

  const cardData = [
    { image: c2, title: "Self-Service Portal", des: `Full access of bookings, documents, and shipment updates anytime.` },
    { image: c3, title: "Direct Communication", des: `Full access of bookings, documents, and shipment updates anytime.` },
    { image: c4, title: "Multi-language & Multi-user Access", des: `Full access of bookings, documents, and shipment updates anytime.` },
    { image: c5, title: "Role-Based Access Control", des: `Full access of bookings, documents, and shipment updates anytime.` },
    { image: c6, title: "Audit Trails & Activity Logs", des: `Full access of bookings, documents, and shipment updates anytime.` },
    { image: c7, title: "Built-In Safeguards", des: `Full access of bookings, documents, and shipment updates anytime.` },
  ];

  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 px-5">
        {/* Left Section */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800"
              data-aos="fade-rigth"
              data-aos-duration="1000"
            >
              Client Experience & Usability
            </h1>
            <p className="text-gray-600 mt-4 max-w-md text-sm sm:text-base text-start"
              data-aos="fade-rigth"
              data-aos-duration="1000"
            >
              Designed for ease of use and collaboration
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={c1} alt="Main Illustration" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {cardData.map((service, index) => (
            <div
              key={index}
              className="relative bg-white group rounded-2xl shadow-md
                         flex flex-col items-center justify-start text-center
                         transition-all duration-500 hover:bg-sky-500 p-5 lg:p-0 lg:px-3"
            >
              {/* Floating Image */}
              <div
                className={`absolute top-5 left-1/2 -translate-x-1/2
                            w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px]
                            transition-all duration-500
                            ${"lg:group-hover:opacity-0"} opacity-100`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>

              {/* Title */}
              <h3 className="hidden lg:block absolute top-30 group-hover:opacity-0 text-sm"
              >
                {service.title}
              </h3>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-20 sm:mt-24 lg:mt-10
                             lg:group-hover:text-white transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-gray-800 text-sm leading-relaxed px-2 sm:px-4 lg:group-hover:text-gray-100
                            ${"lg:group-hover:opacity-100"} opacity-100 lg:opacity-0`}
              >
                {service.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;

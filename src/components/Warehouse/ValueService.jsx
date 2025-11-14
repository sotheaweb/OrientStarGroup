import React from "react";
import dimon from "../../assets/Warehouse/dimon.png";
import v1 from "../../assets/Warehouse/v1.png";
import v2 from "../../assets/Warehouse/v2.png";
import v3 from "../../assets/Warehouse/v3.png";
import v4 from "../../assets/Warehouse/v4.png";
import v5 from "../../assets/Warehouse/v5.png";
import v6 from "../../assets/Warehouse/v6.png";

const ValueAddedServices = () => {
  const services = [
    { image: v1, title: "Customs & Compliance" },
    { image: v2, title: "EDI & Documentation Support" },
    { image: v3, title: "Visibility Platform" },
    { image: v4, title: "Pick & Pack, Labelling, Palletization" },
    { image: v5, title: "Reverse Logistics" },
    { image: v6, title: "Order Fulfillment" },
  ];

  return (
    <section className="bg-white py-20 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 xl:px-0 ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* ✅ Circle layout only visible on lg+ */}
          <div className="relative hidden lg:flex w-[450px] h-[450px] items-center justify-center">
            {/* Outer Circle */}
            <div className="absolute w-[450px] h-[450px] border-[30px] border-gray-100 rounded-full"></div>

            {/* Inner Circle */}
            <div className="absolute w-[350px] h-[350px] bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center">
              <img src={dimon} alt="Diamond" className="w-40 opacity-90" />
            </div>

            {/* Services Around Circle */}
            <div className="absolute -top-25 left-1/2 -translate-x-1/2 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[0].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-36 -ml-8">
                {services[0].title}
              </p>
            </div>

            <div className="absolute top-[5%] -right-25 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[1].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-36">
                {services[1].title}
              </p>
            </div>

            <div className="absolute bottom-[5%] -right-30 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[2].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-32">
                {services[2].title}
              </p>
            </div>

            <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[3].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-44">
                {services[3].title}
              </p>
            </div>

            <div className="absolute bottom-[5%] -left-20 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[4].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-32">
                {services[4].title}
              </p>
            </div>

            <div className="absolute top-[5%] -left-30 text-center w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              <img src={services[5].image} alt="" className="mx-auto" />
              <p className="text-sm font-medium mt-2 w-32">
                {services[5].title}
              </p>
            </div>
          </div>

          {/* ✅ Grid layout for md and below */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 lg:hidden">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-4 hover:shadow-md transition"
              >
                <img src={s.image} alt={s.title} className="w-12 h-12" />
                <p className="text-sm font-medium mt-3">{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-right mt-12 lg:mt-0 lg:flex lg:flex-col items-end">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Value-added <br /> Services
          </h2>
          <p className="text-gray-500 mt-6 leading-relaxed max-w-md mx-auto lg:ml-50">
            Apart from the logistics services, Orient Star provides multiple
            plans to empower our clients' values.
          </p>
          <div className="mt-8 w-40 h-2 bg-gradient-to-r from-blue-800 to-blue-400 rounded-full mx-auto lg:mx-0"></div>
        </div>
      </div>
    </section>
  );
};

export default ValueAddedServices;

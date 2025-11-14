import React from "react";
import poms1 from "../../assets/Warehouse/poms1.png";
import poms2 from "../../assets/Warehouse/poms2.png";
import poms3 from "../../assets/Warehouse/poms3.png";
import poms4 from "../../assets/Warehouse/poms4.png";
import ims1 from "../../assets/Warehouse/ims1.png";
import ims2 from "../../assets/Warehouse/ims2.png";
import ims3 from "../../assets/Warehouse/ims3.png";
import tms1 from "../../assets/Warehouse/tms1.png";
import tms2 from "../../assets/Warehouse/tms2.png";
import tms3 from "../../assets/Warehouse/tms3.png";
import tms4 from "../../assets/Warehouse/tms4.png";

const SystemOverview = () => {
  const poms = [
    { img: poms1, title: "Integrates with the Internet" },
    { img: poms2, title: "Worldwide, interactive, real-time info" },
    { img: poms3, title: "Maximized customer values" },
    { img: poms4, title: "Availability of EDI" },
  ];

  const ims = [
    { img: ims1, title: "Better control of cargoes movement" },
    { img: ims2, title: "Reduce the overall logistics cost" },
    { img: ims3, title: "Real-time and precise Classification" },
  ];

  const tms = [
    { img: tms1, title: "End-to-end visibility" },
    { img: tms2, title: "Improved route planning" },
    { img: tms3, title: "Fleet monitoring" },
    { img: tms4, title: "Cost efficiency" },
  ];

  return (
    <section className="w-full bg-gray-100 py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* POMS Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">POMS</h2>
          <p className="text-gray-600 mt-2">PO Management System</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {poms.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={item.img} alt={item.title} className="w-24 h-24 mb-4 object-contain" />
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>

        {/* IMS & WMS Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">IMS & WMS</h2>
          <p className="text-gray-600 mt-2">Inventory & Warehouse Management System</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {ims.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={item.img} alt={item.title} className="w-24 h-24 mb-4 object-contain" />
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>

        {/* TMS Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">TMS</h2>
          <p className="text-gray-600 mt-2">Transport Management System</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tms.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={item.img} alt={item.title} className="w-24 h-24 mb-4 object-contain" />
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemOverview;

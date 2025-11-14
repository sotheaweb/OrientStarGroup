import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";

const OfficeDirectory = () => {
  const offices = [
    { 
        id: 1, 
        name: "Tianjin", 
        address: "Room 1002, Future Plaza, B Tower, No.103 Weidi Road, Hexi District, Tianjin, 300201, P.R.China", 
        category: "North China" 
    },
    { 
        id: 2, 
        name: "Dalian", 
        address: "Room 2806, Rainbow Building, No.23 Ren Min Road ZhongShan District. Dalian 116001, P.R.China", 
        category: "North China" 
    },
    { 
        id: 3, 
        name: "Qingdao", 
        address: "Room 2105, China Resource Building, Block A, No.6 Shandong Road,Shinan District, Qingdao City,China", 
        category: "East China" 
    },
    { 
        id: 4, 
        name: "Shanghai", 
        address: "RM 24A, The CATIC Tower, 212 Jiangning Road, Jingan District, Shanghai 200041, PRC", 
        category: "East China" 
    },
    { 
        id: 5, 
        name: "Ningbo", 
        address: "Room 908, COB Building,1083 E.Zhong Shan Road, Yin Zhou, Ningbo, China", 
        category: "East China" 
    },
    { 
        id: 6, 
        name: "Xiamen", 
        address: "Room 806, Fortune Center, NO.100 Lujiang Road, Xiamen, Fujian P.R. China 361001", 
        category: "South China" 
    },
    { 
        id: 7, 
        name: "Guangzhou", 
        address: "Room 805, Middle Tower, Yuexiu Neo-Metropolis, No.236, Zhongshanliu Road,Yuexiu District, Guangzhou", 
        category: "South China"
    },
    { 
        id: 8, 
        name: "Shenzhen", 
        address: "Orient Star Transport (Shenzhen) Limited Rm. 01-06, 11F, Ludan Building, No. 1011 Binhe East Road, Luohu District, Shenzhen City", 
        category: "South China" 
    },
    { 
        id: 9, 
        name: "Zhongshan", 
        address: "Flat5, 5/F Block 8, The Summit financial business center,NO.93 Dong Yu Road, East District , ZhongShan , GuangDong , PRC , 528400", 
        category: "South China" 
    },
    { 
        id: 10, 
        name: "Hong Kong", 
        address: "Orient Star Logistics (HK) Ltd. Room 8-10, 18/F, Ever Gain Plaza, Tower 1, 88 Container Port Road, Kwai Chung, N.T., Hong Kong", 
        category: "South China" 
    },
    { 
        id: 11, 
        name: "Taipei (Taiwan)", 
        address: "5/F, No. 61, Sec.3, Nanking E. Road, Taipei, Taiwan", 
        category: "South China" 
    },
    { 
        id: 12, 
        name: "Taichung (Taiwan)", 
        address: "Room 8, 5/F, No. 14, Ching Chien Road. Taichung, Taiwan", 
        category: "South China" 
    },
  ];

  const categories = ["All", "North China", "East China", "South China"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Filter by category
  const filteredOffices =
    selectedCategory === "All"
      ? offices
      : offices.filter((office) => office.category === selectedCategory);

  // Limit to 4 cards unless showAll is true
  const visibleOffices = showAll ? filteredOffices : filteredOffices.slice(0, 8);

  return (
    <div className="bg-white px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header and Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            Office Directory
          </h1>

          {/* Animated Dropdown */}
          <div className="relative w-56">
            <button
              onClick={() => setOpen(!open)}
              className="w-full bg-gray-100 text-gray-700 rounded-lg px-5 py-2 flex justify-between items-center hover:bg-gray-200 transition"
            >
              {selectedCategory}
              <span
                className={`transform transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <RiArrowDropDownLine size={24} />
              </span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-20"
                >
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpen(false);
                        setShowAll(false); // reset showAll when category changes
                      }}
                      className={`px-5 py-2 hover:bg-sky-200 cursor-pointer ${
                        selectedCategory === cat ? "bg-sky-500 text-white font-semibold" : ""
                      }`}
                    >
                      {cat}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleOffices.map((office) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white group rounded-2xl shadow-xl shadow-sky-50 border border-gray-100 hover:shadow-lg hover:bg-sky-600 transition-all duration-300"
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-gray-100">
                {office.name}
              </h2>
              <p className="text-gray-700 group-hover:text-gray-100 leading-relaxed text-sm sm:text-base">
                {office.address}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredOffices.length > 8 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 text-sky-500 hover:text-gray-100 border-1 border-sky-500 rounded-lg hover:bg-sky-500 transition font-medium cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredOffices.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No offices found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default OfficeDirectory;

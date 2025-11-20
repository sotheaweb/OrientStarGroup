import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";

const OfficeDirectory = () => {
  const offices = [
    { 
        id: 1, 
        name: "Tianjin", 
        address: "Room 1002, Future Plaza, B Tower, No.103 Weidi Road, Hexi District, Tianjin, 300201, P.R.China", 
        category: "Greater China" 
    },
    { 
        id: 2, 
        name: "Dalian", 
        address: "Room 2806, Rainbow Building, No.23 Ren Min Road ZhongShan District. Dalian 116001, P.R.China", 
        category: "Greater China" 
    },
    { 
        id: 3, 
        name: "Qingdao", 
        address: "Room 2105, China Resource Building, Block A, No.6 Shandong Road,Shinan District, Qingdao City,China", 
        category: "Greater China" 
    },
    { 
        id: 4, 
        name: "Shanghai", 
        address: "RM 24A, The CATIC Tower, 212 Jiangning Road, Jingan District, Shanghai 200041, PRC", 
        category: "Greater China" 
    },
    { 
        id: 5, 
        name: "Ningbo", 
        address: "Room 908, COB Building,1083 E.Zhong Shan Road, Yin Zhou, Ningbo, China", 
        category: "Greater China" 
    },
    { 
        id: 6, 
        name: "Xiamen", 
        address: "Room 806, Fortune Center, NO.100 Lujiang Road, Xiamen, Fujian P.R. China 361001", 
        category: "Greater China" 
    },
    { 
        id: 7, 
        name: "Guangzhou", 
        address: "Room 805, Middle Tower, Yuexiu Neo-Metropolis, No.236, Zhongshanliu Road,Yuexiu District, Guangzhou", 
        category: "Greater China"
    },
    { 
        id: 8, 
        name: "Shenzhen", 
        address: "Orient Star Transport (Shenzhen) Limited Rm. 01-06, 11F, Ludan Building, No. 1011 Binhe East Road, Luohu District, Shenzhen City", 
        category: "Greater China" 
    },
    { 
        id: 9, 
        name: "Zhongshan", 
        address: "Flat5, 5/F Block 8, The Summit financial business center,NO.93 Dong Yu Road, East District , ZhongShan , GuangDong , PRC , 528400", 
        category: "Greater China" 
    },
    { 
        id: 10, 
        name: "Hong Kong", 
        address: "Orient Star Logistics (HK) Ltd. Room 8-10, 18/F, Ever Gain Plaza, Tower 1, 88 Container Port Road, Kwai Chung, N.T., Hong Kong", 
        category: "Greater China" 
    },
    { 
        id: 11, 
        name: "Taipei (Taiwan)", 
        address: "5/F, No. 61, Sec.3, Nanking E. Road, Taipei, Taiwan", 
        category: "Greater China" 
    },
    { 
        id: 12, 
        name: "Taichung (Taiwan)", 
        address: "Room 8, 5/F, No. 14, Ching Chien Road. Taichung, Taiwan", 
        category: "Greater China" 
    },
    { 
        id: 13, 
        name: "Bangkok (Thailand)", 
        address: "Room 8, 5/F, No. 14, Ching Chien Road. Taichung, Taiwan", 
        category: "Southeast Asia" 
    },
    { 
        id: 14, 
        name: "Ha Noi (Vietnam)", 
        address: "Orient Star Logistics Co.,Ltd.The 4TH Floor, Stellar Garden Building, No. 35 Le Van Thiem Street,Thanh Xuan Trung Ward, Thanh Xuan District, Ha Noi", 
        category: "Southeast Asia" 
    },
    { 
        id: 15, 
        name: "Malaysia (Port Klang)", 
        address: "Lobby 6, Unit 530/532, 5th Floor, Block A, Damansara Intan, No.1, Jalan SS 20/27, 47400 Petaling Jaya, Selangor, Malaysia", 
        category: "Southeast Asia" 
    },
    { 
        id: 16, 
        name: "Phnom Penh (Cambodia)", 
        address: "Straits Building, No. 1008 CD, St. 128 , Sangkat Toeuk Laok1 , Khan Toul Kork, Phnom Penh , Cambodia", 
        category: "Southeast Asia" 
    },
    { 
        id: 17, 
        name: "Singapore", 
        address: "171 Chin Swee Road , #07-03 CES Centre , 169877 Singapore", 
        category: "Southeast Asia" 
    },
    { 
        id: 18, 
        name: "Ho Chi Minh City (Vietnam)", 
        address: "Orient Star Logistics Co.,Ltd.Floor 2, Dreamplex 195 Building , No. 195 Dien Bien Phu Street , Ward 15 , Binh Thanh District , H", 
        category: "Southeast Asia" 
    },
    { 
        id: 19, 
        name: "Jakarta (Indonesia)", 
        address: "Jl. Limau 1 No. 28 Kramat Pela, Kebayoran Baru, South Jakarta 12130 - Indonesia", 
        category: "Southeast Asia" 
    },
    { 
        id: 20, 
        name: "Semarang (Indonesia)", 
        address: "Wisma HSBC, 6/F, Suite 688, JL. Gajah Mada No.135, Semarang 50134, Jawa Tengah, Indonesia", 
        category: "Southeast Asia" 
    },
    { 
        id: 21, 
        name: "Surabaya (Indonesia)", 
        address: "Wisma BII Building, 7/F, Suite 719, JL. Pemuda No.60-70, Surabaya 60271, Jawa Timur, Indonesia", 
        category: "Southeast Asia" 
    },
    { 
        id: 22, 
        name: "Manila (Philippines)", 
        address: "G/F Unit C2, Echelon Tower, 2100 A. Mabini Street, Malate, Manila 1004, Philippines", 
        category: "Southeast Asia" 
    },
    { 
        id: 23, 
        name: "Mumbai", 
        address: "401-C, Filix, Opp. Asian Paints, L.B.S. Marg, Bhandup (West), Mumbai - 400 078. INDIA.", 
        category: "India" 
    },
    { 
        id: 24, 
        name: "Cochin", 
        address: "Orient Star Transport Int'l Pvt Ltd.16/858, D1 South, Orchild Apartments, Konnully , Kochupally Road , Thoppumpady Kochi-682 005", 
        category: "India" 
    },
    { 
        id: 25, 
        name: "Chennai", 
        address: "Office No.5, Upper Ground Floor, Mount Chambers, Vasan Avenue, (Opp. T.V.S.), 758, Anna Salai, CHENNAI – 600 002.", 
        category: "India" 
    },
  ];

  const categories = ["All", "Greater China", "India", "Southeast Asia"];
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

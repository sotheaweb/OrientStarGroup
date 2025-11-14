import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiChevronDown } from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menus = [
    {
      title: "Services",
      items: [
        { name: "Sea Freight", path: "/services/sea-freight" },
        { name: "Air Freight", path: "/services/air-freight" },
        { name: "3PL & Warehouse", path: "/services/3pl-warehouse" },
        { name: "IT Solutions", path: "/services/it-solutions" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Newsroom", path: "/newsroom" },
      ],
    },
  ];

  return (
    <nav className="w-full bg-white h-[9vh] md:h-[10vh] lg:h-[13vh] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12 h-full">
          {menus.map((menu) => (
            <div
              key={menu.title}
              className="relative group flex items-center h-full"
            >
              <button className="flex items-center space-x-1 text-gray-800 hover:text-sky-600 font-semibold transition-all duration-200 text-[16px] xl:text-[18px]">
                <span className="relative pb-1 after:bg-sky-600 after:transition-all after:duration-300 group-hover:after:w-full">
                  {menu.title}
                </span>
                <FiChevronDown className="text-[18px] xl:text-[20px] transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div
                className="absolute -left-10 top-22 mt-3 w-60 shadow-lg rounded-lg py-2 bg-white opacity-0 scale-y-0 origin-top transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"
              >
                {menu.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative block px-5 py-2 text-gray-700 hover:text-sky-600 transition-all duration-300 text-[15px] xl:text-[16px]"
                  >
                      <span className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full">
                        {item.name}
                      </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl sm:text-[34px] text-sky-600"
          >
            {menuOpen ? <FiX /> : <CgMenuLeft />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-white shadow-lg border-t px-5 sm:px-8 py-4 space-y-4">
          {menus.map((menu) => (
            <div key={menu.title}>
              <button
                onClick={() => toggleDropdown(menu.title)}
                className="flex justify-between w-full text-gray-800 font-semibold text-[18px] sm:text-[20px]"
              >
                <span>{menu.title}</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown === menu.title ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transform transition-all duration-300 ${
                  openDropdown === menu.title
                    ? "max-h-40 opacity-100 scale-y-100"
                    : "max-h-0 opacity-0 scale-y-0"
                }`}
              >
                {menu.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)} 
                    className="block text-gray-600 text-[16px] sm:text-[18px] pl-4 py-2 hover:text-sky-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/footer.png"; // Adjust path

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b3b91] text-white pt-16 pb-8">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Logo & Info */}
        <div>
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <h5 className="font-semibold">
            KH ORIENT STAR LOGISTICS CO., LTD.
          </h5>
          <p className="text-sm leading-6">
            <strong>Cambodia office</strong> :The Fortune Tower C7 16-07, Oknha Tep Phan St. (182) & Street 161,
            Phum 7, Sangkat Veal Vong , Khan Prampi Makara, Phnom Penh , Cambodia
          </p>
          <p className="text-sm mt-2">
            Office phone : 087 666 324/ 087 666 430
          </p>
          <p className="text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:orientstar_hkg@orientstargroup.com"
              className="underline hover:text-gray-200"
            >
              OSTPNH@orientstargroup.com
            </a>
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/sea-freight")}
            >
              Sea Freight
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/air-freight")}
            >
              Air Freight
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/3pl-warehouse")}
            >
              3PL & Warehouse
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/it-solutions")}
            >
              IT Solutions
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/about")}
            >
              About Us
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/contact")}
            >
              Contact
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/newsroom")}
            >
              Newsroom
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            Connect with us
          </h3>
          <div className="flex space-x-3 mt-2">
            {[FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition flex items-center justify-center text-white"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-6 mt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 space-y-3 md:space-y-0">
          <p className="text-center md:text-left">
            © 2025 Orient Star Transport International, Ltd. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Powered by{" "}
            <span className="font-medium text-white hover:text-gray-200 cursor-pointer">
              vancheer
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

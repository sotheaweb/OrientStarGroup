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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("foot");

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sky-600 text-white pt-16 pb-8">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Logo & Info */}
        <div>
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <h5 className="font-semibold">
            {t('location.title')}
          </h5>
          <p className="text-sm leading-6">
            {t('location.address')}
          </p>
          <p className="text-sm mt-2">
            {t('location.phone')}
          </p>
          <p className="text-sm mt-2">
            {t('location.email')}:{" "}
            <a
              href="mailto:Orientstar_hkg@orientstargroup.com"
              className="underline hover:text-gray-200"
            >
              OSTPNH@orientstargroup.com
            </a>
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            {t('services.title')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/sea-freight")}
            >
              {t('services.service1')}
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/air-freight")}
            >
              {t('services.service2')}
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/3pl-warehouse")}
            >
              {t('services.service3')}
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/services/it-solutions")}
            >
              {t('services.service4')}
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            {t('company.title')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/about")}
            >
              {t('company.aboutUs')}
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/contact")}
            >
              {t('company.contact')}
            </li>
            <li
              className="hover:underline hover:text-gray-200 cursor-pointer"
              onClick={() => handleNavigate("/newsroom")}
            >
              {t('company.newsroom')}
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
            {t('contact.title')}
          </h3>
          <div className="flex space-x-3 mt-2">
            {[
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/orient-star-group/" },
              { icon: FaYoutube, link: "https://www.youtube.com/@orientstargroup1984" },
              { icon: FaInstagram, link: "" },
              { icon: FaFacebookF, link: "https://www.facebook.com/orientstargroup" },
              { icon: FaXTwitter, link: "" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition flex items-center justify-center text-white"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
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
            © 2025 copyright HM Webix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

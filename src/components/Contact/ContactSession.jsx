import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="bg-white px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* ===== LEFT: Company Info ===== */}
        <div className="lg:pr-40">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            KH ORIENT STAR LOGISTICS CO., LTD.
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Cambodia office</strong> :The Fortune Tower C7 16-07, Oknha Tep Phan St. (182) & Street 161,
            Phum 7, Sangkat Veal Vong , Khan Prampi Makara, Phnom Penh , Cambodia
          </p>

          <p className="text-gray-700 mb-1">
            <strong>Office phone :</strong>087 666 324/ 087 666 430 
          </p>
          <p className="text-sm mt-2 mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:orientstar_hkg@orientstargroup.com"
              className="underline hover:text-sky-500"
            >
              orientstar_hkg@orientstargroup.com
            </a>
          </p>

          <h4 className="text-lg font-semibold mb-3">Official Account</h4>
          <div className="flex space-x-4">
            {[
              { icon: <FaLinkedinIn /> },
              { icon: <FaYoutube /> },
              { icon: <FaInstagram /> },
              { icon: <FaFacebookF /> },
              { icon: <FaXTwitter /> },
            ].map((social, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-sky-500 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: Inquiry Form ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">{t('form.title')}</h2>
          <form className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder= {t('form.email')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="text"
                placeholder= {t('form.companyName')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder= {t('form.name')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="text"
                placeholder= {t('form.subject')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder= {t('form.message')}
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
            ></textarea>

            {/* Captcha and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all duration-300 cursor-pointer"
              >
                {t('form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="bg-white px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ===== LEFT: Company Info ===== */}
        <div className="lg:pr-40">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Hong Kong HQ</h2>

          <h3 className="text-xl font-semibold mb-3">
            Orient Star Logistics (HK) Ltd.
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Room 8-10, 18/F, Ever Gain Plaza, Tower 1, 88 Container Port Road,
            Kwai Chung, N.T., Hong Kong
          </p>

          <p className="text-gray-700 mb-1">
            <strong>Tel:</strong> (852) 2217 1000
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Fax:</strong> (852) 2317 6937
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
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: Inquiry Form ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Inquiry Form</h2>
          <form className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email:"
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Company Name:"
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name:"
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject:"
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Please leave your message here..."
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            {/* Captcha and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

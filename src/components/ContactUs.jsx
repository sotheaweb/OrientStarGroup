import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const { t } = useTranslation("about");

  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setError("Please verify you are not a robot.");
      return;
    }

    alert("Message sent successfully! (No backend required)");
  };

  return (
    <div className="bg-white w-[100vw] flex flex-col items-center justify-center py-10">
      
      {/* Header */}
      <div
        className="text-center mb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          {t("contactUs.title")}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-5">
          {t("contactUs.desc")}
        </p>
      </div>

      {/* Form */}
      <div
        className="w-[100%] max-w-6xl p-6 sm:p-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="email"
              placeholder={t("contactUs.form.email")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900"
            />
            <input
              type="text"
              placeholder={t("contactUs.form.nameCompany")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder={t("contactUs.form.name")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900"
            />
            <input
              type="text"
              placeholder={t("contactUs.form.subject")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder={t("contactUs.form.message")}
            rows="5"
            className="w-full p-3 bg-gray-200 rounded-md text-gray-900 resize-none"
          ></textarea>

          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6Leg0x4sAAAAAHIKl8aORTwgn3pbp69YJycx2Bgb"
            onChange={(value) => {
              setCaptchaValue(value);
              setError("");
            }}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full lg:w-[15vw] px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
          >
            {t("contactUs.form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

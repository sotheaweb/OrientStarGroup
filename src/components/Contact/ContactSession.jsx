import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  const [form, setForm] = useState({
    email: "",
    company: "",
    name: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // ❌ Check empty required fields
    if (
      !form.email ||
      !form.company ||
      !form.name ||
      !form.subject ||
      !form.message
    ) {
      Swal.fire({
        title: t("contact.form.missing"),
        text: t("contact.form.descE"),
        icon: "error",
        confirmButtonText: t("contact.form.comfirm"),
      });
      return;
    }
  
    emailjs
      .send(
        "service_dc3o8on",     // <-- Replace
        "template_0khmzys",    // <-- Replace
        {
          from_email: form.email,
          company: form.company,
          from_name: form.name,
          subject: form.subject,
          message: form.message,
        },
        "JpPiRGUU0pI9GsfR0"       // <-- Replace
      )
      .then(() => {
        Swal.fire({
          title: t("contact.form.success"),
          text: t("contact.form.descS"),
          icon: "success",
          confirmButtonText: t("contact.form.comfirm"),
        });

        // Reset form
        setForm({
          email: "",
          company: "",
          name: "",
          subject: "",
          message: ""
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Email Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
    };

  return (
    <div className="bg-white px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* ===== LEFT: Company Info ===== */}
        <div className="lg:pr-40">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            {t('location.title')}
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed mt-5">
            {t('location.address')}
          </p>

          <p className="text-gray-700 mb-1">
            {t('location.phone')}
          </p>
          <p className="text-sm mt-2 mb-2">
            <strong>{t('location.email')}:</strong>{" "}
            <a
              href="mailto:Orientstar_hkg@orientstargroup.com"
              className="underline hover:text-sky-500"
            >
              Orientstar_hkg@orientstargroup.com
            </a>
          </p>

          <h4 className="text-lg font-semibold mb-3">{t('location.account')}</h4>
          <div className="flex space-x-3 mt-2">
            {[
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/orient-star-group/" },
              { icon: FaYoutube, link: "https://www.youtube.com/@orientstargroup1984" },
              { icon: FaFacebookF, link: "https://www.facebook.com/orientstargroup" },
              { icon: IoLogoWechat, link: "https://www.orientstargroup.com/en/wechat.php" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-sky-500 hover:text-white"
              >
                <item.icon className="w-4 h-4 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: Inquiry Form ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">{t('form.title')}</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder= {t('form.email')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder= {t('form.companyName')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder= {t('form.name')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder= {t('form.subject')}
                className="flex-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
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

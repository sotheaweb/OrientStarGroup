import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const ContactUs = () => {
  const { t } = useTranslation("about");

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
        title: t("contactUs.form.missing"),
        text: t("contactUs.form.descE"),
        icon: "error",
        confirmButtonText: t("contactUs.form.comfirm"),
      });
      return;
    }

    // ✅ Success alert
    Swal.fire({
      title: t("contactUs.form.success"),
      text: t("contactUs.form.descS"),
      icon: "success",
      confirmButtonText: t("contactUs.form.comfirm"),
    });

    // Reset form
    setForm({
      email: "",
      company: "",
      name: "",
      subject: "",
      message: ""
    });
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
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contactUs.form.email")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder={t("contactUs.form.nameCompany")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contactUs.form.name")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder={t("contactUs.form.subject")}
              className="flex-1 p-3 bg-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("contactUs.form.message")}
            rows="5"
            className="w-full p-3 bg-gray-200 rounded-md text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full lg:w-[15vw] px-6 py-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition-all cursor-pointer"
          >
            {t("contactUs.form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

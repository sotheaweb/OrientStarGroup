import React from "react";
import Hero from "../components/Contact/Hero";
import ContactSection from "../components/Contact/ContactSession";
import GlobalNetwork from "../components/Contact/GlobalNetwork";
import OfficeDirectory from "../components/Contact/OfficeDirectory";
import NavbarScroll from "../components/NavbarScroll";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");
  const menu = [
    {
      id: "Ho & inquiry Form",
      label: t("navbarScroll.contactForm")
    }, 
    {
      id: "Global Network",
      label: t("navbarScroll.globslNetwork")
    }, 
    {
      id: "Office Directory",
      label: t("navbarScroll.officeDirectoty")
    }
  ];

  return (
    <div className="scroll-smooth">
     
      <Hero />
      <NavbarScroll menu={menu} />
        {/* Add id for scrolxl detection */}
      <div id="Ho & inquiry Form">
        <ContactSection />
      </div>

      <div id="Global Network">
          <GlobalNetwork />
      </div>

      <div id="Office Directory">
          <OfficeDirectory />
      </div>
    </div>
  );
};

export default Contact;

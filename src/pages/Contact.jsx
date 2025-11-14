import React from "react";
import Hero from "../components/Contact/Hero";
import ContactSection from "../components/Contact/ContactSession";
import GlobalNetwork from "../components/Contact/GlobalNetwork";
import OfficeDirectory from "../components/Contact/OfficeDirectory";
import NavbarScroll from "../components/Contact/NavbarScroll";

const Contact = () => {
  return (
    <div className="scroll-smooth">
      <Hero />

      <NavbarScroll />

      {/* Add id for scroll detection */}
      <div id="ContactSection">
        <ContactSection />
      </div>

      <div id="GlobalNetwork">
        <GlobalNetwork />
      </div>

      <div id="OfficeDirectory">
        <OfficeDirectory />
      </div>
    </div>
  );
};

export default Contact;

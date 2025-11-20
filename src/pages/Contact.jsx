import React from "react";
import Hero from "../components/Contact/Hero";
import ContactSection from "../components/Contact/ContactSession";
import GlobalNetwork from "../components/Contact/GlobalNetwork";
import OfficeDirectory from "../components/Contact/OfficeDirectory";
import NavbarScroll from "../components/NavbarScroll";

const Contact = () => {

  const data = ["Ho & inquiry Form", "Global Network", "Office Directory"]

  return (
    <div className="scroll-smooth">
     
      <Hero />
      <NavbarScroll menu={data} />
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

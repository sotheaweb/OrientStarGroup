import React from 'react'
import HeroContainer from '../components/HeroContainer'
import heroImage from "../assets/SeaFreight/heroSeaFreight.jpg";
import Accreditation from '../components/SeaFreight/Accreditation.jsx';
import RangOfServices from '../components/SeaFreight/RangOfServices.jsx';
import Carriers from '../components/SeaFreight/Carriers.jsx';
import ITSolution from '../components/SeaFreight/ITSolution.jsx';
import ContactUs from "../components/ContactUs.jsx"
import NavbarScroll from '../components/NavbarScroll.jsx';

const SeaFreight = () => {
  const heroData = { 
      image: heroImage,
      title: "Sea Freight",
      description: `Our reliable global shipping solutions are designed to meet your diverse needs, 
                    ensuring timely and secure delivery.

                    With a vast network and advanced technology, we handle all cargo types, 
                    providing cost-effective and efficient services.`
  }

  const menu = ["Accreditation", "Range of Services", "Carriers, Routes & Modes", "IT Solutions", "Contact Form"]
  return (
    <div>
      <HeroContainer img={heroData.image} title={heroData.title} des={heroData.description} />
      <NavbarScroll menu={menu}/>
      <div id='Accreditation'><Accreditation /></div>
      <div id="Range of Services"><RangOfServices /></div>
      <div id="Carriers, Routes & Modes"><Carriers /></div>
      <div id="IT Solutions"><ITSolution /></div>
      <div id="Contact Form"><ContactUs /></div>
    </div>
  )
}

export default SeaFreight

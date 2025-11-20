import React from 'react'
import hero from "../assets/AirFreight/heroAirFreight.jpg"
import HeroContainer from '../components/HeroContainer'
import Overview from '../components/AirFreight/Overview'
import ITSolution from '../components/SeaFreight/ITSolution'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import NavbarScroll from '../components/NavbarScroll'

const AirFreight = () => {

  const Hero = {
    image: hero,
    title: "Air Freight",
    des: `For time-sensitive and high-value cargo.our fast and effcient air freight 
          servicesensure swift delivery worldwide.
          With real-time tracking and experthandling, we prioritize your shipments tomeet tight 
          deadlines, offering peace ofmind.`
  }

  const menu = ["Overview", "IT Solutions", "Qualifcations", "Contact Form"]

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des}/>
      <NavbarScroll menu={menu}/>
      <div id="Overview"><Overview /></div>
      <div id="IT Solutions"><ITSolution /></div>
      <div id="Qualifcations"><Qualifications /></div>
      <div id="Contact Form"><ContactUs /></div>
    </div>
  )
}

export default AirFreight

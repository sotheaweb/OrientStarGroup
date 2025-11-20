import React from 'react'
import HeroContainer from '../components/HeroContainer'
import heroWarehouse from "../assets/Warehouse/hero.jpg"
import SystemOverview from '../components/Warehouse/SystemOverview'
import ValueService from '../components/Warehouse/ValueService'
import Benefit from '../components/Warehouse/Benefit'
import ITSolution from '../components/SeaFreight/ITSolution'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import NavbarScroll from '../components/NavbarScroll'

const Warehouse = () => {

  const Hero = {
    image: heroWarehouse,
    title: "Integrated Logistics",
    des: `Your supply chain, simplifed. Orient Star Group powers seamless logistics-from 
          purchase order to fnal mile-as your trusted partner in growth.`
  }

  const menu = ["POMS, IMS & WMS, TMS", "Value-added Services", "Benefits", "IT Solutions", "Qualifcations", "Contact Form"]

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} />
      <NavbarScroll menu={menu}/>
      <div id="POMS, IMS & WMS, TMS"><SystemOverview /></div>
      <div id="Value-added Services"><ValueService /></div>
      <div id="Benefits"><Benefit /></div>
      <div id="IT Solutions"><ITSolution /></div>
      <div id="Qualifcations"><Qualifications /></div>
      <div id="Contact Form"><ContactUs /></div>
    </div>
  )
}

export default Warehouse

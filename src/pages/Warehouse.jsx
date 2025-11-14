import React from 'react'
import HeroContainer from '../components/HeroContainer'
import heroWarehouse from "../assets/Warehouse/hero.jpg"
import SystemOverview from '../components/Warehouse/SystemOverview'
import ValueService from '../components/Warehouse/ValueService'
import Benefit from '../components/Warehouse/Benefit'
import ITSolution from '../components/SeaFreight/ITSolution'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'

const Warehouse = () => {

    const Hero = {
        image: heroWarehouse,
        title: "Integrated Logistics",
        des: `Your supply chain, simplifed. Orient Star Group powers seamless logistics-from 
                purchase order to fnal mile-as your trusted partner in growth.`
    }

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} />
      <SystemOverview />
      <ValueService />
      <Benefit />
      <ITSolution />
      <Qualifications />
      <ContactUs />
    </div>
  )
}

export default Warehouse

import React from 'react'
import hero from "../assets/AirFreight/heroAirFreight.jpg"
import HeroContainer from '../components/HeroContainer'
import Overview from '../components/AirFreight/Overview'
import ITSolution from '../components/SeaFreight/ITSolution'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'

const AirFreight = () => {

    const Hero = {
        image: hero,
        title: "Air Freight",
        des: `For time-sensitive and high-value cargo.our fast and effcient air freight 
                servicesensure swift delivery worldwide.

                With real-time tracking and experthandling, we prioritize your shipments tomeet tight 
                deadlines, offering peace ofmind.`
    }

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des}/>
      <Overview />
      <ITSolution />
      <Qualifications />
      <ContactUs />
    </div>
  )
}

export default AirFreight

import React from 'react'
import hero from '../assets/ITSolution/hero.jpg'
import HeroContainer from '../components/HeroContainer'
import CoreSystem from '../components/ITSolution/CoreSystem'
import Integration from '../components/ITSolution/Integration'
import VisibilityControl from '../components/ITSolution/VisibilityControl'
import ClientExperience from '../components/ITSolution/ClientExperience'
import NavbarScroll from '../components/NavbarScroll'

const ITSolution = () => {

  const Hero = {
    image: hero,
    title: "IT Solution",
    des: `At Orient Star Group, technology is.atthe heart of our logistics operations.Our 
          integrated digital platformempowers you with real-timevisibility, automation, and 
          control-delivering smarter, faster, and morereliable supply chain execution.`
  }

  const menu = ["Core System Capabilities", "Integration & Connectivity", "Visibility, Control & Analytics", "Client Experience & Usability"]

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} />
      <NavbarScroll menu={menu}/>
      <div id="Core System Capabilities"><CoreSystem /></div>
      <div id="Integration & Connectivity"><Integration /></div>
      <div id="Visibility, Control & Analytics"><VisibilityControl /></div>
      <div id="Client Experience & Usability"><ClientExperience /></div>
    </div>
  )
}

export default ITSolution

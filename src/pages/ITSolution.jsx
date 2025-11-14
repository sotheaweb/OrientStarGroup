import React from 'react'
import hero from '../assets/ITSolution/hero.jpg'
import HeroContainer from '../components/HeroContainer'
import CoreSystem from '../components/ITSolution/CoreSystem'
import Integration from '../components/ITSolution/Integration'
import VisibilityControl from '../components/ITSolution/VisibilityControl'
import ClientExperience from '../components/ITSolution/ClientExperience'

const ITSolution = () => {

    const Hero = {
        image: hero,
        title: "IT Solution",
        des: `At Orient Star Group, technology is.atthe heart of our logistics operations.Our 
            integrated digital platformempowers you with real-timevisibility, automation, and 
            control-delivering smarter, faster, and morereliable supply chain execution.`
    }

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} />
      <CoreSystem />
      <Integration />
      <VisibilityControl />
      <ClientExperience />
    </div>
  )
}

export default ITSolution

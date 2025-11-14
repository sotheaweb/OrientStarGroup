import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Welcome from '../components/About/Welcome'
import OurStory from '../components/About/OurStory'
import OurTeam from '../components/About/OurTeam'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import heroImage from "../assets/About/heroAbout.jpg";

const About = () => {

  const heroData = 
    { 
      image: heroImage,
      title: "About Us",
      description: `Established in 1984 in Taiwan, Orient StarGroup boasts over 41 years
                    of experience in the logistics industry, ensuring a reputation for
                    strong credibility and professionalism.`
    }

  return (
    <div>
      <HeroContainer img={heroData.image} title={heroData.title} des={heroData.description} />
      <Welcome />
      <OurStory />
      <OurTeam />
      <Qualifications />
      <ContactUs />
    </div>
  )
}

export default About

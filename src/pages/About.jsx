import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Welcome from '../components/About/Welcome'
import OurStory from '../components/About/OurStory'
import OurTeam from '../components/About/OurTeam'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import heroImage from "../assets/About/heroAbout.jpg";
import NavbarScroll from '../components/NavbarScroll'

const About = () => {

  const heroData = { 
      image: heroImage,
      title: "About Us",
      description: `Established in 1984 in Taiwan, Orient StarGroup boasts over 41 years
                    of experience in the logistics industry, ensuring a reputation for
                    strong credibility and professionalism.`
  }

  const menu = ["President's Message", "Our Story", "Meet Our Team", "Qualifications", "Contact Form"];

  return (
    <div>
      <HeroContainer img={heroData.image} title={heroData.title} des={heroData.description} />
      <NavbarScroll menu={menu}/>
      <div id="President's Message">
        <Welcome />
      </div>
      
      <div id='Our Story'>
        <OurStory />
      </div>

      <div id='Meet Our Team'>
        <OurTeam />
      </div>

      <div id='Qualifications'>
        <Qualifications />
      </div>

      <div id='Contact Form'>
        <ContactUs />
      </div>
      
    </div>
  )
}

export default About

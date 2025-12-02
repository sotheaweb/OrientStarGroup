import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Welcome from '../components/About/Welcome'
import OurStory from '../components/About/OurStory'
import OurTeam from '../components/About/OurTeam'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import heroImage from "../assets/About/heroAbout.jpg";
import NavbarScroll from '../components/NavbarScroll'
import { useTranslation } from 'react-i18next'

const About = () => {

  const { t } = useTranslation("about");

  const heroData = { 
      image: heroImage,
      title: t('aboutUs.title'),
      description: t('aboutUs.intro'),
      contactBtn: t('aboutUs.contactBtn')
  }

  const menu = [
    {
      id: "President's Message",
      label:t('navbarScroll.presidentMessage')}, 
    {
      id: 'Our Story',
      label: t("navbarScroll.ourStory")
    }, 
    {
      id: 'Meet Our Team',
      label: t("navbarScroll.meetOurTeam")
    }, 
    {
      id: 'Qualifications',
      label: t("navbarScroll.qualifications")
    }, 
    {
      id: 'Contact Form',
      label: t("navbarScroll.contactForm")
    }
  ];

  return (
    <div>
      <HeroContainer img={heroData.image} title={heroData.title} des={heroData.description} contactBtn={heroData.contactBtn}/>
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

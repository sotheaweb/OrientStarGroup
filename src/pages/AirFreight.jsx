import React from 'react'
import hero from "../assets/AirFreight/heroAirFreight.jpg"
import HeroContainer from '../components/HeroContainer'
import Overview from '../components/AirFreight/Overview'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import NavbarScroll from '../components/NavbarScroll'
import { useTranslation } from 'react-i18next'

const AirFreight = () => {

  const { t } = useTranslation("airFreight");

  const Hero = {
    image: hero,
    title: t('ariFreight.title'),
    des: t('ariFreight.desc'),
    contactBtn: t('ariFreight.contactBtn')
  }

  const menu = [
    {id: "1", label: "Overview"}, 
    {id: "2", label: "Qualifcations"}, 
    {id: "3", label: "Contact Form"}
  ]

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} contactBtn={Hero.contactBtn}/>
      <NavbarScroll menu={menu}/>
      <div id="1"><Overview /></div>
      <div id="2"><Qualifications /></div>
      <div id="3"><ContactUs /></div>
    </div>
  )
}

export default AirFreight

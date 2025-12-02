import React from 'react'
import HeroContainer from '../components/HeroContainer'
import heroWarehouse from "../assets/Warehouse/hero.jpg"
import SystemOverview from '../components/Warehouse/SystemOverview'
import ValueService from '../components/Warehouse/ValueService'
import Benefit from '../components/Warehouse/Benefit'
import Qualifications from '../components/Qualifications'
import ContactUs from '../components/ContactUs'
import NavbarScroll from '../components/NavbarScroll'
import { useTranslation } from 'react-i18next'

const Warehouse = () => {
  const { t } = useTranslation("warehouse");

  const Hero = {
    image: heroWarehouse,
    title: t('integratedLogistics.title'),
    des: t('integratedLogistics.desc'),
  contactBtn: t('integratedLogistics.contactButton')
  }

  const menu = [
    {id: "1", label: t('navbarScroll.section1')},
    {id: "2", label: t('navbarScroll.section2')},
    {id: "3", label: t('navbarScroll.section3')},
    {id: "4", label: t('navbarScroll.section4')},
    {id: "5", label: t('navbarScroll.section5')},
  ]

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} contactBtn={Hero.contactBtn}/>
      <NavbarScroll menu={menu}/>
      <div id="1"><SystemOverview /></div>
      <div id="2"><ValueService /></div>
      <div id="3"><Benefit /></div>
      <div id="4"><Qualifications /></div>
      <div id="5"><ContactUs /></div>
    </div>
  )
}

export default Warehouse

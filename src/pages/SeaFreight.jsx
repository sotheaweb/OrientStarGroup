import React from 'react'
import HeroContainer from '../components/HeroContainer'
import heroImage from "../assets/SeaFreight/heroSeaFreight.jpg";
import Accreditation from '../components/SeaFreight/Accreditation.jsx';
import RangOfServices from '../components/SeaFreight/RangOfServices.jsx';
import Carriers from '../components/SeaFreight/Carriers.jsx';
import ContactUs from "../components/ContactUs.jsx"
import NavbarScroll from '../components/NavbarScroll.jsx';
import { useTranslation } from 'react-i18next';

const SeaFreight = () => {

  const { t } = useTranslation("seaFreight");

  const heroData = { 
      image: heroImage,
      title: t('seaFreight.title'),
      description: t('seaFreight.desc'),
      contactBtn: t('seaFreight.contactBtn')
  }

  const menu = [
    {id: "1", label: "Accreditation"}, 
    {id: "2", label: "Range of Services"}, 
    {id: "3", label: "Carriers, Routes & Modes"}, 
    {id: "4", label: "Contact Form"}
  ];
  return (
    <div>
      <HeroContainer img={heroData.image} title={heroData.title} des={heroData.description} contactBtn={heroData.contactBtn}/>
      <NavbarScroll menu={menu}/>
      <div id='1'><Accreditation /></div>
      <div id="2"><RangOfServices /></div>
      <div id="3"><Carriers /></div>
      <div id="4"><ContactUs /></div>
    </div>
  )
}

export default SeaFreight

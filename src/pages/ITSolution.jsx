import React from 'react'
import hero from '../assets/ITSolution/hero.jpg'
import HeroContainer from '../components/HeroContainer'
import CoreSystem from '../components/ITSolution/CoreSystem'
import Integration from '../components/ITSolution/Integration'
import VisibilityControl from '../components/ITSolution/VisibilityControl'
import ClientExperience from '../components/ITSolution/ClientExperience'
import NavbarScroll from '../components/NavbarScroll'
import { useTranslation } from 'react-i18next'

const ITSolution = () => {
  const { t } = useTranslation('itSolution');

  const Hero = {
    image: hero,
    title: t('itSolution.title'),
    des: t('itSolution.desc'),
    contactBtn: t('itSolution.contactBtn')
  }

  const menu = [
    {id: "1", label: t('navbarScroll.section1')},
    {id: "2", label: t('navbarScroll.section2')},
    {id: "3", label: t('navbarScroll.section3')},
    {id: "4", label: t('navbarScroll.section4')}
  ]

  return (
    <div>
      <HeroContainer img={Hero.image} title={Hero.title} des={Hero.des} contactBtn={Hero.contactBtn}/>
      <NavbarScroll menu={menu}/>
      <div id="1"><CoreSystem /></div>
      <div id="2"><Integration /></div>
      <div id="3"><VisibilityControl /></div>
      <div id="4"><ClientExperience /></div>
    </div>
  )
}

export default ITSolution

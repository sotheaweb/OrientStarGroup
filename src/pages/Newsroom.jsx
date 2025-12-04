import React from 'react'
import Page1 from '../components/NewsRoom/Hero.jsx'
import News from '../components/NewsRoom/News.jsx'
import seaFreight from '../assets/News/seaFreight.jpg'
import technology from '../assets/News/technology.jpg'
import { useTranslation } from 'react-i18next'

const Newsroom = () => {
  const {t} = useTranslation('news');

  const news = [
    {
      id: 1,
      title: t('joc.title'),
      desc: t('joc.desc'),
      image: seaFreight,
      date: t('joc.date'),
    },
    {
      id: 2,
      title: t('ost.title'),
      desc: t('ost.desc'),
      image: technology,
      date: t('ost.date'),
    }
  ];

  return (
    <div>
      <Page1 newsData={news} />
      <News newsData={news} />
    </div>
  )
}

export default Newsroom

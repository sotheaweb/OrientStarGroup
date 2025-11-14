import React from 'react'
import Page1 from '../components/NewsRoom/Hero.jsx'
import News from '../components/NewsRoom/News.jsx'
import heronews from '../assets/News/heronews.jpg'
import laptop from '../assets/News/laptop.jpg'
import technology from '../assets/News/technology.jpg'

const Newsroom = () => {

  const sampleNews = [
    {
      id: 1,
      title: "JOC Rankings: Disruption boosts NVOs to majority share",
      desc: "US importers have increasingly turned to non-vessel-operating common carriers...",
      image: laptop,
      date: "2025-04-08",
    },
    {
      id: 2,
      title: "OST HONGKONG WAREHOUSE - Inventory & Warehouse System",
      desc: "Our sophisticated warehouse providing 3rd party logistics solution for cargo distribution...",
      image: technology,
      date: "2025-04-09",
    },
    {
      id: 3,
      title: "Trade Expansion Drives Logistics Growth in Asia-Pacific",
      desc: "Asia-Pacific logistics markets are seeing strong growth due to increased cross-border trade...",
      image: heronews,
      date: "2025-04-10",
    },
    {
      id: 4,
      title: "Technology Modernizing Freight Systems",
      desc: "Digital transformation continues to streamline freight and shipping processes worldwide...",
      image: heronews,
      date: "2025-04-11",
    },
  ];

  return (
    <div>
      <Page1 />
      <News newsData={sampleNews} />
    </div>
  )
}

export default Newsroom

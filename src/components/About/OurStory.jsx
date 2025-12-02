import { div, image } from "framer-motion/client";
import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/About/1984-2000.png";
import image2 from "../../assets/About/2001-2010.png";
import image3 from "../../assets/About/2011-2020.png";

export default function OurStory() {
  const { t } = useTranslation("about");

  const data = [
    {
      period: t('ourStory.timeline.0.conclude.year'),
      years: [
        { year: t("ourStory.timeline.0.years.0.year"), desc: t("ourStory.timeline.0.years.0.event") },
        { year: t("ourStory.timeline.0.years.1.year"), desc: t("ourStory.timeline.0.years.1.event") },
        { year: t("ourStory.timeline.0.years.2.year"), desc: t("ourStory.timeline.0.years.2.event") },
        { year: t("ourStory.timeline.0.years.3.year"), desc: t("ourStory.timeline.0.years.3.event") },
        { year: t("ourStory.timeline.0.years.4.year"), desc: t("ourStory.timeline.0.years.4.event") },
      ],
      title: t('ourStory.timeline.0.conclude.year'),
      text: t('ourStory.timeline.0.conclude.des'),
      image: image1
    },
    {
      period: t('ourStory.timeline.1.conclude.year'),
      years: [
        { year: t("ourStory.timeline.1.years.0.year"), desc: t("ourStory.timeline.1.years.0.event") },
        { year: t("ourStory.timeline.1.years.1.year"), desc: t("ourStory.timeline.1.years.1.event") },
        { year: t("ourStory.timeline.1.years.2.year"), desc: t("ourStory.timeline.1.years.2.event") },
        { year: t("ourStory.timeline.1.years.3.year"), desc: t("ourStory.timeline.1.years.3.event") },
        { year: t("ourStory.timeline.1.years.4.year"), desc: t("ourStory.timeline.1.years.4.event") },
      ],
      title: t('ourStory.timeline.1.conclude.year'),
      text: t('ourStory.timeline.1.conclude.des'),
      image: image2
    },
    {
      period: t('ourStory.timeline.2.conclude.year'),
      years: [
        { year: t("ourStory.timeline.2.years.0.year"), desc: t("ourStory.timeline.2.years.0.event") },
        { year: t("ourStory.timeline.2.years.1.year"), desc: t("ourStory.timeline.2.years.1.event") },
        { year: t("ourStory.timeline.2.years.2.year"), desc: t("ourStory.timeline.2.years.2.event") },
      ],
      title: t('ourStory.timeline.2.conclude.year'),
      text: t('ourStory.timeline.2.conclude.des'),
      image: image3
    },
    {
      period: t('ourStory.timeline.3.conclude.year'),
      years: [
        { year: t("ourStory.timeline.3.years.0.year"), desc: t("ourStory.timeline.3.years.0.event") },
      ],
      title: t('ourStory.timeline.3.conclude.year'),
      text: t('ourStory.timeline.3.conclude.des'),
    },
  ];

  return (
    <div className="w-full bg-white py-10 px-5">
        <div className="max-w-7xl mx-auto mb-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
            <div className=" mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{t('ourStory.title')}</h1>
                <p className="text-lg text-gray-600 max-w-3xl mt-2">{t('ourStory.intro')}</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="relative max-w-7xl w-full ">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/4 top-0 h-full border-l-5 border-sky-900"></div>

            {data.map((item, index) => (
                <div
                key={index}
                className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 mb-20"
                >
                {/* Left Years */}
                <div className="lg:w-1/4 text-right lg:pr-6">
                    <h2 className="hidden lg:block text-2xl font-bold text-sky-600 mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                      {item.period}
                    </h2>
                    <div className="space-y-6 text-gray-700 font-semibold">
                    {item.years.map((y, idx) => (
                        <div key={idx} className="lg:relative">
                        {/* Year Box (Only hover this!) */}
                        <div className="group inline-block lg:cursor-pointer mx-auto w-full bg-gray-50 py-2 rounded-lg lg:bg-white">
                            <p className="transition-all duration-300 md:text-xl lg:text-2xl px-5 lg:p-2"
                              data-aos="fade-up"
                              data-aos-duration="1000"
                            >
                              {y.year}
                            </p>

                            {/* Description Box - ONLY show when hover year */}
                            <div
                            className="
                                lg:absolute
                                top-0
                                left-82 
                                lg:w-[17vw]
                                p-3 
                                lg:border 
                                lg:border-gray-200 
                                rounded-lg 
                                shadow-lg 
                                lg:opacity-0 
                                lg:group-hover:opacity-100 
                                transition 
                                duration-300 
                                break-words
                                pointer-events-none
                            "
                            >
                            <p className="text-sm text-gray-600 text-left">
                                {y.desc}
                            </p>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Circle Indicator */}
                <div className="hidden xl:block -ml-79 z-10">
                    <div className="w-5 h-5 bg-white border-2 border-sky-500 rounded-full"></div>
                </div>

                {/* Right Content */}
                <div className="lg:w-2/4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                    <div className="bg-gray-50 shadow-md rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 whitespace-pre-line mb-4">
                        {item.text}
                    </p>
                    </div>
                    <div className="mt-10">
                      <img src={item.image} alt="" className="w-70"/>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
}

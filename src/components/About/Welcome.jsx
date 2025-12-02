import React from 'react'
import profileImg from '../../assets/About/president.png'
import { useTranslation } from 'react-i18next'

const Welcome = () => {
  const { t } = useTranslation("about");

  return (
    <div className="w-full bg-white py-20 px-4 md:px-20 lg:px-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
      {/* Title */}
      <h1 
        className="text-3xl sm:text-4xl font-bold text-gray-800 text-center"
      >
        {t('welcome.title')}
      </h1>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-15 max-w-7xl mx-auto">
        
        {/* Left box: Text */}
        <div 
          className="w-full lg:w-4/3 bg-white shadow-xl/30 shadow-gray-800 rounded-lg p-6 md:p-8 text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>{t('welcome.intro')}</p>
          <p className="mt-4 font-semibold">{t('welcome.mission')}</p>

          <ul className="ml-6 mt-4 space-y-2">
            <li><strong>{t('welcome.list.innovation.title')}</strong> {t('welcome.list.innovation.desc')}</li>
            <li><strong>{t('welcome.list.global.title')}</strong> {t('welcome.list.global.desc')}</li>
            <li><strong>{t('welcome.list.partnership.title')}</strong> {t('welcome.list.partnership.desc')}</li>
            <li><strong>{t('welcome.list.empower.title')}</strong> {t('welcome.list.empower.desc')}</li>
          </ul>

          <p className="mt-4">{t('welcome.conclusion')}</p>

          <p className="mt-4 font-semibold">{t('welcome.thanks')}</p>
        </div>

        {/* Right box: Profile */}
        <div 
          className="w-full lg:w-1/3 flex flex-col items-center mt-10 lg:mt-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt={t('welcome.presidentAlt')}
              className="w-48 h-48 md:w-50 md:h-50 object-cover rounded-full border-4 border-white shadow-xl/30 shadow-gray-800"
            />
          </div>
          <p className="text-center text-lg font-semibold mt-4 text-gray-800">
            {t('welcome.presidentName')}
          </p>
          <p className="text-center text-sm text-gray-600">{t('welcome.presidentPosition')}</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome

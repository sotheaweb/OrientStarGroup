import React from 'react'
import profileImg from '../../assets/About/president.png' // ប្តូរទៅ path របស់រូបអ្នក

const Welcome = () => {
  return (
    <div className="w-full bg-white py-20 px-4 md:px-20 lg:px-0">
      {/* Title */}
      <h1 
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-gray-800"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Welcome to Orient Star Group
      </h1>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-15 max-w-6xl mx-auto">
        
        {/* Left box: Text */}
        <div 
          className="w-full lg:w-4/3 bg-white shadow-xl/30 shadow-gray-800 rounded-lg p-6 md:p-8 text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            Since 1984, Orient Star Group has been a trusted partner in global logistics,
            evolving with the demands of trade. Today, we go beyond transporting goods—we
            deliver seamless, innovative solutions that drive your success.
          </p>

          <ul className="ml-6 mt-4 space-y-2">
            <li>
              <strong>Innovation in Action:</strong> We harness cutting-edge tools to ensure
              fast, reliable logistics.
            </li>
            <li>
              <strong>Global Reach, Local Expertise:</strong> Our network across Greater China,
              Southeast Asia, and India delivers unmatched insight.
            </li>
            <li>
              <strong>Partnerships That Last:</strong> We build trust through tailored service
              and deep market knowledge.
            </li>
            <li>
              <strong>Empowering Our People:</strong> We invest in continuous training to
              cultivate skilled professionals.
            </li>
          </ul>

          <p className="mt-4">
            With a legacy of resilience and a vision for the future, Orient Star Group makes
            global logistics effortless for your business.
          </p>

          <p className="mt-4 font-semibold">
            Thank you for being part of our story.
          </p>
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
              alt="President Profile"
              className="w-48 h-48 md:w-50 md:h-50 object-cover rounded-full border-4 border-white shadow-xl/30 shadow-gray-800"
            />
          </div>
          <p className="text-center text-lg font-semibold mt-4 text-gray-800">
            Jonathan Tseng
          </p>
          <p className="text-center text-sm text-gray-600">President</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome

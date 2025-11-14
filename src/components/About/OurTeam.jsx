import React, { useEffect, useState } from "react";
import president from "../../assets/About/president.png";

const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sizes, setSizes] = useState({ expanded: 35, collapsed: 20, normal: 25 });

  const teamMembers = [
    {
      name: "Richard Chu",
      position: "Director, Sales & Marketing",
      image: president,
      description: `Alison leads regional strategy and digital innovation 
      at OST, driving growth and adaptability. She spearheads Orient Net,
      OST's in-house logistics platform, and shapes strategic planning and
      partner development. Her sharp market insights and tech-forward
      leadership are powering OST's evolution into a next-generation
      logistics service provider.`,
    },
    {
      name: "Jane Smith",
      position: "Chief Operating Officer",
      image: president,
      description:
        "Jane oversees global operations and ensures seamless coordination across departments. Her focus on efficiency and innovation has significantly optimized OST’s logistics and customer experience.",
    },
    {
      name: "Michael Lee",
      position: "Finance Director",
      image: president,
      description:
        "Michael drives OST’s financial growth strategies, managing budgets, forecasting, and investment. His financial acumen ensures the company’s sustainable expansion.",
    },
    {
      name: "Sophia Chan",
      position: "Director of HR & Development",
      image: president,
      description:
        "Sophia fosters a culture of growth and collaboration at OST. She leads talent development, recruitment, and employee engagement across all regions.",
    },
  ];

  useEffect(() => {
    const calcSizes = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setSizes({ expanded: 100, collapsed: 100, normal: 100 });
      } else if (w >= 768 && w < 1024) {
        setSizes({ expanded: 60, collapsed: 20, normal: 40 / teamMembers.length });
      } else {
        setSizes({
          expanded: 35,
          collapsed: 15,
          normal: Math.max(20, Math.floor((100 - 35) / (teamMembers.length - 1))),
        });
      }
    };
    calcSizes();
    window.addEventListener("resize", calcSizes);
    return () => window.removeEventListener("resize", calcSizes);
  }, [teamMembers.length]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 bg-gray-100 px-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
        Meet Our Team
      </h1>
      <p className="text-gray-500 mt-6 max-w-2xl text-center">
        Orient Star benefits from the unwavering support of its professional and experienced team members.
      </p>

      <div className="mt-12 w-full max-w-7xl">
        <div className="flex flex-col md:px-20 lg:flex-row justify-center gap-6 md:gap-10 lg:gap-6 lg:px-0">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredIndex === index;
            const isOther = hoveredIndex !== null && hoveredIndex !== index;
            let percent;
            if (isHovered) percent = sizes.expanded;
            else if (isOther) percent = sizes.collapsed;
            else percent = sizes.normal;
            const mobileFull = sizes.normal === 100;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
                  isHovered ? "bg-blue-800 shadow-2xl" : "bg-white"
                }`}
                style={{
                  flex: mobileFull ? "0 0 100%" : `0 0 ${percent}%`,
                  height: "300px",
                  transition:
                    "flex-basis 300ms ease, transform 300ms ease, box-shadow 300ms ease",
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                }}
              >
                {/* Header section */}
                <div
                  className={`p-6 flex ${
                    mobileFull
                      ? "flex-row items-center"
                      : isHovered
                      ? "flex-row items-start"
                      : "flex-col items-center text-center"
                  } gap-5`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                  />
                  <div className={`${isHovered ? "text-left" : "text-center"}`}>
                    <h2
                      className={`font-bold text-lg ${
                        isHovered ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {member.name}
                    </h2>
                    <p
                      className={`mt-1 ${
                        isHovered ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {member.position}
                    </p>
                  </div>
                </div>

                {/* Description scroll */}
                <div
                  className={`px-6 pb-4 overflow-y-auto transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 scrollbar-thin scrollbar-thumb-gray-400"
                      : "opacity-0"
                  }`}
                  style={{
                    color: isHovered ? "#fff" : "transparent",
                    maxHeight: isHovered ? "1200px" : "0px",
                  }}
                >
                  <p className="text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

import React, { useState, useEffect, useRef } from "react";

const NavbarScroll = ({ menu }) => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [activeSection, setActiveSection] = useState(menu[0]);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY > 100);
    };

    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, options);

    // Use menu from props
    menu.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) observerRef.current.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, [menu]);

  const isActive = (id) => activeSection === id;

  const handleSectionClick = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`fixed w-full shadow-md z-30 transition-all duration-300 hidden lg:block
        ${isAtTop ? "top-23 bg-sky-600 max-w-full" : "bottom-0"}`}
    >
      <div className="container mx-auto px-4 py-3 border-t-1 border-white">
        <ul className="flex justify-around space-x-8 text-gray-100">

          {menu.map(id => (
            <li key={id}>
              <button
                onClick={(e) => handleSectionClick(id, e)}
                className={`transition-all duration-300 font-medium px-3 py-2 cursor-pointer
                  ${isActive(id)
                    ? "text-amber-300 border-b-2 border-t-amber-300"
                    : "hover:text-amber-300"}`}
              >
                {id}
              </button>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default NavbarScroll;

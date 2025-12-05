import React, { useState, useEffect, useRef } from "react";

const NavbarScroll = ({ menu }) => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [activeSection, setActiveSection] = useState(menu[0].id);
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

    menu.forEach(item => {
      const section = document.getElementById(item.id);
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
    <nav className={`fixed w-full shadow-md z-40 transition-all duration-300 hidden lg:block
        ${isAtTop ? "lg:top-20 bg-sky-600 max-w-full" : "bottom-0"}`}
    >
      <div className="container mx-auto px-4 py-3 border-t-1 border-white">
        <ul className="flex justify-around space-x-8 text-gray-100">

          {menu.map(item => (
            <li key={item.id}>
              <button
                onClick={(e) => handleSectionClick(item.id, e)}
                className={`transition-all duration-300 font-medium px-3 py-2 cursor-pointer
                  ${isActive(item.id)
                    ? "text-amber-300 border-b-2 border-t-amber-300"
                    : "hover:text-amber-300"}`}
              >
                {item.label}
              </button>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default NavbarScroll;

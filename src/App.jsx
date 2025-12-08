import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Newsroom from "./pages/Newsroom";
import NewsDetail from "./pages/NewsDetail";
import ScrollToTop from "./components/ScrollToTop";
import SeaFreight from "./pages/SeaFreight";
import AirFreight from "./pages/AirFreight";
import Warehouse from "./pages/Warehouse";
import ITSolution from "./pages/ITSolution";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,    // animate only once when element scrolls into view
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="pt-20 "> {/* Add padding for fixed navbar */}
          <Routes>
            {/* 👇 Default route: redirect "/" to "/about" */}
            <Route path="/" element={<Navigate to="/about" />} />

            //Services Page
            <Route path="/services/sea-freight" element={<SeaFreight />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/3pl-warehouse" element={<Warehouse />} />
            <Route path="/services/it-solutions" element={<ITSolution />} />

            //About Page
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

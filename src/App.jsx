import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import ScrollToTop from "./components/ScrollToTop";
import ServicesDetail from "./components/ServicesDetail";
import CareersPage from "./components/CareersPage";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar isScrolled={isScrolled} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Process />
                <Clients />
                <Testimonials />
              </>
            }
          />
          <Route path="/services/:serviceType" element={<ServicesDetail />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

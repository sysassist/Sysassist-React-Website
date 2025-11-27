import React from "react";
import { ArrowRight } from "lucide-react";
import hero from "/Hero_Img.png"
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-100 text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Hero Text */}
          <div className="hero-content animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              SysAssist is an IT solutions company committed to delivering
              <span className="text-cyan-600"> High-quality, Timely, and Cost-Effective services.</span>
              {" "}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              We specialize in offering comprehensive software solutions tailored to the diverse needs of our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* <a
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6  rounded-full shadow-md transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a> */}
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-full shadow-md transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <button
                onClick={scrollToServices}
                className="border border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white py-3 px-6 rounded-full transition-all flex items-center gap-2"
              >
                Our Services
              </button>
            </div>
          </div>

          <div className="hidden md:block animate-fade-in-slow relative">
            {/* Main Hero Image with Glow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/10">
              <img
                src={hero}
                alt="Cloud Technology"
                className="w-full h-auto"
              />
            </div>


          </div>
        </div>
      </div>

      {/* Fixed Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C62.4,37.12,128.88,56.5,190.86,64.34,261.58,73,334.26,70.38,393.48,61.45,443.82,53.71,286.18,67.14,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

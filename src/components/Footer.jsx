// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="footer-company">
            <h3 className="text-xl font-bold mb-6">SysAssist</h3>
            <p className="mb-6 text-gray-300">
              Transforming businesses through technology excellence since 2025.
              Your trusted partner for IT consulting and staffing solutions.
            </p>
            <div className="social-icons flex gap-3">
              <a
                href="https://www.linkedin.com"
                className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
              >
                <div className="text-sm font-bold">in</div>
              </a>
              <a
                href="https://www.twitter.com"
                className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
              >
                <div className="text-sm font-bold">X</div>
              </a>
              <a
                href="https://www.facebook.com"
                className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
              >
                <div className="text-sm font-bold">f</div>
              </a>
              <a
                href="https://www.instagram.com"
                className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
              >
                <div className="text-sm font-bold">ig</div>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> IT Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> About us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Project Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Software
                  Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Database Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Quality Assurance
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-blue-400" />
                <span className="text-gray-300">
                  739, Sai Kripa Colony
                  <br />
                  Sai Kripa Main Road 2, Indore, <br />
                  Madhya Pradesh, India, 452010
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-300"> +91 9987986053</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-300"> inquiry@sysassist.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} SysAssist. All rights reserved.
            </p>
            <div className="footer-legal flex flex-wrap gap-4 justify-center">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-white"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

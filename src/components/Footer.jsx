// // components/Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="footer bg-gray-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="footer-company">
//             <h3 className="text-xl font-bold mb-6">SysAssist</h3>
//             <p className="mb-6 text-gray-300">
//               Transforming businesses through technology excellence since 2025.
//               Your trusted partner for IT consulting and staffing solutions.
//             </p>
//             <div className="social-icons flex gap-3">
//               <a
//                 href="https://www.linkedin.com/company/sysassist-it-solution/"
//                 className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
//               >
//                 <div className="text-sm font-bold">in</div>
//               </a>
//               <a
//                 href="https://www.twitter.com"
//                 className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
//               >
//                 <div className="text-sm font-bold">X</div>
//               </a>
//               <a
//                 href="https://www.facebook.com/people/SysAssist/61564798423626/"
//                 className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
//               >
//                 <div className="text-sm font-bold">f</div>
//               </a>
//               <a
//                 href="https://www.instagram.com"
//                 className="social-icon w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
//               >
//                 <div className="text-sm font-bold">ig</div>
//               </a>
//             </div>
//           </div>

//           <div className="footer-links">
//             <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/it-consulting"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> IT Consulting
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/it-staffing"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> IT Staffing
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about-us"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> About us
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link
//                   to="/careers"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> Careers
//                 </Link>
//               </li> */}
//             </ul>
//           </div>

//           <div className="footer-services">
//             <h4 className="text-lg font-semibold mb-6">Our Services</h4>
//             <ul className="space-y-3">
//               <li>
//                 <Link
//                   to="/services/it-consulting"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> Project Managment
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/it-staffing"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> Software
//                   Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/it-consulting"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" />Agile Transformation
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/it-staffing"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" />Cloud Integrations / Migrations
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/it-consulting"
//                   className="text-gray-300 hover:text-white flex items-center"
//                 >
//                   <ChevronRight size={16} className="mr-2" /> Database Services
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-contact">
//             <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin size={20} className="mr-3 mt-1 text-blue-400" />
//                 <span className="text-gray-300">
//                   739, Sai Kripa Colony
//                   <br />
//                   Sai Kripa Main Road 2, Indore, <br />
//                   Madhya Pradesh, India, 452010
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={20} className="mr-3 text-blue-400" />
//                 <span className="text-gray-300"> +91 9987986053</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={20} className="mr-3 text-blue-400" />
//                 <span className="text-gray-300"> inquiry@sysassist.co</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-bottom mt-12 pt-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 mb-4 md:mb-0">
//               © {new Date().getFullYear()} SysAssist. All rights reserved.
//             </p>
//             <div className="footer-legal flex flex-wrap gap-4 justify-center">
//               <Link
//                 to="/privacy-policy"
//                 className="text-gray-400 hover:text-white"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/terms-of-service"
//                 className="text-gray-400 hover:text-white"
//               >
//                 Terms of Service
//               </Link>
//               <Link
//                 to="/cookie-policy"
//                 className="text-gray-400 hover:text-white"
//               >
//                 Cookie Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">SysAssist</h3>
            <p className="text-gray-300 mb-6">
              Transforming businesses through technology excellence since 2025.
              Your trusted partner for IT consulting and staffing solutions.
            </p>
            <div className="social-icons flex gap-3">
              <a
                href="https://www.linkedin.com/company/sysassist-it-solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/SysAssist/61564798423626/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> IT Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Consulting Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">IT Consulting</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/it-consulting#project-management"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Project Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting#agile-transformation"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Agile Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting#technology-upgrades"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Technology Upgrades
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting#automation"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting#database-services"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Database Services
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Staffing Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">IT Staffing</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/it-staffing#software-developers"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Software Developers
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing#database-services"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Database Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing#cloud-integrations"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Cloud Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing#product-management"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Product Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-staffing#agile-consultants"
                  className="text-gray-300 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight size={16} className="mr-2" /> Agile Consultants
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start">
              <MapPin size={20} className="mr-3 mt-1 text-blue-400 flex-shrink-0" />
              <span className="text-gray-300">
                739, Sai Kripa Colony, Sai Kripa Main Road 2<br />
                Indore, Madhya Pradesh, India, 452010
              </span>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="mr-3 text-blue-400 flex-shrink-0" />
              <a href="tel:+919987986053" className="text-gray-300 hover:text-white transition-colors">
                +91 9987986053
              </a>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="mr-3 text-blue-400 flex-shrink-0" />
              <a href="mailto:inquiry@sysassist.co" className="text-gray-300 hover:text-white transition-colors">
                inquiry@sysassist.co
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} SysAssist. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-white transition-colors"
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
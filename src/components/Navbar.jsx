// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Menu, X, ChevronDown, BriefcaseBusiness, Laptop, Home, User, Contact, Server } from "lucide-react";

// // const Navbar = ({ isScrolled }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav
// //       className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
// //         }`}
// //     >
// //       <div className="container mx-auto px-4 py-1 flex justify-between items-center">
// //         <Link to="/" className="flex items-center">
// //           <img
// //             className=" w-10 h-10 md:w-18  md:h-18 rounded-full"
// //             src="/Sys.png"
// //           />
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <div className="hidden md:flex space-x-8 items-center">
// //           {/* Home */}
// //           <Link
// //             to="/"
// //             className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
// //           >
// //             Home
// //           </Link>

// //           {/* Services */}
// //           <div className="relative group">
// //             <span className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer hover:underline underline-offset-4">
// //               Services{" "}
// //               <ChevronDown
// //                 size={16}
// //                 className="ml-1 transition-transform group-hover:rotate-180"
// //               />
// //             </span>
// //             <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl mt-1 py-2 px-4 w-60 z-50 animate-fade-in">
// //               <Link
// //                 to="/services/it-consulting"
// //                 className="px-2 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-md transition"
// //               >
// //                 <span className="flex gap-2"><BriefcaseBusiness />  IT Consulting
// //                 </span>
// //               </Link>
// //               <Link
// //                 to="/services/it-staffing"
// //                 className="px-2 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-md transition"
// //               >
// //                 <span className="flex gap-2"><Laptop />   IT Staffing
// //                 </span>
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Our Team */}
// //           <Link
// //             to="/about-us"
// //             className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
// //           >
// //             About us
// //           </Link>


// //           {/* Contact */}
// //           <Link
// //             to="/contact"
// //             className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
// //           >
// //             Contact
// //           </Link>

// //           <Link
// //             to="/contact"
// //             className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full transition duration-300 shadow-sm"
// //           >
// //             Get Started
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Toggle */}
// //         <button
// //           className="md:hidden focus:outline-none"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           {isOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isOpen && (
// //         <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 transition-all duration-300 animate-slide-down z-40">
// //           <div className="flex flex-col px-6 py-4 space-y-3">
// //             <Link
// //               to="/"
// //               onClick={() => setIsOpen(false)}
// //               className="text-gray-700 hover:text-blue-600"
// //             >
// //               <span className="flex gap-1 font-semibold"><Home /> Home</span>
// //             </Link>

// //             {/* Mobile Services Section */}
// //             <div>
// //               <span className="text-gray-700 font-medium flex gap-1"><Server /> Services</span>
// //               <div className="ml-4 mt-2 space-y-2">
// //                 <Link
// //                   to="/services/it-consulting"
// //                   onClick={() => setIsOpen(false)}
// //                   className="text-sm text-gray-600 hover:text-blue-600"
// //                 >
// //                   <span className="flex gap-1 font-semibold"> <BriefcaseBusiness /> IT Consulting</span>
// //                 </Link>
// //                 <Link
// //                   to="/services/it-staffing"
// //                   onClick={() => setIsOpen(false)}
// //                   className="text-sm text-gray-600 hover:text-blue-600"
// //                 >
// //                   <span className="flex gap-1 font-semibold"><Laptop /> IT Staffing </span>
// //                 </Link>
// //               </div>
// //             </div>

// //             <Link
// //               to="/about-us"
// //               onClick={() => setIsOpen(false)}
// //               className="text-gray-700 hover:text-blue-600"
// //             >
// //               <span className="flex gap-1 font-semibold"> <User /> About us </span>

// //             </Link>

// //             <Link
// //               to="/contact"
// //               onClick={() => setIsOpen(false)}
// //               className="text-gray-700 hover:text-blue-600"
// //             >
// //               <span className="flex gap-1 font-semibold"> <Contact /> Contact</span>


// //             </Link>

// //             <Link
// //               to="/contact"
// //               onClick={() => setIsOpen(false)}
// //               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-center transition"
// //             >
// //               Get Started
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown, ChevronRight, BriefcaseBusiness, Laptop, Home, User, Contact, Server } from "lucide-react";

// const Navbar = ({ isScrolled }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const serviceItems = {
//     consulting: [
//       { name: "Project Management", path: "/services/it-consulting/project-management" },
//       { name: "Agile Transformation", path: "/services/it-consulting/agile-transformation" },
//       { name: "Technology Upgrades", path: "/services/it-consulting/technology-upgrades" },
//       { name: "Automation", path: "/services/it-consulting/automation" },
//       { name: "Database Services", path: "/services/it-consulting/database-services" },
//     ],
//     staffing: [
//       { name: "Software Developers", path: "/services/it-staffing/software-developers" },
//       { name: "Database Services", path: "/services/it-staffing/database-services" },
//       { name: "Cloud Integrations / Migrations", path: "/services/it-staffing/cloud-integrations" },
//       { name: "Product Management", path: "/services/it-staffing/product-management" },
//       { name: "Software Technology Support", path: "/services/it-staffing/software-support" },
//       { name: "Automations", path: "/services/it-staffing/automations" },
//       { name: "Project Management", path: "/services/it-staffing/project-management" },
//       { name: "Agile Consultants", path: "/services/it-staffing/agile-consultants" },
//     ]
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
//         }`}
//     >
//       <div className="container mx-auto px-4 py-1 flex justify-between items-center">
//         <Link to="/" className="flex items-center">
//           <img
//             className="w-10 h-10 md:w-18 md:h-18 rounded-full"
//             src="/Sys.png"
//             alt="Logo"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8 items-center">
//           {/* Home */}
//           <Link
//             to="/"
//             className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
//           >
//             Home
//           </Link>

//           {/* Services with nested dropdowns */}
//           <div className="relative group">
//             <span className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer hover:underline underline-offset-4">
//               Services{" "}
//               <ChevronDown
//                 size={16}
//                 className="ml-1 transition-transform group-hover:rotate-180"
//               />
//             </span>
//             <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl mt-1 py-2 px-4 w-64 z-50 animate-fade-in">
//               {/* IT Consulting with submenu */}
//               <div className="relative group/consulting">
//                 <Link
//                   to="/services/it-consulting"
//                   className="px-2 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-md transition flex items-center justify-between"
//                 >
//                   <span className="flex gap-2">
//                     <BriefcaseBusiness /> IT Consulting
//                   </span>
//                   <ChevronRight size={16} />
//                 </Link>
//                 {/* IT Consulting Submenu */}
//                 <div className="absolute left-full top-0 ml-1 hidden group-hover/consulting:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl py-2 px-4 w-56 z-50">
//                   {serviceItems.consulting.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.path}
//                       className="px-2 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md transition"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* IT Staffing with submenu */}
//               <div className="relative group/staffing">
//                 <Link
//                   to="/services/it-staffing"
//                   className="px-2 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-md transition flex items-center justify-between"
//                 >
//                   <span className="flex gap-2">
//                     <Laptop /> IT Staffing
//                   </span>
//                   <ChevronRight size={16} />
//                 </Link>
//                 {/* IT Staffing Submenu */}
//                 <div className="absolute left-full top-0 ml-1 hidden group-hover/staffing:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl py-2 px-4 w-64 z-50">
//                   {serviceItems.staffing.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.path}
//                       className="px-2 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md transition"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* About Us */}
//           <Link
//             to="/about-us"
//             className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
//           >
//             About us
//           </Link>

//           {/* Contact */}
//           <Link
//             to="/contact"
//             className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
//           >
//             Contact
//           </Link>

//           <Link
//             to="/contact"
//             className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full transition duration-300 shadow-sm"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 transition-all duration-300 animate-slide-down z-40 max-h-96 overflow-y-auto">
//           <div className="flex flex-col px-6 py-4 space-y-3">
//             <Link
//               to="/"
//               onClick={() => setIsOpen(false)}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               <span className="flex gap-1 font-semibold"><Home /> Home</span>
//             </Link>

//             {/* Mobile Services Section */}
//             <div>
//               <span className="text-gray-700 font-medium flex gap-1"><Server /> Services</span>

//               {/* IT Consulting */}
//               <div className="ml-4 mt-2">
//                 <button
//                   onClick={() => setOpenSubmenu(openSubmenu === 'consulting' ? null : 'consulting')}
//                   className="w-full text-left text-sm text-gray-600 hover:text-blue-600 font-semibold flex items-center justify-between"
//                 >
//                   <span className="flex gap-1">
//                     <BriefcaseBusiness /> IT Consulting
//                   </span>
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform ${openSubmenu === 'consulting' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openSubmenu === 'consulting' && (
//                   <div className="ml-6 mt-2 space-y-2">
//                     {serviceItems.consulting.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={item.path}
//                         onClick={() => setIsOpen(false)}
//                         className="block text-xs text-gray-500 hover:text-blue-600 py-1"
//                       >
//                         • {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* IT Staffing */}
//               <div className="ml-4 mt-2">
//                 <button
//                   onClick={() => setOpenSubmenu(openSubmenu === 'staffing' ? null : 'staffing')}
//                   className="w-full text-left text-sm text-gray-600 hover:text-blue-600 font-semibold flex items-center justify-between"
//                 >
//                   <span className="flex gap-1">
//                     <Laptop /> IT Staffing
//                   </span>
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform ${openSubmenu === 'staffing' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openSubmenu === 'staffing' && (
//                   <div className="ml-6 mt-2 space-y-2">
//                     {serviceItems.staffing.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={item.path}
//                         onClick={() => setIsOpen(false)}
//                         className="block text-xs text-gray-500 hover:text-blue-600 py-1"
//                       >
//                         • {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <Link
//               to="/about-us"
//               onClick={() => setIsOpen(false)}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               <span className="flex gap-1 font-semibold"> <User /> About us </span>
//             </Link>

//             <Link
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               <span className="flex gap-1 font-semibold"> <Contact /> Contact</span>
//             </Link>

//             <Link
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-center transition"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Briefcase, Users, Home, User, Mail, LayoutGrid, FolderKanban, GitBranch, Wrench, Zap, Database, Code, Cloud, ShieldCheck, Cog, UserCog, Server, BriefcaseBusiness, Laptop } from "lucide-react";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const serviceItems = {
    consulting: [
      { name: "Project Management", path: "/services/it-consulting#project-management", icon: <FolderKanban size={16} /> },
      { name: "Agile Transformation", path: "/services/it-consulting#agile-transformation", icon: <GitBranch size={16} /> },
      { name: "Technology Upgrades", path: "/services/it-consulting#technology-upgrades", icon: <Wrench size={16} /> },
      { name: "Automation", path: "/services/it-consulting#automation", icon: <Zap size={16} /> },
      { name: "Database Services", path: "/services/it-consulting#database-services", icon: <Database size={16} /> },
    ],
    staffing: [
      { name: "Software Developers", path: "/services/it-staffing#software-developers", icon: <Code size={16} /> },
      { name: "Database Services", path: "/services/it-staffing#database-services", icon: <Database size={16} /> },
      { name: "Cloud Integrations / Migrations", path: "/services/it-staffing#cloud-integrations", icon: <Cloud size={16} /> },
      { name: "Product Management", path: "/services/it-staffing#product-management", icon: <LayoutGrid size={16} /> },
      { name: "Software Technology Support", path: "/services/it-staffing#software-support", icon: <ShieldCheck size={16} /> },
      { name: "Automations", path: "/services/it-staffing#automations", icon: <Zap size={16} /> },
      { name: "Project Management", path: "/services/it-staffing#project-management", icon: <FolderKanban size={16} /> },
      { name: "Agile Consultants", path: "/services/it-staffing#agile-consultants", icon: <UserCog size={16} /> },
    ]
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            className="w-10 h-10 md:w-18 md:h-18 rounded-full"
            src="/Sys.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* Home */}
          <Link
            to="/"
            className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>

          {/* Services with nested dropdowns */}
          <div className="relative group/services">
            <span className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer hover:underline underline-offset-4">
              Services{" "}
              <ChevronDown
                size={16}
                className="ml-1 transition-transform group-hover/services:rotate-180"
              />
            </span>
            <div className="absolute left-0 hidden group-hover/services:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl mt-1 py-2 px-4 w-64 z-50 animate-fade-in before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
              {/* IT Consulting with submenu */}
              <div className="relative group/consulting">
                <Link
                  to="/services/it-consulting"
                  className="px-2 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-md transition flex items-center justify-between"
                >
                  <span className="flex gap-2 items-center">
                    <Briefcase size={18} /> IT Consulting
                  </span>
                  <ChevronRight size={16} />
                </Link>
                {/* IT Consulting Submenu */}
                <div className="absolute left-full top-0 ml-1 hidden group-hover/consulting:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl py-2 px-4 w-56 z-50 before:content-[''] before:absolute before:-left-1 before:top-0 before:bottom-0 before:w-1">
                  {serviceItems.consulting.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="px-2 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md transition flex items-center gap-2"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Staffing with submenu */}
              <div className="relative group/staffing">
                <Link
                  to="/services/it-staffing"
                  className="px-2 py-2 text-sm font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-md transition flex items-center justify-between"
                >
                  <span className="flex gap-2 items-center">
                    <Users size={18} /> IT Staffing
                  </span>
                  <ChevronRight size={16} />
                </Link>
                {/* IT Staffing Submenu */}
                <div className="absolute left-full top-0 ml-1 hidden group-hover/staffing:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl py-2 px-4 w-64 z-50 before:content-[''] before:absolute before:-left-1 before:top-0 before:bottom-0 before:w-1">
                  {serviceItems.staffing.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="px-2 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md transition flex items-center gap-2"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <Link
            to="/about-us"
            className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
          >
            About us
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full transition duration-300 shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 transition-all duration-300 animate-slide-down z-40 max-h-96 overflow-y-auto">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              <span className="flex gap-1 font-semibold">Home</span>
            </Link>

            {/* Mobile Services Section */}
            <div>
              <span className="text-gray-700 font-medium flex gap-1"> Services</span>

              {/* IT Consulting */}
              <div className="ml-4 mt-2">
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === 'consulting' ? null : 'consulting')}
                  className="w-full text-left text-sm text-gray-600 hover:text-blue-600 font-semibold flex items-center justify-between"
                >
                  <span className="flex gap-1">
                    <Briefcase /> IT Consulting
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openSubmenu === 'consulting' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openSubmenu === 'consulting' && (
                  <div className="ml-6 mt-2 space-y-2">
                    {serviceItems.consulting.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-xs text-gray-500 hover:text-blue-600 py-1"
                      >
                        • {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Staffing */}
              <div className="ml-4 mt-2">
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === 'staffing' ? null : 'staffing')}
                  className="w-full text-left text-sm text-gray-600 hover:text-blue-600 font-semibold flex items-center justify-between"
                >
                  <span className="flex gap-1">
                    <Users /> IT Staffing
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openSubmenu === 'staffing' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openSubmenu === 'staffing' && (
                  <div className="ml-6 mt-2 space-y-2">
                    {serviceItems.staffing.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-xs text-gray-500 hover:text-blue-600 py-1"
                      >
                        • {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Link
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              <span className="flex gap-1 font-semibold">About us </span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              <span className="flex gap-1 font-semibold items-center">  Contact</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-center transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
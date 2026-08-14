// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { motion } from "framer-motion";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Nimisha Avasthi",
//       position: "HR Manager, SEWA",
//       quote:
//         "The HRMS system developed for us streamlined our entire human resource operations. The team demonstrated exceptional understanding of our organizational needs and delivered a comprehensive solution that automated our recruitment, payroll, and performance management processes. Their attention to detail and responsive support made the transition smooth for our HR department.",
//       rating: 5,
//       image: "/Nimisha-Awasthi.jpg",
//     },
//     {
//       id: 2,
//       name: "Manish Vijayraj",
//       position: "Founder, Scientific Systems & Chemicals",
//       quote:
//         "We approached the team to develop a Laboratory Management System (LMS) that could handle our complex workflow. The resulting system has transformed how we track samples, manage inventories, and generate reports. Their technical expertise and industry knowledge were evident in how they addressed our specific requirements. The LMS has significantly reduced errors and improved our operational efficiency.",
//       rating: 4,
//       image: "/DummyUser.jpg",
//     },
//     {
//       id: 3,
//       name: "Vinita Rathi",
//       position: "Head of Department, Pikvan",
//       quote:
//         "We were facing compatibility issues with our mobile application on certain devices, causing us to lose a significant portion of potential users. The development team quickly identified the root causes and implemented solutions that expanded our app's compatibility across a wider range of mobile devices. Their technical troubleshooting skills and prompt resolution helped us increase our user base substantially.",
//       rating: 5,
//       image: "/DummyUser.jpg",
//     },
//     {
//       id: 4,
//       name: "Aashita Ravikumar",
//       position: "Bussiness Development Executive, Talent.in",
//       quote:
//         "Hii Teams thank you so much for all your help and patience, We are very happy with your service. We hope to work with your team in the future as well. Thanks a lot once again 🤝",
//       rating: 5,
//       image: "/DummyUser.jpg",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const stepVariants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section
//       id="testimonials"
//       className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
//             initial="hidden"
//             whileInView="visible"
//             variants={stepVariants}
//           >
//             What Our Clients Say
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//             initial="hidden"
//             whileInView="visible"
//             variants={stepVariants}
//           >
//             Hear from companies that have experienced the SysAssist difference.
//           </motion.p>
//         </div>

//         <div className="testimonial-slider relative">
//           <div className="testimonial-container overflow-hidden">
//             <div
//               className="testimonials-wrapper flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {testimonials.map((testimonial) => (
//                 <div
//                   key={testimonial.id}
//                   className="testimonial-card min-w-full"
//                 >
//                   <motion.div
//                     className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105"
//                     whileHover={{ scale: 1.05 }}
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={stepVariants}
//                   >
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="avatar">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-16 h-16 rounded-full object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-semibold text-gray-800">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-gray-600">{testimonial.position}</p>
//                         <div className="flex mt-1">
//                           {[...Array(testimonial.rating)].map((_, i) => (
//                             <Star
//                               key={i}
//                               size={16}
//                               className="text-yellow-500 fill-yellow-500"
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <blockquote className="text-lg text-gray-700 italic">
//                       "{testimonial.quote}"
//                     </blockquote>
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={prevTestimonial}
//             className="testimonial-nav-btn prev-btn absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="testimonial-nav-btn next-btn absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight size={24} />
//           </button>

//           <div className="testimonial-indicators flex justify-center mt-8 gap-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`indicator-dot w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"
//                   } transition-all duration-300`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const getWebsiteHref = (website) => {
    if (!website) return "";

    return /^https?:\/\//i.test(website) ? website : `https://${website}`;
  };

  // Project Case Studies - What We Provide Section
  const caseStudies = [
    {
      id: 1,
      clientName: "Confidential U.S. based Enterprise",
      clientAlias: "Google Cloud Platform",
      systemName: "GCP Secure Landing Zone",
      description:
        "We partnered with a U.S. based enterprise to provide technical consulting for the design and implementation of a secure landing data platform on Google Cloud Platform (GCP). The objective was to establish a robust and secure data environment capable of aggregating and transforming data from multiple existing systems. This platform was designed to streamline data accessibility while maintaining strong governance and security standards. Our approach focused on building a scalable “landing zone” that enables structured data ingestion, transformation, and organization to support a variety of downstream use cases. This foundation allows the enterprise to leverage its data more effectively for analytics and informed decision-making.",
      scopeOfWork: [
        "Provided technical consulting for designing a secure landing data platform on GCP",
        "Architected a scalable landing zone for structured data ingestion and transformation",
        "Implemented data governance, security standards, and access controls"
      ],
      techStack: [
        "Google Cloud Platform (GCP)",
        "BigQuery",
        "Cloud Storage",
        "Dataflow",
        "Pub/Sub",
        "IAM & Security Tools"
      ],
      outcome:
        "Enabled the enterprise to aggregate and transform data from multiple systems into a secure and scalable cloud platform. Improved data accessibility, maintained strong governance standards, and established a solid foundation for analytics and data-driven decision-making.",
      image: "/parts-intelligence.jpg",
      testimonialAuthor: "Sarif",
      type: "web",
    },
    {
      id: 2,
      clientName: "Leading Oil Extraction Company",
      clientAlias: "Leading Oil Extraction Company",
      systemName: "Legacy Manual Digitization & Parts Intelligence Program",
      description:
        "We partnered with a leading oil extraction company in Sultanate of Oman to transform decades of unstructured equipment documentation into a structured, intelligent parts inventory system. This project focused on building a structured spare parts intelligence layer from legacy equipment manuals spanning over two decades.",
      scopeOfWork: [
        "OCR-based extraction and processing of multi-year vendor documentation",
        "Automated identification of critical spare parts and associated technical attributes",
        "Data standardisation and enrichment — spare vs. consumable classification, operational criticality scoring, and procurement strategy tagging",
        "Delivery of a comprehensive, searchable parts inventory database",
      ],
      techStack: ["Python", "OCR Engine", "NLP & Data Extraction", "SQL", "Data Enrichment Pipeline"],
      outcome:
        "This initiative enabled the organisation to build a comprehensive, searchable parts inventory — improving maintenance planning, reducing downtime risk, and optimising procurement decisions across the supply chain.",
      image: "/parts-intelligence.jpg",
      testimonialAuthor: "Sarif",
      type: "web",
    },
    {
      id: 3,
      clientName: "Talent In",
      clientAlias: "Talent In",
      systemName: "Bilingual Talent Acquisition Platform",
      // systemUrl: "https://talent-in.com/",
      clientWebsite: "www.talent-in.com/",
      description:
        "We built a sophisticated bilingual web application for our Omani client Talent In, a dynamic talent acquisition firm specializing in executive search and people development. The platform serves as a comprehensive solution for hunting top talent and acquiring candidates for various industries in the Oman market.",
      keyCapabilities: [
        "Bilingual interface (Arabic & English) for seamless user experience",
        "Executive search and candidate sourcing module",
        "Advanced psychometric assessment integration",
        "Leadership and career coaching portal",
        "Candidate profile management with skill mapping",
        "Industry-specific job posting and matching algorithms",
        "Client dashboard for tracking recruitment progress",
        "Strategic hiring workflow automation",
      ],
      techStack: ["React JS", "SEO Friendly", "i18n Internationalization"],
      outcome:
        "A cutting-edge talent acquisition platform that empowers organizations in Oman to unlock growth by placing top talent where they make the most impact. The bilingual solution ensures seamless alignment between exceptional candidates and organizational success, while supporting innovative people development initiatives.",
      image: "/talent-platform.jpg",
      testimonialAuthor: "Aashita Ravikumar",
      type: "web",
      clientLocation: "Oman",
    },
    {
      id: 4,
      clientName: "Swashrayee Mahila Sakh Sahakari Sanstha Maryadit",
      clientAlias: "SEWA",
      systemName: "HRMS & Attendance Intelligence Solution",
      clientWebsite: "www.smssmcoop.org/",
      // systemUrl: "https://smssmhrm.in:8082/login",
      description:
        "We designed and developed a comprehensive Human Resource Management System (HRMS) for Swashrayee Mahila Sakh Sahakari Sanstha Maryadit, a co-operative bank — covering end-to-end employee lifecycle and workforce operations.",
      keyCapabilities: [
        "Centralised employee information and lifecycle management",
        "Leave master configuration, request workflows, and multi-category approval chains",
        "Payroll processing with support for performance-linked quarterly bonus structures",
        "Biometric infrastructure integration — automated punch-in/punch-out attendance capture",
        "WhatsApp integration for leave applications, approvals, and salary slip access",
        "Mobile-responsive interface for employees and managers",
        "Dashboards for attendance monitoring, field activity tracking, and time-off management",
      ],
      techStack: ["React.js", "Tailwind CSS", "HTML", "Node.js", "SQL", "Cloud API Integration"],
      outcome:
        "A fully integrated workforce management platform that brought together HR operations, biometric attendance, and mobile accessibility into a single system — delivering measurable improvements in efficiency, transparency, and payroll accuracy for the organisation.",
      image: "/hrms-dashboard.jpg",
      testimonialAuthor: "Nimisha Avasthi",
      type: "web",
    },
    {
      id: 5,
      clientName: "Scientific Systems & Chemicals (P) Ltd.",
      clientAlias: "SSCM",
      systemName: "Enterprise CRM",
      clientWebsite: "www.sscmp.com",
      description:
        "We built a purpose-driven Customer Relationship Management system for Scientific Systems & Chemicals (P) Ltd., a B2B supplier of chemical and laboratory equipment based in Bhopal. The requirement was a centralised, scalable platform to replace fragmented manual workflows across their sales and operations teams — covering the entire customer lifecycle from first enquiry to final quotation.",
      keyCapabilities: [
        "Enquiry tracking and sales pipeline management",
        "Quotation generation with real-time PDF preview and export",
        "Product catalog management with structured data architecture",
        "Role-based access control — Admin, Manager, Sales Coordinator, Sales Executive",
        "Party and customer master management",
        "Comprehensive reporting suite with PDF export",
      ],
      techStack: ["React.js", "Node.js", "SQL", "PDF Generation Engine", "RBAC Architecture"],
      outcome:
        "A responsive, enterprise-grade interface that replaced scattered spreadsheets with a unified source of truth — enabling the sales team to operate with measurably greater speed and visibility.",
      image: "/crm-dashboard.jpg",
      testimonialAuthor: "Manish Vijayraj",
      type: "web",
    },

    {
      id: 6,
      clientName: "Pikvan",
      clientAlias: "Pikvan",
      clientWebsite: "www.pikvan.com/",
      systemName: "Auditor Workflow Management Mobile Application",
      description:
        "We developed a comprehensive cross-platform mobile application for Pikvan to streamline their auditing operations and field workforce management. The solution enables auditing firms to efficiently manage and monitor their auditors deployed at various dealer locations.",
      keyCapabilities: [
        "Real-time GPS location tracking of auditors at dealer sites",
        "Selfie-based verification with timestamp and geotagging",
        "Automated time logging for audit duration tracking",
        "Offline capability with sync when connectivity is restored",
        "Digital audit checklist and report generation",
        "Manager dashboard for real-time monitoring and assignment tracking",
        "Photo documentation with metadata embedding",
        "Route optimization for multi-location audit schedules",
      ],
      techStack: ["React Native", "Node.js", "MYSQL", "Google Maps API"],
      outcome:
        "A robust mobile solution that transformed field audit operations, eliminating manual paperwork and providing real-time visibility into auditor activities. The app significantly improved accountability, reduced audit completion times, and enhanced data accuracy for the auditing firm.",
      image: "/auditor-app.jpg",
      testimonialAuthor: "Vinita Rathi",
      type: "mobile",
      platforms: ["Android", "iOS"],
    },
    {
      id: 7,
      clientName: "Dar Al Amal",
      clientAlias: "DAAOM",
      clientWebsite: "https://crm.nettechoman.com/",
      systemName: "Enterprise Sales CRM & Operations Management Platform",
      description:
        "We designed and developed a full-featured, real-time Sales CRM and Enterprise Operations Platform for Dar Al Amal, streamlining end-to-end B2B lead lifecycles, field operations, automated commission payouts, fuel tracking, contract renewals, and financial ledgers into a single unified cloud system.",
      keyCapabilities: [
        "Visual sales pipeline and lead management with customizable stages and location-stamped stage history",
        "Automated commission and payout engine with target calculations, eligibility thresholds, acquisition bonuses, recurring commissions, salary deductions, and payout locking workflows",
        "Fleet and fuel log management with mileage tracking, receipt attachments, manager approvals, and consumption analytics",
        "Contract renewal and expiry tracking with countdown intelligence, auto-renewals, document attachments, and notification alerts",
        "Field attendance and geolocation-based check-in/check-out for sales representatives and client visits",
        "Finance ledger and P&L analytics with income, expense, capital entries, and profit/loss dashboards",
      ],
      techStack: [
        "Next.js 14",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Supabase Edge Functions",
        "Contabo Cloud Hosting",
      ],
      outcome:
        "A unified operational command center that replaced manual spreadsheets with automated commission calculation, field geolocation verification, and transparent financial reporting. The platform significantly improved sales representative accountability and reduced monthly payout processing time by over 80%.",
      image: "/dar-al-amal-crm.jpg",
      testimonialAuthor: "",
      type: "web",
      platforms: ["Web"],
    },
    {
      id: 8,
      clientName: "Alumni Network | School | College",
      clientAlias: "Alumni Management",
      clientWebsite: "https://alumni.sysassist.co",
      systemName: "Alumni Management & Engagement Platform",
      description:
        "We designed and developed a comprehensive Alumni Management & Engagement Platform for educational institutions to manage alumni records, strengthen community engagement, organize events, support career opportunities, enable mentorship, and facilitate donations and sponsorships through a centralized digital platform.",

      keyCapabilities: [
        "Centralized alumni registration, profile, and lifecycle management with batch, pass-out year, class, branch, and professional details",
        "Searchable alumni directory with advanced filters by batch, city, profession, organization, branch, and other attributes",
        "Admin verification, approval, activation, and profile management workflows",
        "Alumni announcements, institutional news, achievements, and important updates",
        "Event and reunion management with registrations, RSVP tracking, announcements, and updates",
        "Job and career opportunity sharing for alumni and current students",
        "Alumni achievements and success story management",
        "Mentorship and networking between alumni and current students",
        "Internal messaging and communication between alumni and management users",
        "Donation and sponsorship management with online and offline payment or cheque records",
        "Sponsor a Child functionality for educational needs such as tuition fees, books, uniforms, and other support",
        "Role-based access for Admin, Alumni, Trustees, Management, and other authorized users",
        "Dashboard and analytics for alumni registrations, batches, locations, professions, and engagement",
        "Email and in-app notification support",
        "Privacy controls allowing alumni to manage the visibility of their profile information",
      ],

      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "AWS",
        "REST APIs",
      ],

      outcome:
        "A unified digital alumni ecosystem that enables educational institutions to maintain lifelong relationships with their graduates, improve communication and networking, organize events and mentorship programs, provide career opportunities, and facilitate meaningful alumni contributions and support for the institution and current students.",

      image: "/alumni-management.jpg",
      testimonialAuthor: "",
      type: "web",
      platforms: ["Web"],
    }
  ];

  // Updated Testimonials with project-specific details
  const testimonials = [
    {
      id: 1,
      name: "Nimisha Avasthi",
      position: "HR Manager, SEWA",
      quote:
        "The HRMS system developed for us streamlined our entire human resource operations. The team demonstrated exceptional understanding of our organizational needs and delivered a comprehensive solution that automated our recruitment, payroll, and performance management processes. Their attention to detail and responsive support made the transition smooth for our HR department.",
      rating: 5,
      image: "/Nimisha-Awasthi.jpg",
      projectRef: 1,
    },
    {
      id: 2,
      name: "Manish Vijayraj",
      position: "Founder, Scientific Systems & Chemicals",
      quote:
        "We approached the team to develop a Laboratory Management System (LMS) that could handle our complex workflow. The resulting system has transformed how we track samples, manage inventories, and generate reports. Their technical expertise and industry knowledge were evident in how they addressed our specific requirements. The LMS has significantly reduced errors and improved our operational efficiency.",
      rating: 4,
      image: "/ManishVijayrajSir.jpg",
      projectRef: 2,
    },
    {
      id: 3,
      name: "Vinita Rathi",
      position: "Head of Department, Pikvan",
      quote:
        "SysAssist IT Solutions delivered an exceptional mobile application that revolutionized our auditing workflow. The cross-platform app for Android and iOS enables our auditors to seamlessly record their location, capture selfie verifications, and log time entries at dealer locations. Real-time tracking and automated reporting have eliminated manual processes and significantly improved our audit efficiency and accountability across all field operations.",
      rating: 5,
      image: "/DummyUser.jpg",
      projectRef: 4,
    },
    {
      id: 4,
      name: "Aashita Ravikumar",
      position: "Business Development Executive, Talent.in",
      quote:
        "Hi Team, thank you so much for building our bilingual talent acquisition platform. The website perfectly captures our mission of unlocking growth by placing top talent where they make the most impact. The Arabic and English interface, combined with the executive search capabilities and psychometric tools, has positioned us as a leading talent acquisition firm in Oman. Your understanding of our vision for empowering the Oman market through innovative hiring solutions was exceptional. We hope to work with your team in the future as well. Thanks a lot once again 🤝",
      rating: 5,
      image: "/AashitaRavikumar.jpg",
      projectRef: 5,
    },
    {
      id: 5,
      name: "Abhijit",
      position: "Operations Manager, Oil Extraction Division",
      quote:
        "Partnering with SysAssist IT Solutions for our Legacy Manual Digitization & Parts Intelligence Program was a game-changer. They successfully digitized over two decades of unstructured equipment documentation and built a searchable parts inventory database. The automated identification of critical spare parts and data standardization has optimized our supply chain and maintenance planning beyond expectations.",
      rating: 5,
      image: "/DummyUser.jpg",
      projectRef: 3,
    },
  ];

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextCaseStudy = () => {
    setActiveCaseStudyIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setActiveCaseStudyIndex(
      (prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="testimonials"
      className="py-20 mt-3 bg-gradient-to-br from-white via-blue-50 to-cyan-100"
    >
      <div className="container mx-auto px-4">
        {/* What We Provide / Case Studies Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
              initial="hidden"
              whileInView="visible"
              variants={stepVariants}
            >
              Systems We Provide
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={stepVariants}
            >
              Explore our enterprise-grade solutions tailored for diverse industry needs.
            </motion.p>
          </div>

          <div className="case-study-slider relative">
            <div className="case-study-container overflow-hidden">
              <div
                className="case-studies-wrapper flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeCaseStudyIndex * 100}%)` }}
              >
                {caseStudies.map((study) => (
                  <div key={study.id} className="case-study-card min-w-full px-4">
                    <motion.div
                      className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 md:p-8 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                                {study.clientAlias}
                              </span>
                              {study.type === "mobile" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/30 rounded-full text-sm font-medium">
                                  <Smartphone size={14} />
                                  Mobile App
                                </span>
                              )}
                              {study.clientLocation && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/30 rounded-full text-sm font-medium">
                                  <Globe size={14} />
                                  {study.clientLocation}
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                              {study.systemName}
                            </h3>
                            <p className="text-blue-100 text-sm md:text-base">
                              {study.clientName}
                            </p>
                            {study.platforms && (
                              <div className="flex gap-2 mt-2">
                                {study.platforms.map((platform) => (
                                  <span
                                    key={platform}
                                    className="text-xs px-2 py-1 bg-white/20 rounded"
                                  >
                                    {platform}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            {study.systemUrl && (
                              <a
                                href={study.systemUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                              >
                                <ExternalLink size={18} />
                                {study.type === "mobile" ? "View Details" : "Access System"}
                              </a>
                            )}
                            {study.clientWebsite && (
                              <a
                                href={getWebsiteHref(study.clientWebsite)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-300"
                              >
                                <ExternalLink size={18} />
                                Visit Website
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {study.description}
                        </p>

                        {/* Key Capabilities or Scope of Work */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            {study.keyCapabilities ? "Key Capabilities" : "Scope of Work"}
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {(study.keyCapabilities || study.scopeOfWork).map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-600 text-sm"
                              >
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technology Stack */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcome */}
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                          <p className="text-gray-700 italic text-sm md:text-base">
                            <span className="font-semibold text-blue-600">Impact: </span>
                            {study.outcome}
                          </p>
                        </div>


                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevCaseStudy}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
              aria-label="Previous case study"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCaseStudy}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
              aria-label="Next case study"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCaseStudyIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCaseStudyIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to case study ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
            initial="hidden"
            whileInView="visible"
            variants={stepVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={stepVariants}
          >
            Hear from companies that have experienced the SysAssist difference.
          </motion.p>
        </div> */}

        {/* <div className="testimonial-slider relative">
          <div className="testimonial-container overflow-hidden">
            <div
              className="testimonials-wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonialIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card min-w-full px-4">
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    initial="hidden"
                    whileInView="visible"
                    variants={stepVariants}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="avatar">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-yellow-500 fill-yellow-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="testimonial-nav-btn prev-btn absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="testimonial-nav-btn next-btn absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="testimonial-indicators flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonialIndex(index)}
                className={`indicator-dot w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonialIndex === index ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Dummy image imports (Replace with actual image paths or URLs)
import vijayImage from "/Vijay_Dwivedi_Passport_Photo.jpg";
import sanjayImage from "/SanjaySir1.jpg";
import team1 from "/SunilDharawat.png";
import team2 from "/DeepakPatel.jpg";
import team3 from "/DummyUser.jpg";
import team6 from "/Aditya.png";
import team4 from "/HarshYadav.jpg";
import team5 from "/Shlok.png";
import CompanyTeam from "/SysAssist_Team_Pic.jpg";
import AnnualDay1 from "/annualday1.jpeg"
import AnnualDay2 from "/annualday2.jpeg"
import AnnualDay3 from "/annualday3.jpeg"
import Team2 from "/Team2.jpeg"
import Brithday1 from "/Birthday1.jpeg"
import Brithday2 from "/Brithday2.jpeg"
import Brithday3 from "/SelfiePhoto.jpeg"
import Brithday4 from "/brithday3.jpeg"
import OfficeImg from "/OfficeImg.png";
import image1 from "/Image1.jpeg";
import image2 from "/Image2.jpeg";
import image3 from "/Image3.jpeg";
import image4 from "/Image4.jpeg";
import image5 from "/Image5.jpeg";
import image6 from "/Image6.jpeg";
import image7 from "/Image7.jpeg";
import image8 from "/Image8.jpeg";
import image9 from "/Image9.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project and engagement.",
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies.",
    },
    {
      title: "Integrity",
      description: "We operate with transparency and ethical standards.",
    },
    {
      title: "Partnership",
      description: "We build lasting relationships based on mutual success.",
    },
  ];

  const teamMembers = [
    { name: "Sunil Dharawat", role: "Software Developer", image: team1 },
    { name: "Deepak Patel", role: "Software Developer", image: team2 },
    { name: "Shlok Agrawal", role: "Software Developer", image: team5 },
    { name: "Aditya Jaiswal", role: "Java Developer", image: team6 },
    { name: "Harsha Yadav", role: "Software Developer", image: team4 },
    { name: "Aditi Gupta", role: "Software Developer", image: team3 },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="py-25 bg-gradient-to-br from-white via-blue-50 to-cyan-100"
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="about-image relative"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          >
            <div className="image-container rounded-xl overflow-hidden shadow-lg">
              <img
                src={OfficeImg}
                alt="Driving Digital Excellence"
                className="w-full  object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              About SysAssist
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              SysAssist is a premier IT consulting and staffing firm dedicated
              to delivering innovative technology solutions that drive business
              success. Our team of experienced professionals works closely with
              clients to understand their unique challenges and develop tailored
              strategies for growth.
            </p>
            <div className="values mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                {coreValues.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <div>
                      <strong>{value.title}</strong> - {value.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Directors Section */}
        <div className="directors mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
            Our Directors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Vijay Dwivedi",
                image: vijayImage,
                description: `Vijay Dwivedi is a computer science post graduate with 30+ years of software industry experience. He is a seasoned IT professional with over 30 years of experience in database administration, primarily focused on Oracle Databases and MS SQL Server. He has a strong background in database design, implementation, performance tuning, and troubleshooting. With a 25+ year tenure serving the Government of Oman, he has contributed significantly to One-of-the Ministry's IT infrastructure. His expertise also extends to Oracle Application Servers and front-end tools.`,
              },
              {
                name: "Sanjay Agrawal",
                image: sanjayImage,
                description: `Sanjay Agrawal is a computer science post graduate with 30+ years of software industry experience. He has been associated with senior management roles with multiple software companies providing payments services, telecom services and software development services to prestigious global clients. He has demonstrated success in establishing and managing offshore software development centers, delivering critical projects/products, underpinned by a strong grasp of technical and financial dimensions. He has spent about 25+ years in card payments solutions and about 3+ years in telecom network solutions.`,
              },
            ].map((director, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex  flex-col md:flex-row gap-6 items-start "
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-24 h-24 rounded-full object-fill shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {director.name}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {director.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Meet Our Team
          </h2>
          <div className="flex flex-col flex-wrap md:flex-row justify-center  gap-4">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 text-center"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="font-semibold text-blue-700">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="photo-gallery mt-24">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Photo Gallery
          </h2>

          {[
            { title: "Annual Day", images: [image1, image2, AnnualDay1, AnnualDay2, image2, AnnualDay3, AnnualDay1,] },
            { title: "Teams", images: [Team2, Brithday1, Brithday2, CompanyTeam, Brithday3, Team2, Brithday4,] },
            { title: "Diwali Festival", images: [image6, image7, image8, image9, image3, image4, image5] },
          ].map((category, idx) => (
            <div key={idx} className="mb-20">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-900 tracking-wide ">
                {category.title}
              </h3>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="max-w-6xl mx-auto !py-10 !pb-14 px-4"
                // UPDATED BREAKPOINTS: More space on desktop
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 15 },
                  640: { slidesPerView: 1.5, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 25 },
                  1024: { slidesPerView: 3, spaceBetween: 40 }, // Increased space
                  1280: { slidesPerView: 3.5, spaceBetween: 50 }, // Increased space
                }}
              >
                {category.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div
                        // UPDATED CLASSES: md:rotate-0 removes tilt on desktop for a cleaner look
                        className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer
                          ${isActive
                            ? "scale-110 shadow-2xl rotate-0 z-10 opacity-100 ring-4 ring-white"
                            : "scale-90 rotate-[-2deg] md:rotate-0 opacity-60 hover:opacity-100"
                          }
                        `}
                      >
                        <img
                          src={img}
                          alt={`${category.title} ${i + 1}`}
                          className="w-full h-56 sm:h-64 md:h-72 object-cover"
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
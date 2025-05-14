import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Dummy image imports (Replace with actual image paths or URLs)
import vijayImage from "/src/assets/Vijay_Dwivedi_Passport_Photo.jpg";
import sanjayImage from "/src/assets/SanjaySir1.jpg";
import team1 from "/src/assets/SunilDharawat.png";
import team2 from "/src/assets/DummyUser.jpg";
import team3 from "/src/assets/DummyUser.jpg";
import team4 from "/src/assets/DummyUser.jpg";
import team5 from "/src/assets/DummyUser.jpg";
import CompanyImag from "/src/assets/CompnayImage.jpg";

const About = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Clients" },
    { value: "10+", label: "IT Experts" },
    { value: "50+", label: "Projects" },
  ];

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
    { name: "Sunil Dharawat", role: "Frontend Developer", image: team1 },
    { name: "Deepak Patel", role: "Backend Developer", image: team2 },
    { name: "Aditya Jaiswal", role: "Java Developer", image: team3 },
    { name: "Amit Gupta", role: "DevOps Engineer", image: team4 },
    { name: "Kavita Nair", role: "Business Analyst", image: team5 },
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
                src={CompanyImag}
                alt="Driving Digital Excellence"
                className="w-full h-64 md:h-96 object-cover"
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
            <div className="stats grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-box p-6 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionVariants}
                >
                  <h4 className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
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
                description: `Vijay Dwivedi is a computer science post graduate with 30+ years of software industry experience. He is a seasoned IT professional with a strong background in database design, implementation, performance tuning, and troubleshooting. He spent 25+ years serving the Government of Oman, contributing to the ministry's IT infrastructure.`,
              },
              {
                name: "Sanjay Agrawal",
                image: sanjayImage,
                description: `Sanjay Agrawal is a computer science post graduate with 30+ years of software industry experience. He has held senior management roles in companies delivering payments, telecom, and software services to global clients. With 25+ years in card payments and 3+ in telecom, he brings deep technical and strategic expertise.`,
              },
            ].map((director, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex gap-6 items-start"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      </div>
    </section>
  );
};

export default About;

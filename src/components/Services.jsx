// components/Services.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Users,
  Database,
  Cloud,
  Code,
  CheckCircle,
  LineChart,
  Zap,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "consulting",
      title: "IT Consulting",
      description:
        "Strategic technology consulting to optimize your business processes and drive innovation.",
      link: "/services/it-consulting",
      icon: <Server className="text-blue-500" />,
      items: [
        { icon: <CheckCircle size={18} />, text: "Project Management" },
        { icon: <CheckCircle size={18} />, text: "Agile Processes" },
        { icon: <CheckCircle size={18} />, text: "Technology Upgrades" },
        { icon: <CheckCircle size={18} />, text: "Automation" },
        { icon: <CheckCircle size={18} />, text: "Database Services" },
      ],
    },
    {
      id: "staffing",
      title: "IT Staffing",
      description:
        "Access top-tier talent to fill critical roles in your technology projects and teams.",
      link: "/services/it-staffing",
      icon: <Users className="text-blue-500" />,
      items: [
        { icon: <CheckCircle size={18} />, text: "Software Developers" },
        { icon: <CheckCircle size={18} />, text: "Database Services" },
        {
          icon: <CheckCircle size={18} />,
          text: "Cloud Integrations/Migrations",
        },
        { icon: <CheckCircle size={18} />, text: "Software Testing" },
        { icon: <CheckCircle size={18} />, text: "Product Management" },
      ],
    },
  ];

  const features = [
    {
      icon: <Code size={24} />,
      title: "Expert Development",
      description:
        "Access our pool of skilled developers experienced in various technologies and frameworks.",
    },
    {
      icon: <Database size={24} />,
      title: "Database Excellence",
      description:
        "Optimize your data management with our specialized database services and support.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Solutions",
      description:
        "Seamless cloud integration and migration services to modernize your infrastructure.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Strategic Planning",
      description:
        "Data-driven strategy to guide your technology decisions and investments.",
    },
    {
      icon: <Zap size={24} />,
      title: "Rapid Deployment",
      description:
        "Quick talent acquisition and project initiation to meet your deadlines.",
    },
    {
      icon: <Workflow size={24} />,
      title: "Agile Processes",
      description:
        "Implement efficient Agile methodologies to enhance your development workflow.",
    },
  ];

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-100"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive IT solutions tailored to meet your business
            needs and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-50 rounded-xl text-blue-600 mr-4">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-8 text-lg">
                {service.description}
              </p>

              <ul className="mb-8 space-y-3">
                {service.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0.8,
                      x: 0,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="text-emerald-500">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-16 text-center text-gray-800">
            Why Choose <span className="text-blue-600">SysAssist</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

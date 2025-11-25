import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle,
  Server,
  Users,
  Database,
  Cloud,
  Code,
  LineChart,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ServicesDetail = () => {
  const { serviceType } = useParams();

  // Scroll to top when component mounts or serviceType changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  const services = {
    "it-consulting": {
      title: "IT Consulting",
      description:
        "Strategic technology solutions to optimize your business processes and drive innovation",
      heroImage: "/src/assets/IT_STAFF_Imag.jpg",
      icon: <Server size={48} />,
      intro:
        "Our IT consulting services are designed to help businesses leverage technology effectively to solve complex challenges, improve operational efficiency, and achieve strategic goals. With a team of experienced consultants specializing in various domains, we deliver tailored solutions that align with your unique business needs.",
      benefits: [
        "Strategic technology roadmaps aligned with business goals",
        "Improved operational efficiency and productivity",
        "Cost optimization through streamlined IT processes",
        "Enhanced security and compliance",
        "Competitive advantage through digital transformation",
      ],
      services: [
        {
          title: "Project Management",
          description:
            "Navigating the complexities of project management requires more than just experience - it demands a strategic approach, deep expertise, and a keen understanding of your business needs. Our Project Management Consulting services are designed to help you achieve project success, from initial planning through to successful execution and delivery.",
          icon: <Code size={32} />,
        },
        {
          title: "Agile Transformation",
          description:
            "In today’s rapidly evolving business landscape, agility is key to staying competitive and responsive. Our Agile Processes Consulting services are designed to transform your organization’s approach to project management, enhancing flexibility, collaboration, and efficiency. Whether you’re new to Agile or looking to optimize your existing practices, we provide tailored solutions to help you harness the full potential of Agile methodologies.",
          icon: <LineChart size={32} />,
        },
        {
          title: "Technology Upgrades",
          description:
            "In a rapidly evolving technological world, keeping your applications up-to-date is crucial for maintaining competitive advantage, enhancing performance, and ensuring security. Our Technology Upgrades services are designed to modernize your existing applications, leveraging the latest advancements to improve functionality, efficiency, and user experience.",
          icon: <Database size={32} />,
        },
        {
          title: "Automation",
          description:
            "Testing, Build, Deployment, Release - Automating your build, test, and deployment processes can significantly streamline your workflow, reduce errors, and accelerate time-to-market. Our comprehensive automation services are designed to optimize your development lifecycle, ensuring that your software is delivered faster, more reliably, and with higher quality.",
          icon: <Cloud size={32} />,
        },
        {
          title: "Database Services",
          description:
            "In today’s data-driven world, the efficiency, security, and reliability of your database systems are critical to the success of your business. Our comprehensive Database Services are designed to ensure that your data management is optimized, secure, and aligned with your business objectives. We offer Database Administration, Upgrades, High Availability, Disaster Recovery, Data Migration / Transformations / Integration consulting services to your specific needs.",
          icon: <Database size={32} />,
        },
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Assessment",
          description:
            "We analyze your current IT infrastructure, processes, and challenges to identify improvement opportunities.",
        },
        {
          step: 2,
          title: "Strategic Planning",
          description:
            "We develop a customized roadmap aligned with your business goals and technology requirements.",
        },
        {
          step: 3,
          title: "Solution Design",
          description:
            "Our experts design detailed solutions addressing your specific challenges and opportunities.",
        },
        {
          step: 4,
          title: "Implementation",
          description:
            "We execute the plan with precision, ensuring minimal disruption to your business operations.",
        },
        {
          step: 5,
          title: "Monitoring & Optimization",
          description:
            "We continuously monitor performance and make necessary adjustments to optimize results.",
        },
      ],
    },
    "it-staffing": {
      title: "IT Staffing",
      description:
        "We can help you find right talents by providing skilled/trained IT Staff.",
      heroImage: "/src/assets/IT_STAFF_Imag.jpg",
      icon: <Users size={48} />,
      intro:
        "Our IT staffing services provide access to a vast network of pre-vetted technology professionals across various domains. Whether you need to augment your team for a specific project or are looking for permanent placements, we connect you with skilled IT talent that matches your technical requirements and company culture.",
      benefits: [
        "Access to specialized technical expertise on demand",
        "Reduced hiring time and recruitment costs",
        "Flexibility to scale teams based on project requirements",
        "Thorough screening ensures high-quality talent",
        "Ongoing support throughout the engagement",
      ],
      services: [
        {
          title: "Software Developers",
          description:
            "Elite talent for building high-performance, scalable custom software.",
          icon: <Users size={32} />,
        },
        {
          title: "Database Services",
          description:
            "Expert management for secure, optimized, and accessible data infrastructure.",
          icon: <CheckCircle size={32} />,
        },
        {
          title: "Cloud Integrations / Migrations",
          description:
            "Certified specialists for seamless cloud adoption and complex system integration.",
          icon: <CheckCircle size={32} />,
        },
        {
          title: "Product Management",
          description:
            "Functional, Performance, Security",
          icon: <CheckCircle size={32} />,
        },
        {
          title: "Software Technology Support",
          description:
            "Level 1, Level 2 and Level 3 support",
          icon: <CheckCircle size={32} />,
        },
        {
          title: "Automations",
          description:
            "Testing and Software Development and Integration Processes",
          icon: <CheckCircle size={32} />,
        },
        {
          title: "Project Management",
          description:
            "Project Managers, Program Managers, Scrum Masters",
          icon: <Code size={32} />,
        },
        {
          title: "Agile Consultants",
          description:
            "Planners, Product Owners, Scrum Masters, Release Train Engineers",
          icon: <LineChart size={32} />,
        },
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description:
            "We work with you to understand your technical requirements, team dynamics, and company culture.",
        },
        {
          step: 2,
          title: "Candidate Sourcing",
          description:
            "Our recruiters identify and approach qualified candidates from our extensive talent network.",
        },
        {
          step: 3,
          title: "Screening & Evaluation",
          description:
            "Rigorous technical assessments and interviews to ensure candidates have the required skills.",
        },
        {
          step: 4,
          title: "Presentation & Selection",
          description:
            "We present the most qualified candidates with detailed profiles for your review and selection.",
        },
        {
          step: 5,
          title: "Onboarding & Support",
          description:
            "We facilitate smooth onboarding and provide ongoing support throughout the engagement.",
        },
      ],
    },
  };

  const selectedService = services[serviceType];

  if (!selectedService) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="service-detail">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-3 border-b border-gray-100 mt-15">
        <div className="container mx-auto px-4 mt-2">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link to="/services" className="text-gray-500 hover:text-blue-600">
              Services
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-blue-600 font-medium">
              {selectedService.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-100 text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
        <img
          src={selectedService.heroImage}
          alt={selectedService.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />

        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-xl mb-6 shadow-lg">
              {selectedService.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {selectedService.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
              {selectedService.description}
            </p>
          </motion.div>
        </div>

        {/* Hero wave shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#ffffff"
            preserveAspectRatio="none"
            className="w-full h-10 md:h-16"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-blue-600">{selectedService.title}</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {selectedService.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                variants={itemFadeIn}
              >
                <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Partner with SysAssist to leverage our{" "}
              {selectedService.title.toLowerCase()} and achieve your business
              objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="contact"
                className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default ServicesDetail;

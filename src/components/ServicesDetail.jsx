import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import {
  CheckCircle,
  Server,
  Users,
  Database,
  Cloud,
  Code,
  LineChart,
  ChevronRight,
  Zap,
  Settings,
  GitBranch,
  Shield,
  FolderKanban,
  LayoutGrid,
  UserCog,
} from "lucide-react";
import { motion } from "framer-motion";
import serviceImg1 from "/IT_STAFF_Imag.jpg"

const ServicesDetail = () => {
  const { serviceType } = useParams();
  const location = useLocation();

  // Scroll to section when component mounts or hash changes
  useEffect(() => {
    if (location.hash) {
      // Remove the # from hash
      const id = location.hash.replace('#', '');
      // Wait for component to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; // Offset for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = {
    "it-consulting": {
      title: "IT Consulting",
      description:
        "Strategic technology solutions to optimize your business processes and drive innovation",
      heroImage: serviceImg1,
      icon: <Server size={48} />,
      intro:
        "Our IT consulting services are designed to help businesses leverage technology effectively to solve complex challenges, improve operational efficiency, and achieve strategic goals.",
      services: {
        "project-management": {
          title: "Project Management",
          description:
            "Navigating the complexities of project management requires more than just experience-it demands a strategic approach, deep expertise, and a keen understanding of your business needs. Our Project Management Consulting services are designed to help you achieve project success, from initial planning through to successful execution and delivery.",
          icon: <Code size={32} />,
          fullContent:
            "Our Project Management Consulting services are designed to help you achieve project success, from initial planning through to successful execution and delivery. We provide comprehensive project management solutions including stakeholder management, risk assessment, resource allocation, and project lifecycle management.",
        },
        "agile-transformation": {
          title: "Agile Processes",
          description:
            "In today’s rapidly evolving business landscape, agility is key to staying competitive and responsive. Our Agile Processes Consulting services are designed to transform your organization’s approach to project management, enhancing flexibility, collaboration, and efficiency. Whether you’re new to Agile or looking to optimize your existing practices, we provide tailored solutions to help you harness the full potential of Agile methodologies.",
          icon: <GitBranch size={32} />,
          fullContent:
            "Our Agile Processes Consulting services are designed to transform your organization's approach to project management, enhancing flexibility, collaboration, and efficiency. Whether you're new to Agile or looking to optimize your existing practices, we provide tailored solutions to help you harness the full potential of Agile methodologies.",
        },
        "technology-upgrades": {
          title: "Technology Upgrades",
          description:
            "In a rapidly evolving technological world, keeping your applications up-to-date is crucial for maintaining competitive advantage, enhancing performance, and ensuring security. Our Technology Upgrades services are designed to modernize your existing applications, leveraging the latest advancements to improve functionality, efficiency, and user experience.",
          icon: <Settings size={32} />,
          fullContent:
            "Our Technology Upgrades services are designed to modernize your existing applications, leveraging the latest advancements to improve functionality, efficiency, and user experience. We handle everything from legacy system migrations to cutting-edge technology implementations.",
        },
        "automation": {
          title: "Automation",
          description:
            "Testing, Build, Deployment, Release - Automating your build, test, and deployment processes can significantly streamline your workflow, reduce errors, and accelerate time-to-market. Our comprehensive automation services are designed to optimize your development lifecycle, ensuring that your software is delivered faster, more reliably, and with higher quality.",
          icon: <Zap size={32} />,
          fullContent:
            "Our comprehensive automation services are designed to optimize your development lifecycle, ensuring that your software is delivered faster, more reliably, and with higher quality. We implement CI/CD pipelines, automated testing frameworks, and DevOps best practices.",
        },
        "database-services": {
          title: "Database Services",
          description:
            "In today’s data-driven world, the efficiency, security, and reliability of your database systems are critical to the success of your business. Our comprehensive Database Services are designed to ensure that your data management is optimized, secure, and aligned with your business objectives. We offer Database Administration, Upgrades, High Availability, Disaster Recovery, Data Migration / Transformations / Integration consulting services to your specific needs.",
          icon: <Database size={32} />,
          fullContent:
            "Our comprehensive Database Services ensure that your data management is optimized, secure, and aligned with your business objectives. We offer Database Administration, Upgrades, High Availability, Disaster Recovery, and Data Migration consulting services tailored to your specific needs.",
        },
      },
    },
    "it-staffing": {
      title: "IT Staffing",
      description:
        "We can help you find right talents by providing skilled/trained IT Staff.",
      heroImage: serviceImg1,
      icon: <Users size={48} />,
      intro:
        "Our IT staffing services provide access to a vast network of pre-vetted technology professionals across various domains.",
      services: {
        "software-developers": {
          title: "Software Developers",
          description:
            "Elite talent for building high-performance, scalable custom software.",
          icon: <Code size={32} />,
          fullContent:
            "Our software developers bring expertise in multiple programming languages, frameworks, and methodologies. Whether you need full-stack developers, frontend specialists, or backend engineers, we provide skilled professionals who can integrate seamlessly into your team.",
        },
        "database-services": {
          title: "Database Services",
          description:
            "Expert management for secure, optimized, and accessible data infrastructure.",
          icon: <Database size={32} />,
          fullContent:
            "Our database professionals specialize in database administration, optimization, and architecture. They ensure your data systems run efficiently, securely, and scale with your business needs.",
        },
        "cloud-integrations": {
          title: "Cloud Integrations / Migrations",
          description:
            "Certified specialists for seamless cloud adoption and complex system integration.",
          icon: <Cloud size={32} />,
          fullContent:
            "Our cloud experts are certified in AWS, Azure, and Google Cloud Platform. They specialize in cloud migrations, multi-cloud strategies, containerization, and cloud-native application development.",
        },
        "product-management": {
          title: "Product Management",
          description: "Functional, Performance, Security",
          icon: <LayoutGrid size={32} />,
          fullContent:
            "Our product managers bring strategic vision and execution expertise to guide your product from concept to market. They excel in roadmap planning, stakeholder management, and agile product development.",
        },
        "software-support": {
          title: "Software Technology Support",
          description: "Level 1, Level 2 and Level 3 support",
          icon: <Shield size={32} />,
          fullContent:
            "Our technical support professionals provide multi-tiered support services. From frontline troubleshooting to deep technical problem resolution, we ensure your systems stay operational and users stay productive.",
        },
        "automations": {
          title: "Automations",
          description: "Testing and Software Development and Integration Processes",
          icon: <Zap size={32} />,
          fullContent:
            "Our automation specialists implement test automation frameworks, CI/CD pipelines, and process automation solutions. They bring expertise in tools like Selenium, Jenkins, and various DevOps platforms.",
        },
        "project-management": {
          title: "Project Management",
          description: "Project Managers, Program Managers, Scrum Masters",
          icon: <FolderKanban size={32} />,
          fullContent:
            "Our project management professionals bring certified expertise in PMI, Prince2, and Agile methodologies. They ensure projects are delivered on time, within budget, and meet quality standards.",
        },
        "agile-consultants": {
          title: "Agile Consultants",
          description:
            "Planners, Product Owners, Scrum Masters, Release Train Engineers",
          icon: <UserCog size={32} />,
          fullContent:
            "Our Agile consultants are certified in SAFe, Scrum, and other Agile frameworks. They help organizations transform their processes, implement Agile at scale, and build high-performing teams.",
        },
      },
    },
  };

  // If serviceItem is specified, show detail page for that specific service
  const selectedService = services[serviceType];

  if (!selectedService) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

      {/* Services Grid */}
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
            {Object.entries(selectedService.services).map(([key, service]) => (
              <motion.div
                key={key}
                id={key}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 scroll-mt-24"
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
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
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
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
import { motion } from "framer-motion";
import { Code2, Wrench, Cloud, TestTube2, MonitorCog } from "lucide-react";
import image1 from "/img1.png";
import image2 from "/img2.png";
import image3 from "/img3.png";
import image4 from "/img4.png";
import image5 from "/img5.png";

const Process = () => {
  const serviceList = [
    {
      icon: Code2,
      image: image1,
      title: "Custom/Bespoke Applications Development",
      description:
        "In today’s fast-paced digital landscape, off-the-shelf solutions often fall short of meeting unique business needs. That’s where our Custom/Bespoke Applications Development service comes into play. We specialize in designing and building tailor-made software solutions that align perfectly with your organization’s objectives and processes.",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50"
    },
    {
      icon: Wrench,
      image: image2,
      title: "Maintenance of Existing Applications",
      description: [
        "Complete rewrite of existing applications using modern technologies",
        "Update to most recent versions of already used technologies",
        "Performance improvements and scalability of existing applications",
        "Data migration or transformation services",
        "High Availability, Disaster Recovery and more Database services"
      ],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    }
    ,
    {
      icon: Cloud,
      image: image3,
      title: "Cloud Migration and Business Decisions using AI/ML",
      description:
        "In an era where agility and scalability are paramount, migrating your existing applications to cloud and use AI/ML based indicators for your business decisions, is a strategic move. It can redefine how your business operates. Whether you’re looking to develop new applications or transition existing ones, our expert cloud migration services ensure a seamless shift to public or private cloud environments, tailored to your specific needs.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: TestTube2,
      image: image4,
      title: "Quality Assurance Services and Automations",
      description:
        "In today’s competitive market, delivering high-quality software is a necessity. Our comprehensive Quality Assurance (QA) services ensure that your applications meet the highest standards of functionality, performance, and security. With a focus on both manual and automated testing, we help you deliver reliable, efficient, and secure software solutions.",
      gradient: "from-orange-500 to-pink-600",
      bgGradient: "from-orange-50 to-pink-50"
    },
    {
      icon: MonitorCog,
      image: image5,
      title: "Automation of Build, Test, Deployment Processes",
      description:
        "Automating your build, test, and deployment processes can significantly streamline your workflow, reduce errors, and accelerate time-to-market. Our comprehensive automation services are designed to optimize your development lifecycle, ensuring that your software is delivered faster, more reliably, and with higher quality.",
      gradient: "from-orange-500 to-pink-600",
      bgGradient: "from-orange-50 to-pink-50"
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            IT Services for Your Business
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of modern IT solutions to help you build, scale,
            and optimize your business. Need something specific? Contact us for
            tailor-made services.
          </p>
        </div>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transform transition-transform group-hover:scale-105 duration-500`}></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 h-full">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-fill transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Floating Icon */}
                    <div className={`absolute top-4 right-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-blue-600 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* <p className="text-slate-600 leading-relaxed text-base">
                      {service.description}
                    </p> */}
                    {Array.isArray(service.description) ? (
                      <ul className="text-slate-600 leading-relaxed text-base list-disc pl-6 space-y-2 text-left">
                        {service.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-600 leading-relaxed text-base text-justify">
                        {service.description}
                      </p>
                    )}

                  </div>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -z-10`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
};

export default Process;
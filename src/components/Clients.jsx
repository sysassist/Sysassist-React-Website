import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  // Client details src\assets\Abhijeet_Pic1.jpg
  const clientDetails = {
    name: "NET TECH INNOVATIONS S.P.C. (Sultanate of Oman)",
    description:
      "With deep roots in Oman and over 8 years of experience in the telecom and IT industry, Abhijeet Singh Rana leads the company with a strong understanding of the local market and a commitment to delivering reliable, high-quality technology solutions. Under his leadership, the company has become a trusted provider of IT, software, and basic AV services, and is proudly recognized as a B2B channel partner for Vodafone Oman. We have successfully executed a wide range of projects for clients across various sectors, including Nakheel Oman Development Company, Azzan Bin Qais Education Group, Mohsin Haider Darwish (MHD), and many others.",
    companyImage: "src/assets/Abhijeet_Company_Pic2.jpg",
    directorImage: "src/assets/Abhijeet_Pic1.jpg",
    directorName: "Abhijeet Singh Rana",
    directorTitle: "Founder & Managing Partner",
  };

  const industries = [
    {
      title: "Financial Services",
      description: "Secure solutions for banks, insurance, and fintech",
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant systems for medical providers",
    },
    {
      title: "E-Commerce",
      description: "Scalable platforms for online retailers",
    },
    {
      title: "Manufacturing",
      description: "Automation and ERP for production efficiency",
    },
    { title: "Education", description: "Learning systems and academic tools" },
    { title: "Logistics", description: "Tracking and management solutions" },
    {
      title: "Real Estate",
      description: "Property management and client portals",
    },
    {
      title: "Non-Profit",
      description: "Cost-effective solutions for organizations",
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Middle East Partner
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're proud to showcase our partnership with industry leaders who
            trust our IT solutions.
          </motion.p>
        </div>

        {/* Featured Client Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Company Image Section */}
              <div className="relative h-64 md:h-full">
                <img
                  src={clientDetails.companyImage}
                  alt={clientDetails.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {clientDetails.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Company Description & Director Info */}
              <div className="p-8 flex flex-col justify-center">
                <p className="text-gray-700 text-lg italic leading-relaxed mb-10">
                  “{clientDetails.description}”
                </p>
                <div className="flex flex-col items-center md:flex-row">
                  <div className=" w-40 h-40 rounded-full overflow-hidden shadow-md mr-5">
                    <img
                      src={clientDetails.directorImage}
                      alt={clientDetails.directorName}
                      className="w-full h-full object-cover shadow-2xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      {clientDetails.directorName}
                    </h4>
                    <p className="text-gray-500">
                      {clientDetails.directorTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Clients;

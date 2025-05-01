import React from 'react';
import { Search, FileText, Users, Code, CheckSquare, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            icon: <Search size={28} />,
            title: "Discovery & Assessment",
            description: "We analyze your current systems and identify opportunities for improvement."
        },
        {
            icon: <FileText size={28} />,
            title: "Strategic Planning",
            description: "We develop a comprehensive roadmap aligned with your business goals."
        },
        {
            icon: <Users size={28} />,
            title: "Team Assembly",
            description: "We match the right talent to your specific project requirements."
        },
        {
            icon: <Code size={28} />,
            title: "Implementation",
            description: "Our experts execute the plan using industry best practices."
        },
        {
            icon: <CheckSquare size={28} />,
            title: "Quality Assurance",
            description: "Rigorous testing ensures all deliverables meet our high standards."
        },
        {
            icon: <Rocket size={28} />,
            title: "Launch & Support",
            description: "We ensure a smooth deployment and provide ongoing maintenance."
        }
    ];

    const stepVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="process" className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
                        initial="hidden"
                        whileInView="visible"
                        variants={stepVariants}
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={stepVariants}
                    >
                        We follow a structured approach to deliver consistent results and maximize value for our clients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                            initial="hidden"
                            whileInView="visible"
                            variants={stepVariants}
                        >
                            <div className="p-3 mb-4 bg-blue-50 rounded-full text-blue-600 shadow-md">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 text-lg">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

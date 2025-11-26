import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nimisha Avasthi",
      position: "HR Manager, SEWA",
      quote:
        "The HRMS system developed for us streamlined our entire human resource operations. The team demonstrated exceptional understanding of our organizational needs and delivered a comprehensive solution that automated our recruitment, payroll, and performance management processes. Their attention to detail and responsive support made the transition smooth for our HR department.",
      rating: 5,
      image: "/Nimisha-Awasthi.jpg",
    },
    {
      id: 2,
      name: "Manish Vijayraj",
      position: "Founder, Scientific Systems & Chemicals",
      quote:
        "We approached the team to develop a Laboratory Management System (LMS) that could handle our complex workflow. The resulting system has transformed how we track samples, manage inventories, and generate reports. Their technical expertise and industry knowledge were evident in how they addressed our specific requirements. The LMS has significantly reduced errors and improved our operational efficiency.",
      rating: 4,
      image: "/DummyUser.jpg",
    },
    {
      id: 3,
      name: "Vinita Rathi",
      position: "Head of Department, Pikvan",
      quote:
        "We were facing compatibility issues with our mobile application on certain devices, causing us to lose a significant portion of potential users. The development team quickly identified the root causes and implemented solutions that expanded our app's compatibility across a wider range of mobile devices. Their technical troubleshooting skills and prompt resolution helped us increase our user base substantially.",
      rating: 5,
      image: "/DummyUser.jpg",
    },
    {
      id: 4,
      name: "Aashita Ravikumar",
      position: "Bussiness Development Executive, Talent.in",
      quote:
        "Hii Teams thank you so much for all your help and patience, We are very happy with your service. We hope to work with your team in the future as well. Thanks a lot once again 🤝",
      rating: 5,
      image: "/DummyUser.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
        </div>

        <div className="testimonial-slider relative">
          <div className="testimonial-container overflow-hidden">
            <div
              className="testimonials-wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card min-w-full"
                >
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    initial="hidden"
                    whileInView="visible"
                    variants={stepVariants}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="avatar">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
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
                    <blockquote className="text-lg text-gray-700 italic">
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
                onClick={() => setActiveIndex(index)}
                className={`indicator-dot w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"
                  } transition-all duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

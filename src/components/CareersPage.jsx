import React, { useState, useRef } from "react";
import {
  ChevronDown,
  CheckCircle,
  Search,
  Briefcase,
  Code,
  Database,
  Server,
  Users,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [expandedJob, setExpandedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const formRef = useRef(); // Create a ref for the form

  const locations = ["Indore"];

  const jobListings = [
    {
      id: 1,
      title: "AI Intern",
      location: "Indore",
      type: "Part-time",
      category: "AI",
      experience: "Freshers",
      postedDate: "2025-06-01",
      description:
        "We are looking for a motivated AI Intern to support our team in developing Optical Character Recognition (OCR) models and training AI systems using large volumes of technical manuals and documents. This internship offers hands-on experience in real-world AI projects involving data preprocessing, annotation, and model training.",
      responsibilities: [
        "Assist in collecting, organizing, and preprocessing scanned documents and manuals for OCR model training",
        "Perform text annotation and labeling to generate high-quality training datasets",
        "Support the development and fine-tuning of AI models for document understanding and classification",
        "Collaborate with data scientists and engineers to evaluate and improve model performance",
        "Document processes and contribute to the automation of data workflows",
        "Conduct research on state-of-the-art OCR and NLP techniques as guided by mentors",
      ],
      requirements: [
        "Basic understanding of Python and machine learning concepts",
        "Familiarity with OCR tools (e.g., Tesseract) is a plus",
        "Knowledge of data annotation tools such as LabelImg, Label Studio, or similar",
        "Detail-oriented mindset and willingness to handle large datasets",
        "Good problem-solving and communication skills",
        "Eagerness to learn and adapt in a fast-paced AI environment",
      ],
      benefits: [
        "Certificate of Internship and Letter of Recommendation",
        "Hands-on experience with real-world AI training pipelines",
        "Mentorship from experienced AI professionals",
        "Flexible working hours",
        "Opportunity to convert into a full-time role based on performance",
        "Collaborative and learning-focused work environment",
      ],
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const toggleJobDetails = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApplyNow = (jobTitle) => {
    setApplicationForm({ ...applicationForm, position: jobTitle });
    setShowApplicationForm(true);
    window.scrollTo({
      top: document.getElementById("application-form").offsetTop - 100,
      behavior: "smooth",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm({ ...applicationForm, [name]: value });
  };

  const handleFileChange = (e) => {
    setApplicationForm({ ...applicationForm, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: applicationForm.name,
      from_email: applicationForm.email,
      phone_number: applicationForm.phone,
      position: applicationForm.position,
      experience: applicationForm.experience,
      message: applicationForm.message,
      // Note: File attachments require special handling
      // EmailJS has a separate attachment feature in paid plans
    };

    // Replace these with your EmailJS credentials
    // You can find these in your EmailJS dashboard
    emailjs
      .send(
        "service_izvmjqw", // Get from EmailJS dashboard
        "template_v2oe2kl", // Get from EmailJS dashboard
        templateParams,
        "uPa9jn-XxoqQi1bkP" // Get from EmailJS dashboard
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormSubmitted(true);
        setIsSubmitting(false);

        // Reset form
        setApplicationForm({
          name: "",
          email: "",
          phone: "",
          position: applicationForm.position,
          experience: "",
          message: "",
          resume: null,
        });

        // Show success message for 3 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setSubmitError(
          "Failed to submit your application. Please try again later."
        );
        setIsSubmitting(false);
      });
  };

  // Filter jobs based on active tab, search term, and location
  const filteredJobs = jobListings.filter((job) => {
    const matchCategory = activeTab === "all" || job.category === activeTab;
    const matchSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchLocation =
      selectedLocation === "All Locations" || job.location === selectedLocation;

    return matchCategory && matchSearch && matchLocation;
  });

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="careers-hero relative bg-gray-900 text-cyan-600">
        <div className="overlay absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-100 "></div>
        <img
          src="/api/placeholder/1200/400"
          alt="Careers at SysAssist"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Build your career with SysAssist and work on innovative technology
              solutions that make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join SysAssist?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At SysAssist, we're more than just a workplace. We're a community
              of innovators, problem-solvers, and technology enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="benefit-card text-center p-6 rounded-xl bg-gray-50">
              <div className="benefit-icon mx-auto bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Work</h3>
              <p className="text-gray-600">
                Work on challenging projects using cutting-edge technologies to
                solve real-world problems for our clients.
              </p>
            </div>

            <div className="benefit-card text-center p-6 rounded-xl bg-gray-50">
              <div className="benefit-icon mx-auto bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a diverse team that values collaboration, continuous
                learning, and mutual respect.
              </p>
            </div>

            <div className="benefit-card text-center p-6 rounded-xl bg-gray-50">
              <div className="benefit-icon mx-auto bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-gray-600">
                Develop your skills and advance your career with our
                professional development programs and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our open positions and find the perfect role to match your
              skills and career goals.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="job-search-filters mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="search-box relative">
                <input
                  type="text"
                  placeholder="Search for positions..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Search
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
              </div>

              <div className="location-filter">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="job-card bg-white rounded-xl shadow-md overflow-hidden mb-6"
                >
                  <div
                    className="job-header px-6 py-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleJobDetails(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                        <span className="flex items-center">
                          <Briefcase size={16} className="mr-1" />{" "}
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase size={16} className="mr-1" /> {job.type}
                        </span>
                        <span className="flex items-center">
                          <Briefcase size={16} className="mr-1" /> Posted:{" "}
                          {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`transform transition-transform ${
                        expandedJob === job.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {expandedJob === job.id && (
                    <div className="job-details px-6 py-4 border-t border-gray-100">
                      <p className="text-gray-700 mb-6">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Requirements:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Benefits:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        className="btn-primary bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                        onClick={() => handleApplyNow(job.title)}
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-jobs-found bg-white p-8 rounded-xl text-center">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2">No positions found</h3>
                <p className="text-gray-600">
                  We couldn't find any positions matching your criteria. Please
                  try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Apply for a Position</h2>
              <p className="text-lg text-gray-600">
                Complete the form below to apply for your desired position.
                We'll review your application and get back to you soon.
              </p>
            </div>

            {formSubmitted ? (
              <div className="submission-success bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle
                  size={48}
                  className="mx-auto text-green-500 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600">
                  Thank you for your interest in joining our team. We'll review
                  your application and contact you soon.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="application-form bg-gray-50 rounded-xl p-8"
              >
                {submitError && (
                  <div className="error-message bg-red-50 text-red-500 p-4 rounded-lg mb-6">
                    {submitError}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={applicationForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={applicationForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={applicationForm.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="position"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="Position you're applying for"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={applicationForm.position}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="experience"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      placeholder="Enter your relevant experience"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={applicationForm.experience}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="resume"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Resume/CV
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        required
                      />
                      <div className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-500 flex items-center justify-between">
                        <span>
                          {applicationForm.resume
                            ? applicationForm.resume.name
                            : "Upload your resume (PDF or DOCX)"}
                        </span>
                        <Briefcase size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us why you're interested in this position and why you'd be a good fit"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={applicationForm.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-actions mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-submit bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-cyan-100  text-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the right position? Connect with us on social media to
              stay updated on future opportunities.
            </p>
            <div className="social-links flex justify-center space-x-4">
              <a
                href="#"
                className="social-link bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-link bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-link bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

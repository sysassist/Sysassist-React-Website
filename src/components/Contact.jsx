// components/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Select a Service'
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission to your backend
        // For now, we'll simulate a successful submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you! Your message has been sent successfully. We will be in touch soon.'
        });

        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            service: 'Select a Service'
        });
    };

    return (
        <section id="contact" className="contact py-25 bg-gradient-to-br from-white via-blue-50 to-cyan-100  ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your business with cutting-edge IT solutions? Contact us today to start the conversation.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    <div className="contact-info md:col-span-2">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="contact-icon">
                                        <Phone size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Phone</h4>
                                        <p className="text-gray-600">+91 9987986053</p>
                                        <p className="text-gray-600">Mon-Fri, 10AM-6PM EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="contact-icon">
                                        <Mail size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Email</h4>
                                        <p className="text-gray-600">inquiry@sysassist.co</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="contact-icon">
                                        <MapPin size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Location</h4>
                                        <p className="text-gray-600">739, Sai Kripa Colony</p>
                                        <p className="text-gray-600">Sai Kripa Main Road 2, Indore, </p>
                                        <p className="text-gray-600">Madhya Pradesh, India, 452010 </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
                                <div className="social-icons flex gap-4">
                                    <a href="https://www.linkedin.com" className="social-icon" aria-label="LinkedIn">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                                            <span className="text-lg font-bold">in</span>
                                        </div>
                                    </a>
                                    <a href="https://www.twitter.com" className="social-icon" aria-label="Twitter">
                                        <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center">
                                            <span className="text-lg font-bold">X</span>
                                        </div>
                                    </a>
                                    <a href="https://www.facebook.com" className="social-icon" aria-label="Facebook">
                                        <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center">
                                            <span className="text-lg font-bold">f</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form md:col-span-3">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                            {formStatus.submitted ? (
                                <div className={`form-message p-4 rounded-lg ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {formStatus.message}
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="Select a Service" disabled>Select a Service</option>
                                            <option value="IT Consulting">IT Consulting</option>
                                            <option value="IT Staffing">IT Staffing</option>
                                            <option value="Database Services">Database Services</option>
                                            <option value="Cloud Solutions">Cloud Solutions</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group mb-6">
                                        <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary flex items-center justify-center gap-2 w-full">
                                        Send Message <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

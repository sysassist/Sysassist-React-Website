import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ isScrolled }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80 shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        SysAssist.co
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    {/* Home */}
                    <Link
                        to="/"
                        className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
                    >
                        Home
                    </Link>

                    {/* Services */}
                    <div className="relative group">
                        <span className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer hover:underline underline-offset-4">
                            Services <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                        </span>
                        <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-xl border border-gray-200 rounded-xl mt-1 py-2 px-4 w-60 z-50 animate-fade-in">
                            <Link
                                to="/services/it-consulting"
                                className="px-2 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md transition"
                            >
                                💼 IT Consulting
                            </Link>
                            <Link
                                to="/services/it-staffing"
                                className="px-2 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 rounded-md transition"
                            >
                                👨‍💻 IT Staffing
                            </Link>
                        </div>
                    </div>

                    {/* Our Team */}
                    <Link
                        to="/about-us"
                        className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
                    >
                        About us
                    </Link>

                    {/* Careers */}
                    <Link
                        to="/careers"
                        className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
                    >
                        Careers
                    </Link>

                    {/* Contact */}
                    <Link
                        to="/contact"
                        className="relative text-gray-700 hover:text-blue-600 transition font-medium hover:underline underline-offset-4"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/contact"
                        className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full transition duration-300 shadow-sm"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 transition-all duration-300 animate-slide-down z-40">
                    <div className="flex flex-col px-6 py-4 space-y-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">🏠 Home</Link>

                        {/* Mobile Services Section */}
                        <div>
                            <span className="text-gray-700 font-medium">🛠️ Services</span>
                            <div className="ml-4 mt-2 space-y-2">
                                <Link
                                    to="/services/it-consulting"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                    💼 IT Consulting
                                </Link>
                                <Link
                                    to="/services/it-staffing"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                    👨‍💻 IT Staffing
                                </Link>
                            </div>
                        </div>

                        <Link to="/about-us" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">👥 About us</Link>
                        <Link to="/careers" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">🧑‍💼 Careers</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">📞 Contact</Link>

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-center transition"
                        >
                            🚀 Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

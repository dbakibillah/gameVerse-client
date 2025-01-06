import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="bg-gray-950 text-white py-12">
            <div className="container mx-auto px-6 lg:px-36">
                <footer className="footer flex flex-col md:flex-row justify-between items-start md:items-center p-10 md:p-20 space-y-8 md:space-y-0">
                    {/* Logo Section */}
                    <nav className="flex flex-col items-center md:items-start">
                        <figure className="mb-4">
                            <img src="https://i.ibb.co/zXyndVx/game.png" alt="Logo" className="w-28 h-28" />
                            <h2 className="text-3xl font-bold">GameVerse</h2>
                        </figure>
                    </nav>

                    {/* Company Links Section */}
                    <nav className="text-center md:text-left">
                        <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
                        <Link to="/about" className="link link-hover text-sm block mb-2">About us</Link>
                        <Link to="/contact" className="link link-hover text-sm block mb-2">Contact</Link>
                        <Link to="/login" className="link link-hover text-sm block mb-2">Login</Link>
                        <Link to="/register" className="link link-hover text-sm block mb-2">Register</Link>

                    </nav>

                    {/* Legal Links Section */}
                    <nav className="text-center md:text-left">
                        <h6 className="footer-title text-lg font-semibold mb-4">Social</h6>
                        <div className="flex justify-center space-x-8 mt-8">
                            <a
                                href="https://www.facebook.com/bakie.billah.7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="animate__animated animate__fadeIn"
                            >
                                <img
                                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                                    src="https://i.ibb.co/kh1GRcG/facebook.png"
                                    alt="Facebook"
                                />
                            </a>
                            <a
                                href="https://wa.me/+8801234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="animate__animated animate__fadeIn animate__delay-1.2s"
                            >
                                <img
                                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                                    src="https://i.ibb.co/LtqMNfX/whatsapp.png"
                                    alt="WhatsApp"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mollamdbakibillah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="animate__animated animate__fadeIn animate__delay-1.4s"
                            >
                                <img
                                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                                    src="https://i.ibb.co/b6K2TPm/linkedin.png"
                                    alt="LinkedIn"
                                />
                            </a>
                            <a
                                href="https://github.com/dbakibillah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="animate__animated animate__fadeIn animate__delay-1.6s"
                            >
                                <img
                                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                                    src="https://i.ibb.co/dQhdpfJ/social.png"
                                    alt="GitHub"
                                />
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
        </section>
    );
};

export default Footer;

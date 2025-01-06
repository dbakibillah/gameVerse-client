import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section
            className="py-16 bg-cover bg-center dark:bg-gray-900"
        >

            <div className="relative container mx-auto lg:px-24 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold dark:text-gray-100">
                        Contact <span className="text-blue-600">Us</span>
                    </h2>
                    <p className="text-lg dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                        Have questions or feedback? Get in touch with us, and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Get in Touch
                        </h3>
                        <div className="flex items-start">
                            <FaPhoneAlt className="text-blue-600 text-2xl mr-4" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    Phone Number
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">+123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaEnvelope className="text-blue-600 text-2xl mr-4" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    Email Address
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">support@gameverse.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    Office Location
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    123 Gaming St, Gamer City, GV 56789
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaClock className="text-blue-600 text-2xl mr-4" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    Office Hours
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Mon - Fri: 9:00 AM - 6:00 PM
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Sat - Sun: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Send Us a Message
                        </h3>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input input-bordered w-full mt-2 dark:bg-gray-700"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input input-bordered w-full mt-2 dark:bg-gray-700"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="textarea textarea-bordered w-full mt-2 dark:bg-gray-700"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-blue-600 hover:bg-blue-700 text-white w-full border-none"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

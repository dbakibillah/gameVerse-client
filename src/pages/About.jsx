import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import gamingAnimation from "../assets/gaming-animation.json";

const About = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        About <span className="text-blue-600">gameVerse</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        <strong>gameVerse</strong> is your ultimate gaming destination, built to help you discover your
                        next favorite game, connect with fellow gamers, and explore in-depth reviews. Whether you're a
                        casual player or a dedicated enthusiast, we bring the best of gaming to your fingertips.
                    </p>
                </div>

                {/* Animation Section */}
                <div className="flex justify-center mb-12">
                    <Lottie
                        animationData={gamingAnimation}
                        loop
                        className="w-full max-w-md md:max-w-lg h-[300px] md:h-[400px]"
                    />
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
                        <img
                            src="https://i.ibb.co.com/kqXRtdW/mission.png"
                            alt="Mission"
                            className="w-36 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            To connect gamers and create an interactive, inclusive platform for exploring games.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
                        <img
                            src="https://i.ibb.co.com/NLVbZ7T/whatoffer.png"
                            alt="Features"
                            className="w-36 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            What We Offer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Detailed reviews, top-rated games, and personalized watchlists for every gamer.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
                        <img
                            src="https://i.ibb.co.com/TPN2pRG/community.png"
                            alt="Community"
                            className="w-36 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Join Our Community
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Share your reviews, connect with fellow gamers, and stay updated with trends.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose gameVerse?
                    </h2>
                    <ul className="text-lg space-y-4 max-w-4xl mx-auto list-disc list-inside">
                        <li>Extensive reviews across diverse gaming genres.</li>
                        <li>Personalized recommendations tailored to your interests.</li>
                        <li>Interactive community features to share your thoughts.</li>
                        <li>Up-to-date curated lists of the top-rated games.</li>
                        <li>Modern and responsive design with dark mode support.</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <Link
                        to="/reviews"
                        className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg shadow-md transition-transform duration-300 hover:scale-105 border-none"
                    >
                        Explore All Reviews
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;

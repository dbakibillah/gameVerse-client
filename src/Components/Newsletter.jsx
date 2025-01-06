import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const Newsletter = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Thank you for subscribing!",
            text: "You will receive our latest updates via email.",
            showConfirmButton: false,
            timer: 1500,
        })
    }
    return (
        <section className="container mx-auto lg:px-24 p-4 bg-gray-100 dark:bg-gray-900">
            <div className="text-center py-12 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Subscribe to our <span className="text-blue-600">Newsletter</span></h2>
                <p className="text-gray-600 dark:text-gray-300 w-2/3 mx-auto">Stay updated with the latest reviews, trends, and exclusive content in the gaming world. Be the first to know about new releases and special offers!</p>
                <div>
                    <form onSubmit={handleNewsletterSubmit} className="flex items-center justify-center gap-2 mt-8">
                        <input
                            type="email"
                            name="email"
                            required
                            className="input input-bordered w-full max-w-xs dark:bg-gray-700 dark:text-gray-100 dark:focus:bg-gray-700"
                            placeholder="Enter your email address"
                        />
                        <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white border-none">
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;

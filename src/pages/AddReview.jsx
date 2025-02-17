import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [reviewData, setReviewData] = useState({
        coverImage: "",
        title: "",
        description: "",
        rating: 0,
        publishingYear: "",
        genre: "",
    });
    const [genres, setGenres] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetch("https://game-verse-server-six.vercel.app/sortgenre")
            .then((res) => res.json())
            .then((data) => setGenres(data.map((genre) => genre._id)))
            .catch((error) => console.error("Error fetching genres:", error));
    }, []);

    const handleChange = (event) => {
        setReviewData({ ...reviewData, [event.target.name]: event.target.value });
    };

    const handleRatingChange = (value) => {
        setReviewData({ ...reviewData, rating: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const newReview = {
            ...reviewData,
            userEmail: user.email,
            userName: user.displayName,
        };

        fetch("https://game-verse-server-six.vercel.app/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    title: "Review Added!",
                    text: "Your review has been successfully added.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                navigate("/myreviews");
            })
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue adding your review.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            })
            .finally(() => setIsSubmitting(false));
    };

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-10">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
                    Add New Review
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                            Game Cover Image URL
                        </label>
                        <input
                            type="url"
                            name="coverImage"
                            placeholder="Enter game cover image URL"
                            value={reviewData.coverImage}
                            onChange={handleChange}
                            className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                            Game Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter game title"
                            value={reviewData.title}
                            onChange={handleChange}
                            className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                            Review Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter a detailed review"
                            value={reviewData.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                Rating (1-5)
                            </label>
                            <Rating
                                initialRating={reviewData.rating}
                                onChange={handleRatingChange}
                                fullSymbol={<FaStar className="text-yellow-400 text-2xl" />}
                                emptySymbol={<FaRegStar className="text-gray-400 text-2xl" />}
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                Publishing Year
                            </label>
                            <input
                                type="number"
                                name="publishingYear"
                                placeholder="Enter publishing year (e.g., 2021)"
                                value={reviewData.publishingYear}
                                onChange={handleChange}
                                className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                            Genre
                        </label>
                        <select
                            name="genre"
                            value={reviewData.genre}
                            onChange={handleChange}
                            className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                            required
                        >
                            <option value="">Select Genre</option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                User Name
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                User Email
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn border-none bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit Review"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddReview;

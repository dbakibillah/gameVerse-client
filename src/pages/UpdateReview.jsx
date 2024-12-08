import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [reviewData, setReviewData] = useState({
        coverImage: "",
        title: "",
        description: "",
        rating: 0,
        publishingYear: "",
        genre: "",
    });

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        fetch(`https://game-verse-server-six.vercel.app/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setReviewData({
                        coverImage: data.coverImage,
                        title: data.title,
                        description: data.description,
                        rating: data.rating,
                        publishingYear: data.publishingYear,
                        genre: data.genre,
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching review:", error);
                Swal.fire("Error", "Failed to load review data.", "error");
            });
    }, [user, id, navigate]);

    const handleChange = (event) => {
        setReviewData({ ...reviewData, [event.target.name]: event.target.value });
    };

    const handleRatingChange = (value) => {
        setReviewData({ ...reviewData, rating: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedReview = {
            ...reviewData,
            userEmail: user.email,
            userName: user.displayName,
        };

        fetch(`https://game-verse-server-six.vercel.app/reviews/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedReview),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    Swal.fire({
                        title: "Review Updated!",
                        text: "Your review has been successfully updated.",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                    navigate("/myreviews");
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an issue updating your review.",
                        icon: "error",
                        confirmButtonText: "Try Again",
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue updating your review.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-10">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
                    Update Review
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
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Sports">Sports</option>
                            <option value="Strategy">Strategy</option>
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
                        >
                            Update Review
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateReview;

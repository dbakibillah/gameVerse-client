import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const fetchReviews = (sortField, sortOrder) => {
        const query = sortField
            ? `?sortField=${sortField}&sortOrder=${sortOrder}`
            : "";
        fetch(`http://localhost:5000/sortreviews${query}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Error fetching reviews:", error));
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value);

        if (value === "rating-asc") {
            fetchReviews("rating", "asc");
        }
        else if (value === "rating-desc") {
            fetchReviews("rating", "desc");
        }
        else if (value === "year-asc") {
            fetchReviews("publishingYear", "asc");
        }
        else if (value === "year-desc") {
            fetchReviews("publishingYear", "desc");
        }
    };

    return (
        <section className="bg-gray-50 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    All Reviews
                </h2>

                <div className="flex justify-end mb-6">
                    <select
                        value={sortOption}
                        onChange={handleSortChange}
                        className="select select-bordered"
                    >
                        <option value="">Sort By</option>
                        <option value="rating-asc">Rating (Low to High)</option>
                        <option value="rating-desc">Rating (High to Low)</option>
                        <option value="year-asc">Year (Oldest to Newest)</option>
                        <option value="year-desc">Year (Newest to Oldest)</option>
                    </select>
                </div>

                {reviews.length === 0 ? (
                    <p className="text-center text-gray-500">No reviews available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {reviews.map((review) => (
                            <div
                                key={review._id}
                                className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
                            >
                                <img
                                    src={review.coverImage}
                                    alt={review.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />

                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {review.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Genre:</strong> {review.genre}
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    <strong>Rating:</strong> {review.rating}/5
                                </p>
                                <Link
                                    to={`/reviews/${review._id}`}
                                    className="btn mt-auto"
                                >
                                    Explore Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllReviews;

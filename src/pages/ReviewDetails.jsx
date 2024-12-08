import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const ReviewDetails = () => {
    const review = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToWatchList = () => {
        if (!user) {
            navigate("/login");
            return;
        }

        const watchlistData = {
            reviewId: review._id,
            coverImage: review.coverImage,
            title: review.title,
            description: review.description,
            rating: review.rating,
            genre: review.genre,
            userName: user.displayName,
            userEmail: user.email,
        };

        fetch("https://game-verse-server-six.vercel.app/watchlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(watchlistData),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    title: "Added to WatchList!",
                    text: "The review has been added to your watchlist.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                console.error("Error adding to watchlist:", error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while adding to watchlist.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div className="min-h-screen dark:bg-gray-900">
            <section className="container mx-auto lg:px-24 py-8 dark:bg-gray-900 dark:text-gray-200">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <figure className="w-full lg:w-1/3">
                        <img
                            src={review.coverImage}
                            alt={review.title}
                            className="w-full h-auto rounded-lg object-cover shadow-md"
                        />
                    </figure>

                    <div className="w-full lg:w-2/3 lg:min-h-[600px] flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                {review.title}
                            </h1>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {review.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <p className="text-gray-600 dark:text-gray-300">
                                    <strong>Rating:</strong> {review.rating}/5
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    <strong>Author:</strong> {review.userName}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    <strong>Genre:</strong> {review.genre}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    <strong>Email:</strong> {review.userEmail}
                                </p>
                            </div>
                        </div>

                        <div>
                            {user ? (
                                <button
                                    onClick={handleAddToWatchList}
                                    className="btn bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full border-none"
                                >
                                    Add to Watchlist
                                </button>
                            ) : (
                                <p className="text-center text-red-500">
                                    Please{" "}
                                    <span
                                        onClick={() => navigate("/login")}
                                        className="underline cursor-pointer"
                                    >
                                        log in
                                    </span>{" "}
                                    to add to your WatchList.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewDetails;

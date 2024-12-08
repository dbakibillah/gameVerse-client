import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!user || !user.email) {
            navigate("/login");
            return;
        }

        fetch(`https://game-verse-server-six.vercel.app/myreviews?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((error) => console.error("Error fetching reviews:", error));
    }, [user, navigate]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://game-verse-server-six.vercel.app/reviews/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        setReviews((prevReviews) =>
                            prevReviews.filter((review) => review._id !== id)
                        );
                        Swal.fire("Deleted!", "Your review has been deleted.", "success");
                    })
                    .catch((error) => {
                        console.error("Error deleting review:", error);
                        Swal.fire("Error!", "Failed to delete the review.", "error");
                    });
            }
        });
    };

    const handleUpdate = (id) => {
        navigate(`/updateReview/${id}`);
    };

    return (
        <div className="dark:bg-gray-900 min-h-screen">
            <section className="container mx-auto lg:px-24 py-8 dark:bg-gray-900 dark:text-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    My Reviews
                </h1>

                {reviews.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300">No reviews found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        #
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Title
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Rating
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Genre
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review, index) => (
                                    <tr
                                        key={review._id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {review.title}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            {review.rating}/5
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            {review.genre}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleUpdate(review._id)}
                                                className="btn bg-blue-500 border-none hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg mr-2 dark:bg-blue-700 dark:hover:bg-blue-800"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="btn bg-red-500 border-none hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg dark:bg-red-600 dark:hover:bg-red-800"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </div>
    );
};

export default MyReviews;

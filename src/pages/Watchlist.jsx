import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Watchlist = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        fetch(`http://localhost:5000/watchlist?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setWatchlist(data);
            })
            .catch((error) => console.error("Error fetching watchlist:", error));
    }, [user, navigate]);

    const handleRemove = (id) => {
        fetch(`http://localhost:5000/watchlist/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                setWatchlist((prevWatchlist) =>
                    prevWatchlist.filter((item) => item._id !== id)
                );
                Swal.fire({
                    title: "Removed!",
                    text: "The item has been removed from your watchlist.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                console.error("Error removing item:", error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while removing the item.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div className="dark:bg-gray-900 min-h-screen">
            <section className="container mx-auto lg:px-24 py-8 dark:bg-gray-900 dark:text-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-100">
                    My Watchlist
                </h1>

                {watchlist.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300">No games in your watchlist.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">#</th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Game Title
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Rating
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Genre
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {watchlist.map((item, index) => (
                                    <tr
                                        key={item._id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {item.title}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            {item.rating}/5
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            {item.genre}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleRemove(item._id)}
                                                className="btn bg-red-500 hover:bg-red-600 text-white border-none font-bold py-1 px-3 rounded-lg dark:bg-red-600 dark:hover:bg-red-700"
                                            >
                                                Remove
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

export default Watchlist;

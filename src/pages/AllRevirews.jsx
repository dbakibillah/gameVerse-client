import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [genres, setGenres] = useState([]);
    const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

    const fetchReviews = (sortField, sortOrder, genreFilter) => {
        const query = new URLSearchParams();
        if (sortField) query.append("sortField", sortField);
        if (sortOrder) query.append("sortOrder", sortOrder);
        if (genreFilter) query.append("genre", genreFilter);

        fetch(`https://game-verse-server-six.vercel.app/sortreviews?${query.toString()}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Error fetching reviews:", error));
    };

    useEffect(() => {
        fetch("https://game-verse-server-six.vercel.app/sortgenre")
            .then((res) => res.json())
            .then((data) => setGenres(data))
            .catch((error) => console.error("Error fetching genres:", error));
    }, []);

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value);

        if (value === "rating-asc") {
            fetchReviews("rating", "asc");
        } else if (value === "rating-desc") {
            fetchReviews("rating", "desc");
        } else if (value === "year-asc") {
            fetchReviews("publishingYear", "asc");
        } else if (value === "year-desc") {
            fetchReviews("publishingYear", "desc");
        }
    };

    const handleGenreFilter = (e) => {
        const genre = e.target.value;
        setSelectedGenre(genre);
        fetchReviews(null, null, genre);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-neutral-100">
                    All Reviews
                </h2>

                <div className="flex justify-end mb-6 gap-2 items-center">
                    <details
                        className="dropdown"
                        onToggle={(e) => setIsGenreDropdownOpen(e.target.open)}
                    >
                        <summary className="btn m-1 flex items-center gap-2 dark:bg-gray-800 dark:text-gray-100 border-none hover:bg-gray-100 dark:hover:bg-gray-700">
                            Filter by Genre
                            <i
                                className={`fa-solid text-lg ${isGenreDropdownOpen ? "fa-caret-up" : "fa-caret-down"
                                    }`}
                            ></i>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 dark:bg-gray-800 dark:text-gray-200 rounded-box z-[1] w-52 p-2 shadow mt-1">
                            <li>
                                <button
                                    className={`btn btn-ghost w-full dark:hover:bg-gray-700 ${selectedGenre === "" && "font-bold text-blue-500"
                                        }`}
                                    onClick={handleGenreFilter}
                                    value=""
                                >
                                    All
                                </button>
                            </li>
                            {genres.map((genre) => (
                                <li key={genre._id}>
                                    <button
                                        className={`btn btn-ghost w-full dark:hover:bg-gray-700 ${selectedGenre === genre._id && "font-bold text-blue-500"
                                            }`}
                                        onClick={handleGenreFilter}
                                        value={genre._id}
                                    >
                                        {genre._id} ({genre.count} Reviews)
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </details>

                    <details
                        className="dropdown ml-2"
                        onToggle={(e) => setIsSortDropdownOpen(e.target.open)}
                    >
                        <summary className="btn flex items-center gap-2 dark:bg-gray-800 dark:text-gray-100 border-none hover:bg-gray-100 dark:hover:bg-gray-700">
                            Sort By
                            <i
                                className={`fa-solid text-lg ${isSortDropdownOpen ? "fa-caret-up" : "fa-caret-down"
                                    }`}
                            ></i>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 dark:bg-gray-800 dark:text-gray-200 rounded-box z-[1] w-52 p-2 shadow mt-1">
                            <li>
                                <button
                                    className={`btn btn-ghost w-full dark:hover:bg-gray-700 ${sortOption === "rating-asc" && "font-bold text-blue-500"
                                        }`}
                                    onClick={() => handleSortChange({ target: { value: "rating-asc" } })}
                                >
                                    Rating (Low to High)
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`btn btn-ghost w-full dark:hover:bg-gray-700 ${sortOption === "rating-desc" && "font-bold text-blue-500"
                                        }`}
                                    onClick={() => handleSortChange({ target: { value: "rating-desc" } })}
                                >
                                    Rating (High to Low)
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`btn btn-ghost w-full dark:hover:bg-gray-700 ${sortOption === "year-asc" && "font-bold text-blue-500"
                                        }`}
                                    onClick={() => handleSortChange({ target: { value: "year-asc" } })}
                                >
                                    Year (Oldest to Newest)
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`btn btn-ghost w-full dark:hover:bg-gray-700 ${sortOption === "year-desc" && "font-bold text-blue-500"
                                        }`}
                                    onClick={() => handleSortChange({ target: { value: "year-desc" } })}
                                >
                                    Year (Newest to Oldest)
                                </button>
                            </li>
                        </ul>
                    </details>
                </div>

                {reviews.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-300">
                        No reviews available.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {reviews.map((review) => (
                            <div
                                key={review._id}
                                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src={review.coverImage}
                                    alt={review.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />

                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                                    {review.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                    <strong>Genre:</strong> {review.genre}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    <strong>Rating:</strong> {review.rating}/5
                                </p>
                                <Link
                                    to={`/reviews/${review._id}`}
                                    className="btn mt-auto bg-blue-500 text-gray-100 dark:bg-gray-600 dark:text-gray-100 border-none dark:hover:bg-gray-700"
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

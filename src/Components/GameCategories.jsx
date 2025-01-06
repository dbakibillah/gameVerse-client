import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GameCategories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://game-verse-server-six.vercel.app/gamecategories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    const handleCardClick = (genre) => {
        navigate(`/reviews?genre=${genre}`);
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto lg:px-24 px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Explore by Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category._id}
                            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
                            onClick={() => handleCardClick(category._id)}
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                {category._id}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {category.count} Reviews
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GameCategories;

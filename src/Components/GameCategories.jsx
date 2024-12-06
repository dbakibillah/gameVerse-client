import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GameCategories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/gamecategories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    const handleCardClick = (genre) => {
        navigate(`/reviews?genre=${genre}`);
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore by Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category._id}
                            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
                            onClick={() => handleCardClick(category._id)}
                        >
                            <h3 className="text-xl font-bold text-gray-800">{category._id}</h3>
                            <p className="text-gray-600">{category.count} Reviews</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GameCategories;

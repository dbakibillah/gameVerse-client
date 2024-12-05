import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HighestRatedGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/highestratedgames")
            .then((res) => res.json())
            .then((data) => setGames(data))
            .catch((error) => console.error("Error fetching highest-rated games:", error));
    }, []);

    return (
        <section className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Highest Rated Games</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map((game) => (
                        <div key={game._id} className="bg-white shadow-lg rounded-lg p-4">
                            <img
                                src={game.coverImage}
                                alt={game.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                            <p className="text-gray-600 mb-4">{game.description.slice(0, 100)}...</p>
                            <p className="text-gray-800 font-semibold mb-2">Rating: {game.rating}/5</p>
                            <Link
                                className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-2 rounded-lg"
                                to={`/reviews/${game._id}`}>
                                Explore Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighestRatedGames;

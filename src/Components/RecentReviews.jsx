import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const RecentReviews = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/recentReviews")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Error fetching recent reviews:", error));
    }, []);

    const handleCardClick = (id) => {
        navigate(`/reviews/${id}`);
    };

    return (
        <section className="bg-blue-50 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Recently Added Games</h2>
                <Marquee gradient={false} pauseOnHover={true}>
                    <div className="flex">
                        {reviews.map((review) => (
                            <div
                                key={review._id}
                                className="bg-white mx-2 rounded-lg p-5 w-1/3 cursor-pointer hover:shadow-xl transition duration-300"
                                onClick={() => handleCardClick(review._id)}
                            >
                                <img
                                    src={review.coverImage}
                                    alt={review.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-sm font-bold text-gray-800">
                                    {review.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default RecentReviews;

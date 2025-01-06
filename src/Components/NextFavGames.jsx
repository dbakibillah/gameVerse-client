import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const NextFavGames = () => {
    const [text] = useTypewriter({
        words: ['gameVerse', 'Universe of Games', 'Unleash the Fun!'],
        loop: 0,
        cursor: true,
        cursorStyle: '_',
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 2000,
    });

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-4 lg:px-24 text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Welcome to <span className="text-blue-600">{text}</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Discover your next favorite game with our extensive reviews, top-rated games, and an interactive community.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Extensive Game Reviews</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Read detailed reviews from our community, get insights into gameplay, graphics, and more.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Top-Rated Games</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Browse our curated list of top-rated games updated regularly to reflect the latest preferences.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Personalized WatchList</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Save your favorite games and keep track of them with our personalized watchlist feature.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <Link
                        to="/reviews"
                        className="btn bg-blue-700 border-none text-white hover:bg-blue-800 w-full sm:w-auto px-6 py-2 rounded-lg"
                    >
                        Explore All Reviews
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NextFavGames;

import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGames from '../components/HighestRatedGames';
import GameCategories from '../components/GameCategories';
import RecentReviews from '../components/RecentReviews';

const Home = () => {
    return (
        <section>
            <Banner />
            <HighestRatedGames />
            <GameCategories />
            <RecentReviews />
        </section>
    );
};

export default Home;
import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGames from '../components/HighestRatedGames';
import GameCategories from '../components/GameCategories';
import RecentReviews from '../components/RecentReviews';
import NextFavGames from '../components/NextFavGames';

const Home = () => {
    return (
        <section>
            <Banner />
            <NextFavGames />
            <HighestRatedGames />
            <GameCategories />
            <RecentReviews />
        </section>
    );
};

export default Home;
import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGames from '../components/HighestRatedGames';
import GameCategories from '../components/GameCategories';
import RecentReviews from '../components/RecentReviews';
import NextFavGames from '../components/NextFavGames';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <section className='bg-gray-100 dark:bg-gray-900'>
            <Banner />
            <NextFavGames />
            <HighestRatedGames />
            <GameCategories />
            <RecentReviews />
            <Newsletter />
        </section>
    );
};

export default Home;
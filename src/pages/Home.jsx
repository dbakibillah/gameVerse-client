import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGames from '../components/HighestRatedGames';
import GameCategories from '../components/GameCategories';

const Home = () => {
    return (
        <section>
            <Banner />
            <HighestRatedGames />
            <GameCategories />
        </section>
    );
};

export default Home;
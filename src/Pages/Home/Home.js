import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Specialists from '../Specialists/Specialists';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Specialists></Specialists>
        </div>
    );
};

export default Home;
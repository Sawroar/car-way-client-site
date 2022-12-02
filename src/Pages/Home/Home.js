import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Specialists from '../Specialists/Specialists';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <div className='divider'>O</div>
            <InfoCards></InfoCards>
            <div className='divider'>O</div>
            <Specialists></Specialists>
            <div className='divider'>O</div>
        </div>
    );
};

export default Home;
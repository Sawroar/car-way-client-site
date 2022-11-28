import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Specialists from '../Specialists/Specialists';

const Home = () => {
    return (
        <div className='mt-10'>
            <InfoCards></InfoCards>
            <Specialists></Specialists>
        </div>
    );
};

export default Home;
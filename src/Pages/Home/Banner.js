import React from 'react';
import banner from './../../Assets/car.jpg'
const Banner = () => {
    return (
        <div className='h-[1200px] flex justify-center items-center p-4 '>
            <img src={banner} alt="" className='w-full' />
        </div>
    );
};

export default Banner;
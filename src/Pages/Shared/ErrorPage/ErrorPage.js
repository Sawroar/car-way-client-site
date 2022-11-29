import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from './../../../Assets/kec2_cpyi_210528.jpg'
const ErrorPage = () => {
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>

                <img src={errorimg} height={'500px'} width={'500px'} alt="" />
                <p className='text-center text-4xl text-red-600 mb-4'>404! Opps Wrong Routes. </p>
                <p className=' text-center'>
                    <Link to='/' className='text-xl text-blue-600'>Go to Home</Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
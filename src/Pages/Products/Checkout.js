import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title, img, price, Purchase, Location, Call, PostDate } = useLoaderData()

    return (
        <div className='mt-10'>
            <div className="card card-compact mt-5 w-98 bg-base-100 shadow-xl mb-4">
                <figure><img src={img} alt="Shoes" className='rounded-lg shadow-2xl' /></figure>
                <div className="card-body mt-2 flex justify-center items-center p-4 ">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price:${price}</p>
                    <p className='text-2xl font-semibold'>Location:{Location}</p>
                    <p className='text-xl text-gray-600 font-semibold'>Post Date:{PostDate}</p>
                    <div>
                        <button className='btn btn-info'>Book Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ services }) => {
    const { _id, title, img, price, Purchase, Location, Call, PostDate } = services
    return (
        <div className="card w-96 glass mb-11">
            <figure><img src={img} className='w-full' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl"> {title}</h2>
                <p className='text-2xl'> <p className='text-green-500'> Price:${price}</p></p>
                <p className='text-2xl'>Purchase Date:{Purchase}</p>
                <p className='text-2xl'> Post Date:{PostDate}</p>
                <p className='text-bold'>{Call}</p>
                <p className='text-2xl'> Location:{Location}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>    <button className="btn btn-info">See More...</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
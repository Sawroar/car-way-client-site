import React from 'react';

const Specialist = ({ card }) => {
    const { name, role, email, description, img } = card;
    return (
        <div className="card w-96 glass mb-11">
            <figure><img src={img} className='w-full' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-red-600'>{role}</p>
                <p>Email:{email}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info">See More...</button>
                </div>
            </div>
        </div>
    );
};

export default Specialist;
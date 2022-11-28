import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon } = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-11 mb-11">
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
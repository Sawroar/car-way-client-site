import React from 'react';
import like from './../../../src/Assets/like.png'
import gear from './../../../src/Assets/gears.png'
import map from './../../../src/Assets/google-maps.png'
import InfoCard from '../../Routes/InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: '100% TRANSPARENCY',
            description: 'We ensure that you get a well detailed break-up of each minor repair work',
            icon: like,
        },
        {
            id: 2,
            name: 'GENUINE SPARE PARTS',
            description: 'We useuthorized genuine spare parts & accessories to ensure that your',
            icon: gear,
        },
        {
            id: 3,
            name: 'TRUSTED & QUALITY SERVICE',
            description: 'You can avail our free pickup & drop so that you can just sit & relax',
            icon: map,
        }

    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
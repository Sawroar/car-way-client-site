import React from 'react';
import jason from './../../../src/Assets/images/jason.jpg'
import jonathon from './../../../src/Assets/images/jonathon.jpg'
import esther from './../../../src/Assets/images/esther.jpg'
import robert from './../../../src/Assets/images/robert.jpg'
import Specialist from './Specialist';
const Specialists = () => {
    const cardData = [
        {
            id: 1,
            name: 'JASON BLACKHEAD',
            role: 'Senior Mechanic',
            email: 'blackhead@gmail.com',
            description: 'An Auto Mechanic fixes vehicles and replaces their parts for customers. Their duties include repairing the vehicles mechanical components, diagnosing problems with cars/ trucks and performing maintenance work on them as well.',
            img: jason,

        },
        {
            id: 2,
            name: 'JONATHAN DUCK',
            role: 'Board Director',
            email: 'jonathan@gmail.com',
            description: 'A good Auto Mechanic is someone who is trustworthy, honest and knows how to solve problems quickly. These mechanics know how to run diagnostics to understand an issue with a vehicle, and they know how to communicate with customers clearly and concisely.',
            img: jonathon,

        },
        {
            id: 3,
            name: 'ESTHER FLETCHER',
            role: 'Senior Inspector',
            email: 'esther@gmail.com',
            description: 'Auto Mechanics work with other staff in the repair department or automobile dealership to complete necessary repairs. Typically, Auto Mechanics report to a lead mechanic who works directly with customers, but sometimes Auto Mechanics need to communicate with customers before, during and after repairs are completed.',
            img: esther,
        },
        {
            id: 4,
            name: 'ROBERT HARWING',
            role: 'Mechanic',
            email: 'harwing@gmail.com',
            description: 'Auto Mechanics provide repairs to customer vehicles when brought into the repair shop. Auto Mechanics work on everything from engines, to belts, to transmissions, to brakes.',
            img: robert,

        }
    ]
    return (
        <div>
            <h1 className='font-bold text-center text-5xl mt-4'>MEET OUR SPECIALIST</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-4'>
                {

                    cardData.map(card => <Specialist key={card.id} card={card}></Specialist>)
                }

            </div>

        </div>
    );
};

export default Specialists;
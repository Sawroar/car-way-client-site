import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-way-server-site.vercel.app/options')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-6xl text-semibold mt-6'>Our Products  </h2>
            <div className='divider'>O</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-4'>

                {
                    services.map(service => <Product key={service._id} services={service}></Product>)
                }
            </div>
            <div className='divider'>O</div>
        </div>
    );
};

export default Products;
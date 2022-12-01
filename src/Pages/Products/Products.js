import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/options')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-6xl'>This is products  {services.length} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-4'>

                {
                    services.map(service => <Product key={service._id} services={service}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
import React from 'react';

const Order = ({ order }) => {
    const { customer, product, price, } = order
    return (
        <tr className='mb-10'>
            <th>{1 + 1}</th>
            <td>{customer}</td>
            <td>{product}</td>
            <td>${price}</td>
            <td><button className='btn btn-primary'>Unpaid</button></td>
            <td><button className='btn btn-success text-white'> Payment</button></td>
            <td><button className='btn btn-secondary'>Cancel</button></td>
        </tr>
    );
};

export default Order;
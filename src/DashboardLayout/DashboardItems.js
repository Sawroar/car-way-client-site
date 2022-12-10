import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Order from './Order';

const DashboardItems = () => {
    const { user, loading } = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`https://car-way-server-site.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url)
    //         const data = await res.json()
    //         return data

    //     }
    // })
    console.log(orders);
    return (
        <div>
            <h1 className='text-4xl'>My Orders {orders.length} </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order,) => <Order key={order._id} order={order}></Order>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardItems;
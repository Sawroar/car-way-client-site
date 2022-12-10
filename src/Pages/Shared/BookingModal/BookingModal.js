import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ title, price }) => {
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const product = form.product.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            customer: name,
            email, location, phone, product, price
        }

        console.log(booking);
        fetch('https://car-way-server-site.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('The item is booked')
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" placeholder="Type here" name='product' defaultValue={title} disabled className="input w-full input-bordered font-semibold bg-slate-100 " />
                        <input type="text" name='email' placeholder="Type here" defaultValue={user?.uid ? user.email : "no UserEmail Found"} disabled className="input w-full input-bordered font-semibold bg-slate-100 " />
                        <input type="text" name='name' placeholder="Type here" defaultValue={user?.uid ? user.displayName : "no UserEmail Found"} disabled className="input w-full input-bordered font-semibold bg-slate-100 " />
                        <input type="text" placeholder="Type here" name='price' defaultValue={price} className="input w-full input-bordered font-semibold bg-slate-100 " />
                        <input type="text" name='location' placeholder="Your Location" className="input w-full input-bordered " />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input w-full input-bordered " />
                        <br />
                        <input className=" btn btn-accent input w-full " type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
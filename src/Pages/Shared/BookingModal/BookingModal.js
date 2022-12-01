import React from 'react';

const BookingModal = ({ title }) => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"></h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" placeholder="Type here" defaultValue={title} className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <br />
                        <input className=" btn btn-accent input w-full " type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
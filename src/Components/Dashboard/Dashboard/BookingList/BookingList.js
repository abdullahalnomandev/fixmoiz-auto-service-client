import React, { useContext, useEffect, useState } from 'react';
import { UseContext } from '../../../../App';
import SideBar from '../../SideBar/SideBar';
import BookingListCard from '../BookingListCard/BookingListCard';

const BookingList = () => {

    const [bookingList, setBookingList] = useState([]);
    const [logInUser, setLogInUser] = useContext(UseContext);

    useEffect(() => {
        fetch(`http://localhost:5000/getBookingList?email=${logInUser.email}`)
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])

    return (
        <section className="container-fluid row">
            <SideBar />
            <div className="col-md-10">
                <div className="row">
                    {
                        bookingList.map(booking => <BookingListCard key={booking._id} booking={booking} />)
                    }

                    {
                        bookingList.length === 0 && <h5 className="text-center mt-5 text-primary">You have no booking</h5>
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingList;
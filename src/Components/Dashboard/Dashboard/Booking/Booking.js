import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { UseContext } from '../../../../App';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import visa from '../../../../images/visa.jpg';

import { useParams } from 'react-router';

const Booking = () => {

    const { _id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getAllServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const [logInUser, setLogInUser] = useContext(UseContext);
    const [bookingData, setBookingData] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm()
    ;

    const singleServices = services.find(service => service._id == _id);

    const onSubmit = data => {
        console.log(data);

        setBookingData(data);
    };
    const handlePaymentSuccess = paymentCard => {
        const orderDetails = {
            name: bookingData.name,
            email: bookingData.email,
            service: bookingData.service,
            paymentCard,
            status: 'Pending'

        }
        fetch('http://localhost:5000/addBookingList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    alert("Your Order has been successful...")
                }
            })
    }

    return (

        <section className="container-fluid row ">
            <SideBar />
            <div className="col-md-10 bt-secondary">
                <div style={{ display: bookingData ? 'none' : 'block' }} >

                    <form style={{ maxWidth: '800px' }} className="mt-3 ml-5" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="name" defaultValue={logInUser.name} ref={register({ required: true })} /><br />
                        <input className="form-control" name="email" defaultValue={logInUser.email} ref={register({ required: true })} /><br />
                        <input className="form-control" name="service" defaultValue={singleServices?.title} ref={register({ required: true })} /><br />
                        <input className="form-control" name="phone" ref={register({ required: true })} placeholder="Phone" /><br />
                        {errors.phone && <span style={{ color: 'red' }} >Phone is required</span>}
                        <p>Your Service charge will be ${singleServices?.amount}</p>
                        <br />
                        <input className="btn-primary login-button" type="submit" />
                    </form>
                </div>
                <div style={{ display: bookingData ? 'block' : 'none' }} className="payment">
                    <h5 className="text-primary mt-3 mb-4 ml-5">PAY WITH VISA CARD</h5>
                    <img style={{maxWidth:'100px'}} className="img-fluid ml-5 mb-5 " src={visa} alt="" />
                    <ProcessPayment handlePayment={handlePaymentSuccess} />

                </div>
            </div>

        </section>
    );
};

export default Booking;
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess('');
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError('');
            handlePayment(paymentMethod.card.brand)
        }
    };

    return (
        <div className="div ml-5">
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className="mt-5 btn-success w-30 mb-4" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red', marginTop: "10px" }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green', marginTop: '10px' }}>Thank you. Your payment was successful.</p>
            }
        </div>
    );
};

export default SimpleCardForm;
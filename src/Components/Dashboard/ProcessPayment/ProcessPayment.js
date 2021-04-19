import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardFomr';
const stripePromise = loadStripe
    ('pk_test_51IeL2oAZqz8dmXSavlqMFtOpYdcRI8vskKSmTSQ3GbviAA1v0WlXTCADNjKdv806t71CvPbksIyJIl2pIyAoESOS0083AcVM7y');
const ProcessPayment = ({ handlePayment }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment} />
            </Elements>
        </div>
    );
};

export default ProcessPayment;
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './BookingListCard.css';

const BookingListCard = (props) => {

    const { service, email, name, status } = props.booking;

    return (
        <div className="col-md-3">
            <Card className="mb-3 mt-3 text-center ml-4 ">
                <Card.Body className="book-card">
                    <Card.Title className="text-primary">{service}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                    <Card.Text>
                        <Button variant="danger">{status}</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default BookingListCard;
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceCardDetails.css';

const ServiceCardDetails = (props) => {

    const { _id, title, description, img, amount } = props.service;

    let history = useHistory();
    function handleServiceClick() {
        history.push(`/dashboard/booking/${_id}`);
    }

    return (
        <div className="col-md-4 ">
            <Card onClick={handleServiceClick} className="service-description-card col-sm mb-5">
                <Card.Img src={img} />
                <Card.Body>
                    <Card.Title>
                        <h5 className="text-primary">{title}</h5>
                        <h4>${amount}</h4>
                    </Card.Title>
                    <Card.Text>
                        <p className="text-secondary">{description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCardDetails;
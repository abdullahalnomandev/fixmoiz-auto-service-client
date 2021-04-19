import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialsDetails = ({ testimonial }) => {

    return (
        <div className="col-md-4 ">
            <Card className="mb-3 service-description-card">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex">
                            <div className="img">
                                <img className="mr-3" style={{width:'60px',height:'60px',borderRadius:'100%'}} src={testimonial.img} alt="" />
                            </div>
                            <div>
                                <h5 className="text-primary">{testimonial.name}</h5>
                                <h6>{testimonial.companyName}</h6>
                            </div>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <p className="text-secondary">{testimonial.review}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TestimonialsDetails;
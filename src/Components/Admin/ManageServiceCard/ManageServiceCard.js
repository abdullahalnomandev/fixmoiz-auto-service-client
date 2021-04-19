import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageServiceCard = (props) => {
    const { title, description, img, _id } = props.service;

    const [toHide, setHide] = useState(null);

    console.log(toHide);

    const deleteProduct = (event, id) => {

        setHide(event.target.parentNode);

        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                    alert("Deleted Successfully...")

                }
            })
    }
    const style = {
        width: '18rem',
        marginLeft: '20px',
        boxShadow: '25px 32px 29px #ddd', borderRadius: '10px',
    }
    return (
        <div className="col-md-4 mt-5 ">
            {
                !toHide &&
                <Card style={style} className="text-center mb-3 ">
                    <Card.Img className="img-fluid mt-3" style={{ maxWidth: '100px', margin: 'auto' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>  {description}</p>
                        </Card.Text>
                        <Button onClick={(event) => deleteProduct(event, _id)} variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            }
        </div>
    );
};

export default ManageServiceCard;
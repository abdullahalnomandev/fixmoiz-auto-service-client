import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/-404-not-found-png.png';

const NotFoundFile = () => {
    return (
        <>
            <div style={{ marginTop: '70px', textAlign: 'center', backgroundColor: '#F7F7F7' }} >
                <img style={{ width: '500px' }} className="img-fluid" src={notFound} alt="" />
            </div>
            <div style={{ width: '200px', margin: 'auto', marginTop: '10px' }} >
                <Link to="/">
                    <button className="btn-primary mb-5">Go Home</button>
                </Link>
            </div>
        </>
    );
};

export default NotFoundFile;
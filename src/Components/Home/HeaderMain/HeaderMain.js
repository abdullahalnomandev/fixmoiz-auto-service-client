import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="header-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-white  pt-5">HONEST, QUALITY WORK </h2>
                        <h1 className="text-white mb-5">AT AFFORDABLE PRICE</h1>
                        <p className="text-white">We provide top-notch service for import and domestic car repairs. Servicing Brakes,<br /> Exhaust, Tune ups, Engine Repairs, Electrical and A.C system</p>
                        <button className="btn-primary login-button">GET FREE QUOTES</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;
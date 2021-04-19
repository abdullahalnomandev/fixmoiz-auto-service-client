import React from 'react';
import WarrantImg from '../../../images/war1.jpg';

const Warranties = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <img className="img-fluid" src={WarrantImg} alt="" />
                    </div>
                    <div className="col-md-6">

                        <h2 >     LONG TERM WARRANTIES AND COMPETITIVE PRICES</h2>
                        <p className="text-secondary mt-4">Why do we consider ourselves to be the best car garage? It’s simple, really. We know that honesty and transparency, coupled with reliable and friendly customer service, is what really builds customer trust. <br /><br /> Trust the experts at our AutoService Shop for quality tune-ups. Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls. We offer competitive.</p>
                        <button className="btn-primary login-button">SELL ALL OUR OFFERS</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Warranties;
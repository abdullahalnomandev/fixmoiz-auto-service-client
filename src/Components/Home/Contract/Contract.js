import React from 'react';
import './Contract.css';

const Contract = () => {
    return (
        <section className="contact py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h1 className="text-white">CONTRACT WITH US</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Write your email " />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Write subject" />
                        </div>
                        <br />
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <br />
                        <div className="text-center">
                            <button className="btn-primary  submit-button">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contract;
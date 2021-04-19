import React, { useEffect, useState } from 'react';
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';

const Testimonials = () => {

    const [testimonialsInfo, setTestimonialsInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(res => res.json())
            .then(data => setTestimonialsInfo(data))
    }, [])

    return (
        <section>
            <div className="container my-5">
                <div className="text-center">
                    <h2>CLIENT TESTIMONIALS</h2>
                    <p className="text-secondary mt-4">Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil <br /> changes, and total vehicle overhauls.</p>
                </div>
                <div className="row">
                    {
                        testimonialsInfo.map(testimonial => <TestimonialsDetails testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
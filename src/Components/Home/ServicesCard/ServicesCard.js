import React, { useEffect, useState } from 'react';
import ServiceCardDetails from '../ServiceCardDetails/ServiceCardDetails';


const ServicesCard = () => {

  const [allServices,serAllServices]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getAllServices')
        .then( res => res.json())
        .then(data => serAllServices(data))
    },[])

    return (
        <section >
            <div  className="container text-center service-description mt-5 mb-5">
                <h2>OUR SERVICES</h2>
                <p className="mb-5">Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes,<br/> and total vehicle overhauls.</p>
                <div className="row">
                    {
                        allServices.map(service => <ServiceCardDetails key={service._id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesCard;
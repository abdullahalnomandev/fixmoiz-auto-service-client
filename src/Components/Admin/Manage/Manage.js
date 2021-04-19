import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';

const Manage = () => {

    const [servicesData, setServicesData] = useState([]);
    
    useEffect(() => {
        fetch('https://whispering-plains-30606.herokuapp.com/getAllServices')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])
    return (
        <section className="container-fluid row">
            <AdminSidebar />
            <div className="col-md-10">

                <div className="row">
                    {
                        servicesData.length===0 && <h5 className="text-primary text-center mt-5">Loading....</h5>
                    }
                    {
                        servicesData.map(service => <ManageServiceCard key={service._id} service={service} />)

                    }
                </div>

            </div>

        </section>
    );
};

export default Manage;
import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const NoAccess = () => {

    const style={color:'red',border:'2px solid yellow',padding:'10px',maxWidth:'600px',textAlign:'center',margin:'auto'}
    return (
        <section className="container-fluid row">
      
            <div className="col-md-10">
                <h4 className=" mt-5 mb-5" style={style} >Sorry, you are not allowed to access this page.</h4>
            </div>

        </section>
    );
};

export default NoAccess;
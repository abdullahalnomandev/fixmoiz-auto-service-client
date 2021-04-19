import React, { useContext, useEffect, useState } from 'react';
import { faList, faPlus, faSignOutAlt, faUserCog, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminSidebar.css';
import { Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { UseContext } from '../../../App';


const AdminSidebar = () => {
    const [logInUser, setLoginUser] = useContext(UseContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/adminList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (<>
        <Navbar style={{ backgroundColor: '#c6c768ba' }}>
            <Navbar.Brand ><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <h5 className="mr-5">{logInUser.name}</h5>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <div className="admin-sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ minHeight: "100vh" }}>
            <ul className="list-unstyled">
                {isAdmin && <div>

                    <li>
                        <Link to='/userBookList' className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserCog} /> <span>Make Admin</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manage" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage</span>
                        </Link>
                    </li>

                </div>}
                <div className="log-out mb-5 pb-4">
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </ul>

        </div>
    </>
    );
};

export default AdminSidebar;
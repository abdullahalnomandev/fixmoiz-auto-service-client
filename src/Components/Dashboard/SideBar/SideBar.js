import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faList, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import './SideBar.css';
import logo from '../../../images/logo.png';


const SideBar = () => {

    const { id } = useParams();

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <li><img className="img-fluid" src={logo} alt="" /></li>
                </li>

                <li>
                    <Link to='/bookingList' className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                    </Link>
                </li>

                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                    </Link>
                </li>

            </ul>
            <div className="log-out">
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;
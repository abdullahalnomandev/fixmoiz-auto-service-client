import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import './NavigationBar.css';
import logo from '../../../images/logo.png';
import { UseContext } from '../../../App';


const NavigationBar = () => {

    const [logInUser, setLogInUser] = useContext(UseContext);

    let history = useHistory();
    function handleClick() {
        history.push("/login");
    }
    const style = {
        fontSize: '21px',
        marginTop: '9px',
        fontWeight: '600',
        backgroundColor: 'rgb(18 250 154)',
        borderRadius: '3px',
        padding: '5px',
    }

    return (
        <div className="bg-nav fixed-top">
            <div className="container">
                <Navbar collapseOnSelect expand="lg   " >
                    <Navbar.Brand className="dream-riders" href="#home"> <img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto nav-list">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/userBookList">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            {
                                logInUser.email ? <h3 style={style}>{logInUser.name}</h3> : <button onClick={handleClick} className="btn btn-danger ">LogIn</button>
                            }
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    );
};

export default NavigationBar;
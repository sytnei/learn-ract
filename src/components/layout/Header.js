import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import getNavigation from '../../services/getNavigation';
import { useState, useEffect } from 'react';



function Header({ isLogged, setPassword }) {

    const [navigation, setNavigation] = useState([]);

    useEffect(() => {
        getNavigation().then(results => setNavigation(results));
    }, []);

    return (
 
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/learn-courses.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"> 
                        <Nav.Link as={Link} to="/">Courses</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        {isLogged && (
                            <Nav.Link to="#" onClick={() => { setPassword('') }}>Log out</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;
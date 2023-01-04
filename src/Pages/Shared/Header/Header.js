import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='header' fixed="top">
            <Container>
                <Link to='/'><Navbar.Brand ><img src={logo} alt="logo" /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='menu'>
                        <Link to='/shop' className=" text-light text-decoration-none px-2 py-2">Shop</Link>
                        <Link className=" text-light text-decoration-none px-2 py-2">Orders</Link>
                        <Link className=" text-light text-decoration-none px-2 py-2">Inventory</Link>
                        <Link className=" text-light text-decoration-none px-2 py-2">About</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
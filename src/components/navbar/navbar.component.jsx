import React, {useState,useEffect} from 'react';
import './navbar.style.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom'






export const NavBar = () =>{ 

    const [scroll, setScroll] = useState(null)

    useEffect(() => {
        document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY > 100
        if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
        }
        })
    })
    
    return(
    <div>

    <Navbar className={`${scroll ? 'scroll' : ''} nav`} bg="light" expand="lg">
        <Navbar.Brand href="#home" className='bold'>
            <img src={logo} alt="logo" 
                className="d-inline-block align-top nav-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto pad">
                <NavLink exact to="/" className='mr-3'>Home</NavLink>
                <NavLink exact to="/about" className='mr-3'>About</NavLink>
                <NavLink to="#causes" className='mr-3'>Causes</NavLink>
                <NavLink to="#donate" className='mr-3'>Donate</NavLink>
                <NavLink to="#blog" className='mr-3'>Blog</NavLink>
                <NavLink to="#gallery" className='mr-3'>Gallery</NavLink>
                <NavLink to="#events" className='mr-3'>Events</NavLink>
                <NavLink to="#contact" className='mr-3'>Contact</NavLink>
            
            </Nav>
    
        </Navbar.Collapse>
    </Navbar>
</div>
)};
import React from 'react';
import './AppNavbar.css'
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa";

const AppNavbar = () => {
  return (
    <nav>
        <Navbar data-bs-theme="dark" bg="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand >PiYAS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                
{/* --------------------- */}
                {/* <NavDropdown title="Project By Lang" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown> */}
{/* --------------------- */}


                <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                
            </Nav>
            <Nav>
                <Nav.Link className='linkedin' style={{fontSize:"1.2rem"}} target="_blank" href="https://www.linkedin.com/in/piyasmahamudealif/"><FaLinkedinIn/></Nav.Link>
                <Nav.Link className='specialLink facebook' style={{fontSize:"1.2rem"}} target="_blank" href="https://www.facebook.com/piyasmahamude.alif.9/"><FaFacebookF/></Nav.Link>
                <Nav.Link className='specialLink twitter' style={{fontSize:"1.2rem"}} target="_blank" href="https://twitter.com/AlifPiyas"><FaTwitter/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </nav>
  )
}

export default AppNavbar
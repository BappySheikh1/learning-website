import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Contexts/AuthProvider';
import './Header.css'

const Header = () => {
 
    const {user}=useContext(AuthContext)
    

    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MaxCoach </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 pe-3 header-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/courses'>Courses</Link>
            <Link>FAQ</Link>
            <Link to='/blog'>Blog</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
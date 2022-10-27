import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Contexts/AuthProvider';
import './Header.css'
import {  FaUser } from 'react-icons/fa';
import { Image  } from 'react-bootstrap';
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import {  toast } from 'react-toastify';
 
const Header = () => {
   const [theme,setTheme]=useState(null)
    const {user,logOut}=useContext(AuthContext)
    const handleUserLogOut=()=>{
      logOut()
      .then(()=>{
       toast.success('Sign Out successfully',{autoClose: 500})
      })
      .catch(error =>{
        console.log(error);
      })
    }
 
    const toggleTheme=()=>{
      setTheme((curr)=>(curr === "light" ? "dark" : "light"))
    }
    return (
        <div id={theme}>
            <Navbar id='main-navigation'  bg="light" expand="lg" className='py-3'>
      <Container fluid>
        <Link className='navbar-container' to='/'>MaxCoach </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />

       

        <Navbar.Collapse id="navbarScroll">
        <span className='ms-5 react-switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark" }/>
          </span>
          <Nav
            className="ms-auto my-2 my-lg-0 pe-3 header-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/courses'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
            {user?.uid ? 
            <Link onClick={handleUserLogOut} className='mx-2'>Log Out</Link>
            :
            <>
            <Link to='login'>Log in</Link>
            <Link to='/register'>Register</Link>
            </>
            }
            <>
            {
              user?.photoURL ? <Image title={user?.displayName} className='user-image' style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
              :
              <FaUser className='mt-1'/>
            }
            </>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
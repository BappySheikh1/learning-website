import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import {  FaGithub,FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css'

 
const Login = () => {
  const[error,setError]=useState('')
  const navigate=useNavigate()
  const location=useLocation()
  let from = location?.state?.from?.pathname || "/";

  const {googleAuth,loginUser,gitHubAuth}=useContext(AuthContext)
  
    const handleSubmit=(event)=>{
       event.preventDefault();
       const form=event.target
       const email=form.email.value
       const password=form.password.value
       console.log(email,password);
       loginUser(email,password)
       .then(result =>{
        const user =result.user
        console.log(user);
        navigate(from,{ replace: true })
       })
       .catch(error =>{
        console.log(error);
        setError(error.message)
       })

    }

    const handleGooglePopUp=()=>{
      googleAuth()
      .then(result =>{
        const user=result.user
        console.log(user);
      })
      .catch(error =>{
        console.log(error);
        setError(error.message)
      })
    }
    const handleGithubPopUp=()=>{
      gitHubAuth()
      .then(result =>{
        const user=result.user
        console.log(user);
      })
      .catch(error =>{
        console.log(error);
      })
    }

    return (
      <div className='login-main'>
        
        <div id='login-content' className=' border  p-4 mt-5 rounded'>
             <Form onSubmit={handleSubmit} className='w-75'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button className='w-50 fw-bold'  variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    <div className='text-center my-4'>
        <button className='btn btn-primary' onClick={handleGooglePopUp}><FaGoogle /> Google Sing in</button>
         <span className='text-danger fw-bold'>  OR </span>
        <button onClick={handleGithubPopUp} className='btn btn-dark '><FaGithub /> Github Sign in</button>
       </div>
        </div>
       
       
       <div className='details-content text-center'>
        <h3>Please Log In</h3>
        <p>To stay connected with us <br />
            please login with your personal info
          </p>
        <h1>CO<span className='items'>.</span></h1>
        <p className='text-dark'>You have no account <Link to='/register'>Please Register</Link> </p>
       </div>

        </div>

    );
};

export default Login;
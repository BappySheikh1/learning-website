import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import {  FaGithub,FaGoogle } from 'react-icons/fa';


const Login = () => {
  const {googleAuth,loginUser}=useContext(AuthContext)

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
       })
       .catch(error =>{
        console.log(error);
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
      })
    }
    const handleGithubPopUp=()=>{

    }

    return (
      <div>
        <div className='w-50 border p-4 mx-auto mt-5 rounded'>
             <Form onSubmit={handleSubmit} className='w-75'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Button  variant="primary" type="submit">
        Log In
      </Button>
      <p>You have no account <Link to='/register'>Please Register</Link> </p>
    </Form>
        </div>
       <div className='text-center my-4'>
        <button className='btn btn-outline-primary' onClick={handleGooglePopUp}><FaGoogle /> Google Sing in</button>
        <br />
        <button onClick={handleGithubPopUp} className='btn btn-outline-dark mt-1'><FaGithub /> Github Sign in</button>
       </div>
        </div>

    );
};

export default Login;
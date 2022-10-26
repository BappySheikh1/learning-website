import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Register = () => {
  const [accepted, setAccepted]=useState(false);
  const [error,setError]=useState('');
  const {createUser,updateUserProfile}=useContext(AuthContext)
  
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const name=form.name.value
        const photoURL=form.photoURL.value
        const email=form.email.value
        const password=form.password.value
       console.log( name,photoURL,email,password);
       createUser(email,password)
       .then(result =>{
        const user =result.user
        console.log(user);
        handleUserProfile(name,photoURL)
        form.reset();
       })
       .catch(error =>{
        console.log(error);
        setError(error.message)
       })
     }
 
     const handleUserProfile=(name,photoURL)=>{
      updateUserProfile(name,photoURL)
      .then(() =>{
        
      })
      .catch(error =>{
        console.log(error);
      })
     }

     const handletermsAndCondition=(event)=>{
      setAccepted(event.target.checked)
     }

    return (
      <div className='register-main '>
        <div id='register-container'  className=' border p-4  mt-5 rounded'>
            <Form onSubmit={handleSubmit} className='w-75'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicphotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control type="text" name='photoURL' placeholder="Enter Your PhotoURL" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check onClick={handletermsAndCondition} type="checkbox" label="You accept Ours terms & conditions" />
            </Form.Group>

            <Form.Text className="text-danger">
             {error}
            </Form.Text>
            <br />
           <Button className='w-50 fw-bold' variant="primary" type="submit" disabled={!accepted}>
            Register
          </Button>
         </Form>
        </div>
        {/* detail side */}
        <div className='details-content text-center'>
          <h3>Let's make it <br />
          happen togather!
          </h3>
          <p>To stay connected with us <br />
            please Registered with your personal info
          </p>
          <h1>CO<span className='items'>.</span></h1>
          <p>Already have an  account <Link to='/login'>Log In </Link></p>
        </div>

        </div>
    );
};

export default Register;
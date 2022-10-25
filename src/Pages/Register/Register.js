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
        const fullName=form.name.value
        const photoURL=form.photoURL.value
       const email=form.email.value
       const password=form.password.value
      //  console.log( fullName,photoURL,email,password);
       createUser(email,password)
       .then(result =>{
        const user=result.user
        console.log(user);
        form.reset()
        setError('')
        handleUserProfile(fullName,photoURL)
       })
       .catch(error=>{
        console.log(error);
        setError(error.message)
       })
 
     }

     const handleUserProfile=(name,photo)=>{
      updateUserProfile(name,photo)
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
        <div  className='w-50 border p-4 mx-auto mt-5 rounded'>
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
           <Button variant="primary" type="submit" disabled={!accepted}>
            Register
          </Button>
          <p>you have an already account <Link to='/login'>go login </Link></p>
         </Form>
        </div>
    );
};

export default Register;
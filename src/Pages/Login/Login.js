import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

    const handleSubmit=(event)=>{
       event.preventDefault();

    }

    return (
        <div className='w-50 border p-4 mx-auto mt-5 rounded'>
             <Form onSubmit={handleSubmit} className='w-75'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='name' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Log In
      </Button>
    </Form>
        </div>
    );
};

export default Login;
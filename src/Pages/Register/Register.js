import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const fullName=form.name.value
        const photoURL=form.photoURL.value
       const email=form.email.value
       const password=form.password.value
       console.log( fullName,photoURL,email,password);
 
     }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-75'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Form.Text className="text-muted">
             {}
            </Form.Text>
           <Button variant="primary" type="submit">
            Submit
          </Button>
         </Form>
        </div>
    );
};

export default Register;
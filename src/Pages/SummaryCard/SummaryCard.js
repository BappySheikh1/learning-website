import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SummaryCard = ({ct}) => {
    console.log(ct);
    const {title,description,image,id}=ct
    return (
        <div>
            <Card style={{width:'700px'}} className="mx-auto mt-4">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
       {
        description
       }
        </Card.Text>
        <Link to='/courses'><Button variant="primary">Go To Courses</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default SummaryCard;
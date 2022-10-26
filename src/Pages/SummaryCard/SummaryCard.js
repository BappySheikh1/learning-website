import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaDownload,FaCartPlus } from 'react-icons/fa';

const SummaryCard = ({ct}) => {
    
    const {title,description,image,id,author}=ct
    return (
        <div>
            <Card style={{width:'700px'}} className="mx-auto mt-4">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <div>
             <Image roundedCircle
              style={{height:'50px'}} 
              src={author.img}>
              </Image>
          </div>
          <div>
           <p>Creator Name:{author?.name} <br />
           <span>Date Birth:{author?.date_birth ? author?.date_birth : 'There Is No birth date'}</span>
           </p>
          </div>
        </div>
        <div>
           <FaDownload  className='icons-react text-primary'/>
           <FaCartPlus  className='text-primary'/>
        </div>
      </Card.Header>
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
      <Card.Footer className="text-muted">
        
      </Card.Footer>
    </Card>
        </div>
    );
};

export default SummaryCard;
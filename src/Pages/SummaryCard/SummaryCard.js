import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaDownload,FaCartPlus, FaStar, FaEye ,FaCrown} from 'react-icons/fa';

const SummaryCard = ({ct}) => {
    // console.log(ct);
    const {title,description,image,id,author,rating}=ct
    return (
        <div>
            <Card id='cartSummaryDetails' className="mx-auto my-4 ">
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
        <div className='d-flex justify-content-between'>
        <Link to='/courses'><Button variant="primary">Go To Courses</Button></Link>
        <br />
        <Link to='/checkout'><Button variant="primary" className='btn btn-outline-light '>Get premium access  <FaCrown className='text-warning ' /></Button></Link>
        </div>
      </Card.Body>

      <Card.Footer className="d-flex justify-content-between px-5 p-3"> 
        <div>
        <FaStar  className='icons-react text-warning'/>
        <span className='ms-1'>{rating?.rate}</span>
        </div>
        <div >
         <FaEye className='icons-react'/>
         <span>{rating?.count}</span>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default SummaryCard;
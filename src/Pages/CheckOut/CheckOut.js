import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaDownload,FaCartPlus, FaStar, FaEye ,FaCrown} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CheckOut.css'

const CheckOut = () => {
    const {user}=useContext(AuthContext);
    const {title,description,image,id,author,rating}=useLoaderData()
    
    return (
        <div>

            <div className='checkout-container border '>
             <Image style={{height:'120px'}} roundedCircle src={user?.photoURL}></Image>
             <div>
                <p>Name: {user?.displayName}</p>
                 
            </div>

            </div>
            
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
         </div>
        
    );
};

export default CheckOut; 
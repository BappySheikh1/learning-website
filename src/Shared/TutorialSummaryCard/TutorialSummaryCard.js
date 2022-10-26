import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaUserAlt,FaCartPlus } from 'react-icons/fa';

const TutorialSummaryCard = ({allTutorial}) => {
    const {description,image,rating,title,category_id,author}=allTutorial
    console.log(allTutorial);
    return (
        <div>
       <Card className=" mt-2 mx-auto ">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
        <div>
           <Image style={{height:'50px'}} roundedCircle  src={author?.img}></Image>
        </div>
        <div>
          <p className='ps-1'>{author?.name} <br />
          <span>{author?.date_birth ? author?.date_birth : 'There Is No birth date'}</span>
          </p>
        </div>
        </div>

        <div >
           <FaUserAlt className='icons-react'/>
           <FaCartPlus />
        </div>
      </Card.Header>
      <Card.Body className='summary-card'>
      <Card.Img variant="top" src={image}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {
            description?.length > 200 ?
            <>{description?.slice(0,250) + '...'}<Link to={`/category/${category_id}`}>Read More</Link></>
            :
            <>{description}</>
            }
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default TutorialSummaryCard;
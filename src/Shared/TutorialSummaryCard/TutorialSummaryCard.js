import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TutorialSummaryCard = ({allTutorial}) => {
    const {description,image,rating,title,category_id}=allTutorial
    return (
        <div>
       <Card style={{width:'700px'}} className=" mt-2 mx-auto ">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
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
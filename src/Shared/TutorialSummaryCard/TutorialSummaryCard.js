import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TutorialSummaryCard = ({allTutorial}) => {
    const {description,image,rating,title}=allTutorial
    return (
        <div>
       <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image}/>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default TutorialSummaryCard;
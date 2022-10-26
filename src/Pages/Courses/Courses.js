import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import { useLoaderData } from "react-router-dom";
import TutorialSummaryCard from '../../Shared/TutorialSummaryCard/TutorialSummaryCard';
import './Courrses.css'

const Courses = () => {
    const tutorialData= useLoaderData();
    // console.log(tutorialData);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav />
                    </Col>

                     <Col lg='9'>
                        <div className='courses-container'>
                           
                        {
                            tutorialData.map(allTutorial => <TutorialSummaryCard key={allTutorial.id}  allTutorial={allTutorial}></TutorialSummaryCard>)
                        }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import { useLoaderData } from "react-router-dom";
import TutorialSummaryCard from '../../Shared/TutorialSummaryCard/TutorialSummaryCard';

const Courses = () => {
    const tutorialData= useLoaderData();
    console.log(tutorialData);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav />
                    </Col>

                     <Col lg='9'>
                        <h3>This Main Courses</h3>
                        {
                            tutorialData.map(allTutorial => <TutorialSummaryCard key={allTutorial.id}  allTutorial={allTutorial}></TutorialSummaryCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
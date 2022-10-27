import React from 'react';
import './FaqPAge.css';
import logo from '../../assets/faq-632c0874710c1-sej-760x400.png';
import { Col, Container, Row } from 'react-bootstrap';
  
const FaqPAge = () => {
    return (
        <div>
            <div className='' >
             <img src={logo} className='img-fluid mx-auto w-100' alt="" />
            </div>
            <h1 className='my-5 text-center fw-bold text-primary'>Frequently Asked Questions</h1>
            <div className=''>
                <Container>
                    <Row>
                        <Col md='6'>
                         <div className='faq-item'>
                         <h3>What this site about?</h3>
                         <p>Learning Hero is E-learning platform.Where you can <br /> Learn Essential topics about web-development such <br /> as javaScript , HTML,CSS,React js  etc </p>
                         </div>

                          <div className='faq-item'>
                            <h3>Why Learning MaxCoach?</h3>
                            <p>we are in this particular stage since 2016. We have <br />came long way. Our support session in top notch <br />Even if you complete the course on time and do <br /> good them we have a special team they will help <br />you to find your dream job.</p>
                            </div>                         
                        </Col>
                        <Col md='6'>
                          <div className='faq-item'>
                            <h3>How many tutorials are there?</h3>
                            <p>Well each course have 400+ videos, 12Assignment,<br />Weekly Zoom conference,24/7 support session,<br />Qualityful Tutorials etc.</p>
                          </div>

                          <div className='faq-item'>
                            <h3>Why Learn Web-development?</h3>
                            <p>Now a days web development is a really good skill to <br />have. A exprenced web developer earns so much money <br /> that you can think . Also you can use it for your  personal <br />work.Such as you have a business you can build <br /> a website for your business</p>
                          </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FaqPAge;
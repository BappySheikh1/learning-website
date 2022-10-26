import React from 'react';
import './Home.css';
import Lottie from "lottie-react";
import logo from '../../assets/web-design-tools.json';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container  d-md-flex justify-md-content-center align-items-center flex-sm-column  flex-md-row px-4'>
           <div className='text-light'>
             <h3> 
              Dear students, there is free programming <br />
              tutorial for you, please visit our course page <br />
              and learn about programming  </h3>
              <div>
                <Link to='/courses'>
                    <button className="btn btn-success py-2 fw-semibold text-light">Courses page <FaArrowCircleRight />
                </button>
                </Link>
              </div>
           </div>
           <div>
            <Lottie animationData={logo} loop={true} />
           </div>
        </div>
    );
};

export default Home;
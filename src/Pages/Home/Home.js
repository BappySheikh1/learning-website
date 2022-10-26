import React from 'react';
import './Home.css';
import Lottie from "lottie-react";
import logo from '../../assets/web-design-tools.json'

const Home = () => {
    return (
        <div className='home-container'>
            <h3>This is home</h3>
            <Lottie animationData={logo} loop={true} />
        </div>
    );
};

export default Home;
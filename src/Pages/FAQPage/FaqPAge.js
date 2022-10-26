import React from 'react';
import './FaqPAge.css';
import logo from '../../assets/faq-632c0874710c1-sej-760x400.png';
import Image from 'react-bootstrap/Image'
 
const FaqPAge = () => {
    return (
        <div>
            <div className='' >
            <Image fluid src={logo}></Image>
            </div>
            <div className='my-2 border rounded p-3 FAQ-container'>
                <h2>Why An FAQ Resource?</h2>
                <p >Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved.
                 <br />
                Next, one of the most significant opportunities for impactful brand visibility within the search engine result pages (in-SERP) is targeting audience questions, wants, needs, and pain points.
                 <br />
                The FAQ page is one of the best ways to help people visit your site and get snippets of answers in front of users before they click any results within the search pages.
                  </p>
            </div>
        </div>
    );
};

export default FaqPAge;
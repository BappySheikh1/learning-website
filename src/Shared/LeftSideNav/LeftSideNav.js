import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './LeftSideNav.css';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category,setCategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tutorial')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <h3>Category total: {category.length}</h3>
            {
                category.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;
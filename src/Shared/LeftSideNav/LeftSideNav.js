import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './LeftSideNav.css';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category,setCategory]=useState([])
    useEffect(()=>{
        fetch('https://learning-website-server-nu.vercel.app/tutorial')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    
    return (
        <div>
            <h3>Category total: {category.length}</h3>
            <div className='category-item'>
            {
                category?.map(category => <p  key={category.id}><Link className='btn btn-outline-primary  w-75'   to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;
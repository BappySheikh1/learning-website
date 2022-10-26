import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const cardDetails =useLoaderData()
    console.log(cardDetails);
    return (
        <div>
            
        </div>
    );
};

export default CardDetails;
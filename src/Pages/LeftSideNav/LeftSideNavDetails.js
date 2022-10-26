import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';

const LeftSideNavDetails = () => {
    const category=useLoaderData();
    // console.log(category);
    return (
        <div>
            {
                category?.map(ct => <SummaryCard key={ct.id} ct={ct}/>)
            }
        </div>
    );
};

export default LeftSideNavDetails;
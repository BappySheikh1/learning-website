import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider';
import './CheckOut.css'

const CheckOut = () => {
    const {user}=useContext(AuthContext)
    return (
        
            <div className='checkout-container border '>
             <Image style={{height:'120px'}} roundedCircle src={user?.photoURL}></Image>
             <div>
                <p>Name: {user?.displayName}</p>
                
            </div>
            </div>
            
        
    );
};

export default CheckOut; 
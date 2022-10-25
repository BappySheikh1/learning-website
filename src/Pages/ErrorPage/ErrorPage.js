import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const error =useRouteError()
    return (
        <div className='ErrorPage d-flex flex-column justify-content-center align-items-center'>
           <h1 className='text-dark fs-1'>Ops! An Error Ocurred!</h1>
           {
            error && (
                <div>
                    <p className='text-danger fs-2'>{error?.statusText || error?.message}</p>
                    <p className='text-danger fs-2'>{error?.status}</p>
                </div>
            )
           }
        </div>
    );
};

export default ErrorPage;
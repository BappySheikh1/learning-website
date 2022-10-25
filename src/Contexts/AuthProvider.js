import React, { createContext } from 'react';
import { useState } from 'react';

export const AuthContext=createContext() 
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({displayName:"Bappy Sheikh"});
    const [loadding,setLoadding]=useState(true)
    
    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext=createContext() 
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({displayName:"Bappy Sheikh"});
    const [loadding,setLoadding]=useState(true)

    const createUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoadding(false)
        })

        return ()=> unsubscribe();
    },[])
    const authInfo={user,createUser,loginUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
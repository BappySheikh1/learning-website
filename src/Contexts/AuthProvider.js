import {  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';




export const AuthContext=createContext() 
const auth=getAuth(app)
const AuthProvider = ({children}) => { 
    const [user,setUser]=useState({});
   

    const createUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        return signOut(auth)
    }

    const googleProvider= new GoogleAuthProvider()
    const googleAuth=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            
        })

        return ()=> unsubscribe();
    },[])
    const authInfo={user,createUser,loginUser,logOut,googleAuth,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import {   createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';




export const AuthContext=createContext() 
const auth=getAuth(app)
const AuthProvider = ({children}) => { 
    const [user,setUser]=useState({});
    const [loadding,setLoadding]=useState(true)

    const createUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        })
    }

    const loginUser=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        setLoadding(true)
        return signOut(auth)
    }
 
    const googleProvider= new GoogleAuthProvider()
    const googleAuth=()=>{
        setLoadding(true)
        return signInWithPopup(auth,googleProvider)
    }

    const gitHubProvider= new GithubAuthProvider();
    const gitHubAuth=()=>{
        setLoadding(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoadding(false)
        })

        return ()=> unsubscribe();
    },[])
    const authInfo={user,loginUser,logOut,googleAuth,updateUserProfile,createUser,gitHubAuth,loadding}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
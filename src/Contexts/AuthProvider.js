import {   createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';

 


export const AuthContext=createContext() 
const auth=getAuth(app)
const AuthProvider = ({children}) => { 
    const [user,setUser]=useState({});
    const [loadding,setLoadding]=useState(true)
    
    // CreateUserEmail&Password
    const createUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
  
    // UserProfile&photoURL
    const updateUserProfile=(provider)=>{
        return updateProfile(auth.currentUser,provider)
    }
   
    // User LogIn page
    const loginUser=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // userEmailVerify
    const emailvarify=()=>{
        return sendEmailVerification(auth.currentUser)
    }
    
    // resetPassword
    const emailResetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    // UserLogOut
    const logOut=()=>{
        setLoadding(true)
        return signOut(auth)
    }
   
    // GoogolePopUpLogIn
    const googleProvider= new GoogleAuthProvider()
    const googleAuth=()=>{
        setLoadding(true)
        return signInWithPopup(auth,googleProvider)
    }
  
    // GitHubPopUpLogin
    const gitHubProvider= new GithubAuthProvider();
    const gitHubAuth=()=>{
        setLoadding(true)
        return signInWithPopup(auth,gitHubProvider)
    }
    
    // onAuthStateChenaged fairebase
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser == null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoadding(false)
        })

        return ()=> unsubscribe();
    },[])
    const authInfo={user,loginUser,logOut,googleAuth,updateUserProfile,createUser,gitHubAuth,loadding,emailvarify,emailResetPassword}
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
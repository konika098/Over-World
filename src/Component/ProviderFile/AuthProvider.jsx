import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext =createContext(null)

    

const AuthProvider = ({children}) => {
    const [user,setUser]=useState()


    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        onAuthStateChanged(auth , (userInfo)=>{
            setUser(userInfo)
            console.log('data ache' ,userInfo)
        })
    },[])



    const AuthInfo ={user,createUser,loginUser}
    return (
       <>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
       </>
    );
};


export default AuthProvider;
AuthProvider.PropTypes ={
    children: PropTypes.node
}
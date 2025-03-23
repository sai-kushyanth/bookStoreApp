import React, { createContext, useState } from 'react'
import { useContext } from 'react';

export const AuthContext=createContext()

function AuthProvider({children}) {

    const intialAuthuser=localStorage.getItem('Users');
    const [authUser,setAuthuser]=useState(
        intialAuthuser?JSON.parse(intialAuthuser):undefined
    )
    return(
        <AuthContext.Provider value={[authUser,setAuthuser]}>
        {children}
        </AuthContext.Provider>
    );
}
export const useAuth=()=>useContext(AuthContext);

export default AuthProvider
import React, { createContext, useState } from 'react'
import { auth } from '../FireBase/FireBase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'


export const AuthContext=createContext(null)
export default function AuthProvider({children}) {
  const [user,setUser]=useState(null)
  //create new user
  const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //identify the current user has or not
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })

  const authInfo={
    createNewUser,
    user,
  }
  return (
   <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { AuthURL } from "../baseUrl/BaseUrl";


const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userRole, setUserRole] = useState();
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function updateUser(uid, role) {
    return updateUser(uid, role);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getAccessToken() {
    return currentUser?.getIdToken(true);
  }
  function getCurrentUser() {
    return currentUser.getUser();
  }
  function saveUserRole(value){
         setUserRole(value)
  }
 
  const getUserRoleFunc= async(user)=>{
    try {
      console.log(user?.accessToken)
      const result= await fetch(AuthURL.role.fetchRole,{
        method:"GET",
        headers:{
         Authorization:`Bearer ${user.accessToken}`,
        }
      });
      const resultJson = await result.json();
      if (!result.ok) {
        throw new Error("Failed to login");
      }
      
      setUserRole(resultJson?.response?.role)
      setUserInfo(resultJson?.response)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async(user) => {
      setCurrentUser(user);
      await getUserRoleFunc(user);
      setLoading(false);
    });
    console.log(unsubscribe);
    

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    getAccessToken,
    updateUser,
    getCurrentUser,
    userRole,
    saveUserRole,
    setUserInfo,
    userInfo
  
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

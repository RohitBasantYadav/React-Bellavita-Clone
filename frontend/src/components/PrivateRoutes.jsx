import React, { useContext } from 'react'
import { AuthContext } from '../context-Api/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);
    if(isLoggedIn.isAuthenticated){
        return children
    }
  return (
     <Navigate to='/login'/>
  )
}

export default PrivateRoutes;

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState({
        isAuthenticated: false,
        token: null,
        email: null
    });

    function login( token,email ) {
        setIsLoggedIn({
            isAuthenticated: true,
            token: token,
            email: email,
        })
    }

    function logout() {
        setIsLoggedIn({
            isAuthenticated: false,
            token: null,
            email: null
        })
    }
    const demo = "in the authcontext"
    return (
        <AuthContext.Provider value={{ isLoggedIn,login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}
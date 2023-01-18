import { createContext, useState } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [isAuth,setAuth]=useState(false)
    const [token,setToke]=useState(null)
function login(){
    setAuth(true)
}
function setToken(t){
    setToke(t)
}
function logout(){
    setAuth(false)
    setToken(null)
}

    return <AuthContext.Provider value={{isAuth,login,logout,token,setToken}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;

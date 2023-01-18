import { createContext, useState } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [isAuth,etIsAuth]=useState(false)
    function setIsAuth(e){
        etIsAuth(e)
    }
    const [token,etToken]=useState(null)
    function setToken(e){
        etToken(e)
    }
    return <AuthContext.Provider value={{isAuth,setIsAuth,token,setToken}}>
        {children}
        </AuthContext.Provider>
}

export default AuthContextProvider;

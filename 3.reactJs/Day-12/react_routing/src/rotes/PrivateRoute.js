import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context.js/AuthContext"

export default function PrivateRouter({children}){
    const {isAuth}=useContext(AuthContext)
    if(!isAuth)
    return <Navigate to="/login"/>
    return children
}
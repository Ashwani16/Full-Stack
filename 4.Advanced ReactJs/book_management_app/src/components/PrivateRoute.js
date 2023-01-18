import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({children}){
    const isAuth=useSelector((state)=>state.authReducer.isAuth)
    const location =useLocation()
    if(isAuth)
    return children
    return <Navigate to="/login" state={location.pathname}/>
}
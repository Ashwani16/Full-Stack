import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context.js/AuthContext";

export default function Navbar(){
   const {logout,isAuth}=useContext(AuthContext)
    return <div className="nav">
        <NavLink to={'/'} style={({isActive})=>{return isActive?{color:"green"}:{color:"white"}}}><h5>Home Page</h5></NavLink>
        
        <NavLink to={'/products'} style={({isActive})=>{return isActive?{color:"green"}:{color:"white"}}}><h5>products </h5></NavLink>
        <NavLink to={'/login'} style={({isActive})=>{return isActive?{color:"green"}:{color:"white"}}}><h5>log-In </h5></NavLink>
        <button className="logout" disabled={!isAuth} onClick={logout} >Log-Out</button>
    </div>
}
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom"
export default function PrivateRouters({children}){
    const auth=useSelector((state)=>{
        return state.authreducer.isAuth
    })
    if(auth)
    return children
    return <Navigate to="/login"/>
}
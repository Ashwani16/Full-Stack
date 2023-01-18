//Create the HOC for protected Routes
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useLocation } from "react-router-dom";
const ReqAuth = ({children}) => {
    const location=useLocation()
    const isAuth=useSelector((state)=>state.authReducer.isAuth)
    if(isAuth)
    return children;
    return <Navigate to="/login" state={location.pathname}/>
};

export default ReqAuth;

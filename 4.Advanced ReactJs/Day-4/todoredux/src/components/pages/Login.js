import {  useState } from "react";
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import {Link,useNavigate} from "react-router-dom"
import { Log_In_Req, Log_In_Res_Succ, Log_In_Res_Err } from "../../redux/Auth/Action";
export default function Login(){
    const navigate=useNavigate()
    
    const {isLoading,isErr,isAuth}=useSelector((state)=>{
        return state.authreducer;
    })
    if(isAuth){
        navigate("/todo/")
    }
    const [email,setemail]=useState("eve.holt@reqres.in")
    const [password,setPass]=useState("cityslicka")
    const dispatch=useDispatch();

 function clickHGandler(){
        dispatch(Log_In_Req())
        axios.post(`https://reqres.in/api/login`,{email,password}).then((res)=>{
            dispatch(Log_In_Res_Succ(res.token))
        }).catch((err)=>{
            dispatch(Log_In_Res_Err())
        })
    } 
    
    
    
    return <div>
        
        <h1>Log-In Page</h1><br/>
        <Link to="/">Home</Link><br/><br/>
        <input value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="enter email"/><br/>
        <input value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder="enter password"/><br/>
        {isErr&&<h1>please try again</h1>}
        <button onClick={clickHGandler}>{isLoading?"wait...":"LogIn"}</button>
    </div>
}
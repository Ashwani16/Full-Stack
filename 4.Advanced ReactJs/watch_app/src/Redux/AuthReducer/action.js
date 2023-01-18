//Write the ActionCreator functions here

import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

 const Login_req=()=>{return {type:LOGIN_REQUEST}}
 const Login_Suc=(payload)=>{return {type:LOGIN_SUCCESS,payload}}
 const Login_Err=()=>{return {type:LOGIN_FAILURE}}

 export const LoginApi=(obj)=>(dispatch)=>{
    dispatch(Login_req())
        return axios.post(`https://reqres.in/api/login`,obj).then((res)=>{
            dispatch(Login_Suc(res.data.token))
        }).catch(()=>{
            dispatch(Login_Err())
        })
 }


import axios from "axios"
import { LOGIN_RES_ERR, LOGIN_RES_SUCC } from "./actionTypes"

const Login_succ=(payload)=> {return {type:LOGIN_RES_SUCC,payload}}
const Login_Err=()=>{return {type:LOGIN_RES_ERR}}

export const Login=(data)=>(dispatch)=>{
    return axios.post(`https://reqres.in/api/login`,data).then((res)=>{
        dispatch(Login_succ(res.data.token))
    }).catch(()=>{
        dispatch(Login_Err)
    })
}
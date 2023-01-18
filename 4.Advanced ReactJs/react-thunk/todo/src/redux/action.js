import { GET_REQ_ACTION, GET_RES_ERROR, GET_RES_SUCCESS, POST_REQ_ACTION, POST_RES_ERROR, POST_RES_SUCCESS } from "./actionTypes"
import axios from "axios"
export const Get_req=()=>{
    return {
        type:GET_REQ_ACTION
    }
}
export const Get_Res_Success=(payload)=>{
    return {
        type:GET_RES_SUCCESS,
        payload
    }
}
export const Get_Res_Err=()=>{
    return {
        type:GET_RES_ERROR
    }
}
//post
export const Post_Req=()=>{
    return {
        type:POST_REQ_ACTION
    }
}
export const Post_Res_Success=()=>{
   return { type:POST_RES_SUCCESS}
}
export const Post_Res_Err=()=>{return {type:POST_RES_ERROR}}
export const get_todo=(dispatch)=>{
    axios.get(`http://localhost:8080/posts`).then((res)=>{
            dispatch(Get_Res_Success(res.data))
    })
  } 
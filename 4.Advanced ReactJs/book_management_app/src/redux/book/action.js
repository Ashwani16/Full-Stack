import axios from "axios"
import { GET_RES_SUCCESS } from "./actionTypes"

const Get_Res_Suc=(payload)=>{
    return {
        type:GET_RES_SUCCESS,
        payload
    }
}
export const GetData=(params={})=>(dispatch)=>{
    axios.get(`http://localhost:8080/books`,{params}).then((res)=>{
        dispatch(Get_Res_Suc(res.data))
    })
}
export const UpdateData=(obj,id)=>(dispatch)=>{
    return axios.patch(`http://localhost:8080/books/${id}`,obj).then((res)=>{
        dispatch(GetData());
    })
}
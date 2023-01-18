import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType"
import axios from "axios"
//Write the ActionCreator functions here
const GetReq=()=>{
    return {
        type:GET_WATCHES_DATA_REQUEST
    }
}
const GetSucc=(payload)=>{
    return {
        type:GET_WATCHES_DATA_SUCCESS,
        payload
    }
}
const GetErr=()=>{
    return {
        type:GET_WATCHES_DATA_FAILURE
    }
}

export const Get_Data=(params={})=>(dispatch)=>{
    dispatch(GetReq())
    axios.get(`http://localhost:8080/watches`,{params})
    .then((res)=>{
        dispatch(GetSucc(res.data))
    }).catch(()=>{
        dispatch(GetErr())
    })
}
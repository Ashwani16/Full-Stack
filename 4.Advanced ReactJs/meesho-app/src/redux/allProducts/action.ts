import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_RESPONSE_ERROR, GET_PRODUCTS_RESPONSE_SUCCESS, VIEW_PRODUCT } from "./actionTypes"
import axios from 'axios'
export const Get_Pro_Req=()=>{
    return {
        type:GET_PRODUCTS_REQUEST
    }
}
export type ProductTypes={
    type:string,
    payload?:any
}
export const Get_Pro_Res_Success=(payload:any)=>{
    return {
        type:GET_PRODUCTS_RESPONSE_SUCCESS,
        payload
    }
}
export const Get_Pro_Res_Error=()=>{
    return {
        type:GET_PRODUCTS_RESPONSE_ERROR
    }
}
export const Add_View_Product=(payload:any)=>{
    return{
        type:VIEW_PRODUCT,
        payload
    }
}
  
export const Get_Data_from_API=(type:string="allsarees"):any=>(dispatch:any)=>{
    axios(`http://localhost:8080/${type}`).then((res)=>{
        //console.log(res.data)
       // console.log(Get_Pro_Res_Success(res.data))
       dispatch(Get_Pro_Res_Success(res.data)) 
    })
}
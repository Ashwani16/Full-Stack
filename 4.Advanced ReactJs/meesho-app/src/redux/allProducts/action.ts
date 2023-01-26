import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_RESPONSE_ERROR, GET_PRODUCTS_RESPONSE_SUCCESS } from "./actionTypes"

export const Get_Pro_Req=()=>{
    return {
        type:GET_PRODUCTS_REQUEST
    }
}
export const Get_Pro_Res_Success=(payload:()=>{}|object)=>{
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
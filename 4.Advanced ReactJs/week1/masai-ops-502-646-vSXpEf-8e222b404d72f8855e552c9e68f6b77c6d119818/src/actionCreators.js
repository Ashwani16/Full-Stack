import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"

//create action creator functions here, using the action types from actionTypes.js;
export const Get_Req=() =>{
    return {
        type:GET_PRODUCTS_REQUEST
    }
}
export const Get_Succ=(payload)=>{
    return {
        type:GET_PRODUCTS_SUCCESS,
        payload
    }
}
export const Get_Err=()=>{
    return {
        type:GET_PRODUCTS_FAILURE
    }
}
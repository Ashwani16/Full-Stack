import { LOGIN_REQUEST, LOGIN_RES_ERROR, LOGIN_RES_SUCCESS } from "./ActionTypes"

export const Log_In_Req=()=>{
    return {
        type:LOGIN_REQUEST
    }
}
export const Log_In_Res_Succ=(payload)=>{
    return {
        type:LOGIN_RES_SUCCESS,
            payload
    }
}
export const Log_In_Res_Err=()=>{
    return {
        type:LOGIN_RES_ERROR
    }
}
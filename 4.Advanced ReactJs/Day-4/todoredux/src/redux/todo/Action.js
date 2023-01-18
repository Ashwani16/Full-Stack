import { DELETE_RESPONSE_SUCCESS, GET_FROM_API_SUCCESS, PATCH_RESPONSE_SUCCESS, POST_RESPONSE_SUCCESS } from "./ActionTypes";


export function Get_Res(payload){
    return {
        type:GET_FROM_API_SUCCESS,payload
    }
}
export function Post_Res(payload){
    return {
        type:POST_RESPONSE_SUCCESS,payload
    }
}
export function Patch_Res(payload){
    return {
        type:PATCH_RESPONSE_SUCCESS,payload
    }
}
export function Delete_Res(payload){
    return {
        type:DELETE_RESPONSE_SUCCESS,payload
    }
}
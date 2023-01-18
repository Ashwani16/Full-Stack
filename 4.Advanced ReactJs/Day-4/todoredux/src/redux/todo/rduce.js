import { DELETE_RESPONSE_SUCCESS, GET_FROM_API_SUCCESS, PATCH_RESPONSE_SUCCESS, POST_RESPONSE_SUCCESS } from "./ActionTypes";
let list=JSON.parse(localStorage.getItem("listt"))||[]

export const reducer=(state={list},{type,payload})=>{
    switch(type){
        case PATCH_RESPONSE_SUCCESS:{
            let arr=state.list.filter((e)=>{
                return e.id!=payload.id
            })
            localStorage.setItem("listt",JSON.stringify([...arr,payload]))
            return {...state,list:[...arr,payload]}
        }
        case DELETE_RESPONSE_SUCCESS:{
            let arr=state.list.filter((e)=>{
                return e.id!=payload
            })
            localStorage.setItem("listt",JSON.stringify(arr))
            return {...state,list:[...arr]}
        }
        case POST_RESPONSE_SUCCESS:{
            localStorage.setItem("listt",JSON.stringify([...state.list,payload]))
            return {...state,list:[...state.list,payload]}
        }
        case GET_FROM_API_SUCCESS:
            localStorage.setItem("listt",JSON.stringify(payload))
            return {...state,list:payload}
        default:
            return state;
    }
}
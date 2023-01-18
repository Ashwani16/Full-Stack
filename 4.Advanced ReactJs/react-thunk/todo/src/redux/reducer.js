import { Get_req } from "./action"
import { GET_REQ_ACTION, GET_RES_ERROR, GET_RES_SUCCESS } from "./actionTypes"

let initial_state={
    todos:[],
    isLoading:false,
    isError:false
}
export default function reducer(state=initial_state,{type,payload}){
    switch (type){
        case GET_REQ_ACTION:
            return {state,isLoading:true,isError:false}
        case GET_RES_SUCCESS:
            return {state,todos:payload,isLoading:false,isError:false}   
        case GET_RES_ERROR:
            return {state,isError:true} 
        default:
            return state
    }
} 
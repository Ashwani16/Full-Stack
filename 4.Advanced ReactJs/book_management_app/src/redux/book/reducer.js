import { GET_RES_SUCCESS } from "./actionTypes";

const initial_state={
    books:[]

}
export const reducer=(state=initial_state,{payload,type})=>{
    switch(type){
        case GET_RES_SUCCESS:{
            return {...state,books:payload}
        }
        default:
            return state;
    }
}
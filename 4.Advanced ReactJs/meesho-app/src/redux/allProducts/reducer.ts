import { GET_PRODUCTS_RESPONSE_SUCCESS, VIEW_PRODUCT } from "./actionTypes";

const initial_State={
    products:[],
    singleProduct:{}
}
interface actiontype{
    type:string,
    payload?:any
}
export const reducer=<Type>(state=initial_State,{type,payload}:actiontype):typeof state=>{
    switch (type) {
        case GET_PRODUCTS_RESPONSE_SUCCESS:{
            return {...state,products:payload}
        }
        case VIEW_PRODUCT:{
            return {...state,singleProduct:payload}
        }
    
        default:
            return state
    }
}
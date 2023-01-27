import { Objprop } from "../../components/ProductsBar"
import { ADD_TO_CART, DECREMENT_CART_COUNT, REMOVE_FROM_CART } from "./actionType"

export const AddToCart=(payload:Objprop)=>{
    return {
        type:ADD_TO_CART,
        payload
    }
}
export const RemoveFromCart=(payload:string)=>{
    return {
        type:REMOVE_FROM_CART,
        payload
    }
}
export const DecrementCartCount=(payload:string)=>{
    return {
        type:DECREMENT_CART_COUNT,
        payload
    }
}
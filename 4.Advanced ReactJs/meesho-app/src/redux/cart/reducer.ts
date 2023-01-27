import { Objprop } from "../../components/ProductsBar";
import { ADD_TO_CART } from "./actionType";
type Initial_StateProps={
    cart:Objprop[],
    toatal_Count:number,
    toatal_Amount:number
}
var initial_State:Initial_StateProps={
    cart:[],
    toatal_Count:0,
    toatal_Amount:0
}
type ActionProps={
    type:string;
    payload:any
}
export const reducer=(state=initial_State,action:ActionProps)=>{
    switch (action.type) {
        case ADD_TO_CART:{
            let c=false;
            let amount:number=+(action.payload.price.replace('₹',''))
            let arr=[...state.cart]
            arr.forEach((e,i) => {
                if(e.id===action.payload.id){
                    c=true;
                    arr[i].quantity=arr[i].quantity+1
                }
            });
            if(c){
                return {...state,cart:arr,toatal_Count:state.toatal_Count+1,toatal_Amount:state.toatal_Amount+amount}
            }
            
            return {cart:[...state.cart,action.payload],toatal_Count:state.toatal_Count+1,toatal_Amount:state.toatal_Amount+amount}
        }
        default:
           return state
    }
}
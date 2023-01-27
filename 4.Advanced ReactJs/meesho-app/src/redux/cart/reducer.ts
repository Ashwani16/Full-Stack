import { Objprop } from "../../components/ProductsBar";
import { ADD_TO_CART, DECREMENT_CART_COUNT, REMOVE_FROM_CART } from "./actionType";
type Initial_StateProps={
    cart:Objprop[],
    toatal_Count:number,
    toatal_Amount:number,
    
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
        case REMOVE_FROM_CART:{
            let amount:number=+(action.payload.price.replace('₹',''))
            let arr=state.cart.filter((e)=>{
                return e.id!== action.payload.id
            })
            return {...state,cart:arr,toatal_Count:state.toatal_Count-1,toatal_Amount:state.toatal_Amount-amount}
        }
        case DECREMENT_CART_COUNT:{
            let c=false;
            let a:number;
            let amount:number=+(action.payload.price.replace('₹',''))
            let obj;
            state.cart.forEach((e:any,i:any) => {
                if(e.id===action.payload.id){
                    c=true;
                    a=i 
                    obj={...action.payload,quantity:e.quantity-1}
                }
            });
            let arr:any=state.cart.filter((e)=>{
                return e.id!== action.payload.id
            })
            return {...state,cart:[...arr,obj],toatal_Count:state.toatal_Count-1,toatal_Amount:state.toatal_Amount-amount}
            
        }
        case ADD_TO_CART:{
            let c=false;
            let a:number;
            let amount:number=+(action.payload.price.replace('₹',''))
            let obj;
            state.cart.forEach((e:any,i:any) => {
                if(e.id===action.payload.id){
                    c=true;
                    a=i 
                    obj={...action.payload,quantity:e.quantity+1}
                }
            });
            if(c){
                let arr:any=state.cart.filter((e)=>{
                    return e.id!== action.payload.id
                })
                return {...state,cart:[...arr,obj],toatal_Count:state.toatal_Count+1,toatal_Amount:state.toatal_Amount+amount}
            }
            
            return {cart:[...state.cart,action.payload],toatal_Count:state.toatal_Count+1,toatal_Amount:state.toatal_Amount+amount}
        }
        default:
           return state
    }
}
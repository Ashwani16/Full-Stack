import { LOGIN_RES_ERR, LOGIN_RES_SUCC } from "./actionTypes"

const initial_state={
    isAuth:false,
    token:"",
    isErr:false
}
export const reducer=(state=initial_state,{type,payload})=>{
        switch(type){
            case LOGIN_RES_SUCC:
                return {...state,token:payload,isAuth:true}
            case LOGIN_RES_ERR:
                return {...state,isErr:true}
            default :
            return state;
        }
}
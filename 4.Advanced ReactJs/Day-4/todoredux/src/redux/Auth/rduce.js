import { LOGIN_REQUEST, LOGIN_RES_ERROR, LOGIN_RES_SUCCESS } from "./ActionTypes";
let initial_state=JSON.parse(localStorage.getItem("auth"))||{token:"",isLoading:false,isAuth:false,isErr:false}
export const reducer=(state=initial_state,{type,payload})=>{
    switch(type){
      case LOGIN_REQUEST:{
          localStorage.setItem("auth",JSON.stringify({...state,isLoading:true}))
            return {...state,isErr:false,isLoading:true}
      }
      case LOGIN_RES_SUCCESS:{
        localStorage.setItem("auth",JSON.stringify({...state,isLoading:false,token:payload,isAuth:true}))
        return {...state,isLoading:false,token:payload,isAuth:true,isErr:false}
      }
      case LOGIN_RES_ERROR:{
        localStorage.setItem("auth",JSON.stringify({...state,isErr:true,isLoading:false }))
        return {...state,isErr:true,isLoading:false }
      }
        default:
            return state;
    }
}
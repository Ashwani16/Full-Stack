import { applyMiddleware, legacy_createStore } from "redux";
import reducer  from "./reducer.js";
import thunk from "redux-thunk"

const custumMideWare=(state)=>(dispatch)=>(action)=>{
    if(typeof action=="function")
   return action(dispatch)
      
}

export const store=legacy_createStore(reducer,applyMiddleware(custumMideWare))
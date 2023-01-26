import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { reducer as productReducer } from "./allProducts/reducer"
import thunk from "redux-thunk"
const allreducer=combineReducers({productReducer})
export const store=legacy_createStore(allreducer,applyMiddleware(thunk)) 
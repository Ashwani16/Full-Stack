import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { reducer as productReducer } from "./allProducts/reducer"
import {reducer as cartReducer} from "./cart/reducer"
import thunk from "redux-thunk"
const allreducer=combineReducers({productReducer,cartReducer})
export const store=legacy_createStore(allreducer,applyMiddleware(thunk)) 
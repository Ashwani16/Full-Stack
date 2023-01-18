import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as bookReducer } from "./book/reducer";
import { reducer as authReducer } from "./Auth/reducer";

const reducerRoot=combineReducers({bookReducer,authReducer})

export const store=legacy_createStore(reducerRoot,applyMiddleware(thunk))
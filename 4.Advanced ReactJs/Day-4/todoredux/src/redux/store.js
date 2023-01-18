import {legacy_createStore,combineReducers} from "redux"
import { reducer as authreducer} from "./Auth/rduce"
import { reducer as todoreducer } from "./todo/rduce"
const rootreducer=combineReducers({authreducer,todoreducer})
 export const store=legacy_createStore(rootreducer)
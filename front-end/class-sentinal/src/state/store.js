import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { analyseReducer } from "./analyse/Reducer"
import { authReducer } from "./auth/Reducer"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
    auth : authReducer,
    analyse : analyseReducer
})

export const store =  legacy_createStore(rootReducer , applyMiddleware(thunk))
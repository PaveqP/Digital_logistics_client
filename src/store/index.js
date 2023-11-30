import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./UserReducer";


import { RouteReducer } from "./RouteReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    route: RouteReducer
})

export const store = createStore(rootReducer)
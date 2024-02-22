import { applyMiddleware, createStore } from "redux"
import combineReducer from "./reducers/CombineReducer"
import thunk from "redux-thunk"

const store = createStore(combineReducer, {}, applyMiddleware(thunk))
export default store

import { combineReducers } from "redux"
import { GetBooksReducer } from "./BookReducer"

const combineReducer = combineReducers({
  GetBooksReducer,
})

export default combineReducer

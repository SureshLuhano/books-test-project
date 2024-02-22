import { ActionTypes } from "../constants"

const INITIAL_STATE = {
  books: [],
  loading: false,
}

const GetBooksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      }
    case ActionTypes.SEARCH_BOOK:
      return {
        ...state,
        books: action.payload,
        loading: false,
      }
    case ActionTypes.GET_BOOKS_FAIL:
      return {
        ...state,
        books: [],
        loading: false,
      }
    case ActionTypes.BOOKS_LOADER:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export { GetBooksReducer }

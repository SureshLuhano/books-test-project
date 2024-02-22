import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../constants";
import { Doc } from "../../interfaces/interface";

const getBooksAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.BOOKS_LOADER,
    });

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=book+name+here`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const books: Doc[] = response.data.docs;

      dispatch({
        type: ActionTypes.GET_BOOKS_SUCCESS,
        payload: books,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.GET_BOOKS_FAIL,
      });
      console.log("err", err);
    }
  };
};

const searchBooksAction = (searchTerm: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.BOOKS_LOADER,
    });

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${
          searchTerm ? searchTerm : "book+name+here"
        }`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const formattedSearchTerm = searchTerm.trim().toLowerCase();
      const filterBooks: Doc[] = response.data.docs.filter(
        (book: Doc | undefined) => {
          return (
            book?.title &&
            book.title.toLowerCase().includes(formattedSearchTerm)
          );
        }
      );

      dispatch({
        type: ActionTypes.SEARCH_BOOK,
        payload: filterBooks,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.GET_BOOKS_FAIL,
      });
      console.log("err", err);
    }
  };
};

export { getBooksAction, searchBooksAction };

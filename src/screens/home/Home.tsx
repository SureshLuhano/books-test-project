import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../../components/card/BookCard.tsx";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { RootState } from "../../interfaces/interface";
import { getBooksAction } from "../../store/actions/BookActions.tsx";
import { ThunkDispatch } from "redux-thunk";
import AppNavbar from "../../components/navbar/Navbar.tsx";

const Home = () => {
  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();

  const { books, loading } = useSelector((state: RootState) => {
    return state.GetBooksReducer;
  });

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  return (
    <>
      <AppNavbar />
      <Box
        sx={{
          margin: "75px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {loading ? (
          <CircularProgress sx={{ color: "#004D6D" }} thickness={4.8} />
        ) : (
          books &&
          books.map((book, i) => {
            return <BookCard key={i} book={book} />;
          })
        )}
      </Box>
    </>
  );
};

export default Home;

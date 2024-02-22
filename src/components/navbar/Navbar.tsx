import React from "react";
import logo from "../../assets/logo.png";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { searchBooksAction } from "../../store/actions/BookActions.tsx";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../interfaces/interface.tsx";

const AppNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setTimeout(() => {
      dispatch(searchBooksAction(event.target.value));
    }, 1500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        flexWrap: "wrap",
      }}
    >
      <TextField
        id="search"
        type="search"
        placeholder="search"
        value={searchTerm}
        className="search-input"
        onChange={handleChange}
        sx={{
          width: 663,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "100px",
            backgroundColor: "#EFEFEF",
          },
        }}
      />
    </Box>
  );
};

export default AppNavbar;

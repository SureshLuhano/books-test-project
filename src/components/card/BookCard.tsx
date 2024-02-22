import React from "react";
import Card from "react-bootstrap/Card";
import BookRating from "../rating/BookRating.tsx";
import IconButton from "@mui/material/IconButton";
import AppModal from "../modal/AppModal.tsx";
import { useState } from "react";
import "./card.css";

function BookCard({ book }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen ? (
        <AppModal bool={modalOpen} book={book} handleClose={handleCloseModal} />
      ) : null}
      <Card
        className="card-container"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Author: {book.author_name}</Card.Text>
          <Card.Text>Publish year{book.first_publish_year}</Card.Text>
          <Card.Text>Pages: {book.number_of_pages_median}</Card.Text>
          <BookRating rating={book.ratings_average} />
          <IconButton
            sx={{
              position: "absolute",
              right: "8px",
              top: "15px",
              backgroundColor: "white",
            }}
          ></IconButton>
        </Card.Body>
      </Card>
    </>
  );
}

export default BookCard;

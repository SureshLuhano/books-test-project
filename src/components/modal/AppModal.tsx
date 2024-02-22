import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import BookRating from "../rating/BookRating.tsx";
import "./modal.css";
import React from "react";

function AppModal({ bool, book, handleClose }) {
  const [lgShow, setLgShow] = useState(bool);
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setLgShow(false);
          handleClose();
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="book-data-container">
            <div>
              <h4>{book && book.title}</h4>
            </div>

            <div className="book-data">
              <div>
                <h6>Rating</h6>
                <BookRating rating={book && book.ratings_average} />
              </div>
              <div>
                <h6>Reviews</h6>
                <p>{book && book.ratings_count}</p>
              </div>
            </div>

            <div style={{ lineHeight: 0.6 }}>
              <p>
                <b>Author:</b> {book && book.author_name}
              </p>
              <p>
                <b>Language:</b> {book.language[0]}
              </p>
              <p>
                <b>Year: </b>
                {book && book.first_publish_year}
              </p>
              <p>
                <b>Pages:</b> {book && book.number_of_pages_median}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppModal;

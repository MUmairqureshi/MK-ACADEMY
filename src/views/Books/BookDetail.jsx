import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { UserLayout } from "../Layout";
import { fetchBookById } from "../../services/bookService";
import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../../slices/cartSlice";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const baseURL =
    "https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/";

  useEffect(() => {
    const getBook = async () => {
      try {
        const resp = await fetchBookById(id);
        setBook(resp.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!book) {
    return <p>Book not found</p>;
  }

  const imageUrl = `${baseURL}${book.image}`;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: book.id,
        quantity,
        price: book.price,
        title: book.title,
        description: book.description,
        image: book.image,
      })
    );
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(increaseQuantity({ id: book.id, quantity: quantity + 1 }));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      dispatch(decreaseQuantity(book.id));
    }
  };

  return (
    <UserLayout>
      <Container className="my-5 ">
        <Row className="align-items-start gap-5 gap-md-0 ">
          <Col xs={12} md={6}>
            <Image src={imageUrl} alt={book.title} width="100%" />
          </Col>
          <Col xs={12} md={6} className="align-items-start">
            <div className="actionBtn gap-3 d-flex justify-content-start">
              <div className="qty-container">
                <button
                  className="qty-btn-minus btn-light qty-btn"
                  type="button"
                  onClick={handleDecreaseQuantity}
                >
                  <i className="fa fa-minus qty-btn"></i>
                </button>
                <input
                  type="text"
                  name="qty"
                  value={quantity}
                  readOnly
                  placeholder="1"
                  className="input-qty"
                />
                <button
                  className="qty-btn-minus btn-light qty-btn"
                  type="button"
                  onClick={handleIncreaseQuantity}
                >
                  <i className="fa fa-plus qty-btn"></i>
                </button>
              </div>
              <button
                type="button"
                data-id={book.id}
                className="btnBooksBuy"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
            <Button variant="warning">
              <i className="fa fa-amazon"></i>
            </Button>
            <h1>{book.title}</h1>
            <h4 className="text-muted">{book.author}</h4>
            <p className="book-price">${book.price}</p>
            <p>{book.description}</p>
          </Col>
        </Row>
        <Col xs={12} className=" mb-4 mt-5  " style={{ height: "400px" }}>
          <iframe
            width="100%"
            className="videoIframeSize   h-100 "
            src="https://www.youtube.com/embed/_2xpQVVFKSo?si=9L_8J98hkM_BwpyH?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allow="autoplay"
          ></iframe>
        </Col>
      </Container>
    </UserLayout>
  );
};

export default BookDetail;

import React, { useState } from "react";
import { UserLayout } from "../Layout";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCartAndDatabase,
} from "../../slices/cartSlice";

import "./cartItem.css";
import { useDispatch } from "react-redux";
const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity }) => {
  const dispatch = useDispatch();
  return (
    <Container className="">
      <Row className=" px-1 px-md-5">
        <Col xs={12} lg={8} className="bg-grey gy-2 p-3 rounded">
          <Row>
            <Col xs={3} md={3} lg={2}>
              <Image
                src="/images/book.jpg"
                height="60px"
                width="60px"
                className="img-border"
              />
            </Col>
            <Col xs={5} md={6} lg={7}>
              <Row className="gy-3 gy-md-4">
                <Col xs={12}>
                  <p className="responsive-heading"> {item.title}</p>
                </Col>
                <Col xs={12}>
                  <p className="responsive-heading">$ {item.price} </p>
                </Col>
              </Row>
            </Col>
            <Col xs={4} md={3} lg={3} className="text-md-right">
              <Row className="d-flex flex-row-reverse h-100">
                <button
                  className=" btn-width "
                  onClick={() =>
                    dispatch(removeItemFromCartAndDatabase(item.id))
                  }
                >
                  <i className="fa fa-trash delete-icon"></i>
                </button>

                <Col xs={12}>
                  <div className="qty-container">
                    {item.type === "1" ? (
                      <>
                        <button
                          onClick={onDecreaseQuantity}
                          className="qty-btn-minus btn-light qty-btn"
                          type="button"
                        >
                          <i className="fa fa-minus qty-btn"></i>
                        </button>
                        <input
                          type="text"
                          name="qty"
                          value={item.qty}
                          readOnly
                          placeholder="1"
                          className="input-qty"
                        />
                        <button
                          onClick={onIncreaseQuantity}
                          className="qty-btn-minus btn-light qty-btn"
                          type="button"
                        >
                          <i className="fa fa-plus qty-btn"></i>
                        </button>
                      </>
                    ) : (
                      <h6>Course</h6>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;

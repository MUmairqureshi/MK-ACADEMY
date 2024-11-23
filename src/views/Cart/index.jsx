import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserLayout } from "../Layout";
import CartItem from "./CartItem";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchCartItems, updateCartItems } from "../../slices/cartSlice";
import {
  removeItemFromCartAndDatabase,
  increaseQuantity,
  decreaseQuantity,
} from "../../slices/cartSlice";
import { updateCart } from "../../services/cartServices";
import "./index.css";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [disable, setdisable] = useState(true);
  {
    !cartItems.loading && cartItems?.items?.data
      ? document.querySelector(".loaderBox")?.classList?.add("d-none")
      : document.querySelector(".loaderBox")?.classList?.remove("d-none");
  }
  const { shipping, sub_total, total } = cartItems?.items?.summary || {};
  const handleUpdateCart = () => {
    const updatedItems = cartItems.items.data.map((item) => ({
      productID: item.product_id,
      qty: item.qty,
    }));

    dispatch(updateCartItems(updatedItems));
    setdisable(true);
  };
  useEffect(() => {
    // Fetch cart items when the component mounts
    dispatch(fetchCartItems());
  }, []);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCartAndDatabase(itemId));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
    setdisable(false);
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
    setdisable(false);
  };
  return (
    <UserLayout>
      <Container className="mt-5">
        <Container className="px-5">
          <div className="actionBtn mt-3 mb-5">
            <button
              disabled={disable}
              className={`${disable && "disabled"}`}
              id="UpdateCart"
              onClick={() => handleUpdateCart()}
            >
              Update Cart
            </button>
          </div>
        </Container>
        <Row className="mt-5 pt-5">
          <Col className="mt-5 mt-md-0">
            {cartItems?.items?.data?.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemove={handleRemoveItem}
                onIncreaseQuantity={() => handleIncreaseQuantity(item)}
                onDecreaseQuantity={() => handleDecreaseQuantity(item)}
              />
            ))}
          </Col>
        </Row>
        {cartItems?.items?.data?.length > 0 && (
          <Container className="p-md-5 mt-3">
            <div className="col-md-12 col-lg-8">
              <div className="summary_main">
                <h2>Summary</h2>
                <div className="summary_heading_price">
                  <p>Sub Total</p>
                  <p className="total_amount" id="product_price">
                    ${sub_total}
                  </p>
                </div>

                <div className="summary_heading_price">
                  <p>Shipping</p>
                  <p>${shipping}</p>
                </div>

                <div className="summary_heading_price">
                  <div>
                    <h6>Total amount </h6>
                    <h6>(including VAT)</h6>
                  </div>

                  <h6 className="total_amount">${total}</h6>
                </div>

                <div className="actionButton">
                  <Link to="/check-out">GO TO CHECKOUT</Link>
                </div>
              </div>
            </div>
          </Container>
        )}
      </Container>
    </UserLayout>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.css";

const BookContainer = ({
  item,
  addToCart,
  green = false,
  onClick,
  successMessage,
  addedItemId,
}) => {
  const {
    title,
    description,
    price,
    id,
    image,
    is_on_site,
    referal_link,
    video_link,
  } = item || {};
  const baseURL =
    "https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/";
  const imageUrl = `${baseURL}${image}`;

  return (
    <Container
      className={` ${
        green ? "green book_Container" : "light_bg book_Container"
      } "book_Container "`}
    >
      <Row className="inner_Box  gy-md-0">
        <Col xs={12} md={6}>
          <Row className="h-100 gy-4 gy-md-0">
            <Col xs={12} md={12} lg={6}>
              <div className="img_container">
                <h5 className="title">{title}</h5>
                <div className="image">
                  <img src={imageUrl} width="100%" />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="d-block d-md-none d-lg-block  ">
              <div className=" text_container ">
                <h5>Short Description</h5>
                <p>{description}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className="mt-4 mt-md-0">
          <Row className="gy-3 h-100" style={{ height: "100%" }}>
            <Col xs={12} className="">
              <iframe
                width="100%"
                className="videoIframeSize pr-5  player "
                src={video_link}
                allow="autoplay"
              ></iframe>
            </Col>
            <Col xs={12}>
              <div className="price">
                <h4>Price: ${price}</h4>

                <div>
                  <Button className="details" onClick={onClick}>
                    View Details
                  </Button>
                  <>
                    {is_on_site == 1 ? (
                      <i
                        className="fa fa-shopping-cart cart-icon"
                        onClick={addToCart}
                      ></i>
                    ) : (
                      <Button variant="warning" href={referal_link}>
                        <i className="fa fa-amazon"></i>
                      </Button>
                    )}
                  </>
                  <div
                    className={`text-center prdSuccess ${
                      successMessage && addedItemId === id ? "" : "d-none"
                    }`}
                  >
                    <span className="text-center text-success">
                      Product Add to Cart Successfully
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} className="d-none d-md-block d-lg-none mt-4">
          <div className=" text_container">
            <h5>Short Description</h5>
            <p>{description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookContainer;

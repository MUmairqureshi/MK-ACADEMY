// import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { userFeedbackImg } from "../../assets/images";

import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ClientFeedback = () => {
  return (
    <>
      <section className="client_say_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content mb-md-5">
                <h1>what our client’s say</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="item">
                <div className="client_card_main">
                  <div className="client_card">
                    <div style={{ position: "relative" }}>
                      <div className="img_div">
                        <img
                          src={userFeedbackImg}
                          className="placeholder_image"
                        ></img>
                      </div>
                      <span className="client_card_image">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>

                    <div
                      className="content_div text-center align-self-center"
                      style={{ width: "fit-content" }}
                    >
                      <h4 className="">asdasd</h4>
                      <h6>asdsczxc</h6>

                      <div className="mt-3">
                        <button
                          type="button"
                          className="moreless-button review-description"
                          data-toggle="modal"
                          data-target="#exampleModal35"
                          data-content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
                          data-id="35"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="client_card_main">
                  <div className="client_card">
                    <div style={{ position: "relative" }}>
                      <div className="img_div">
                        <img
                          src={userFeedbackImg}
                          className="placeholder_image"
                        ></img>
                      </div>
                      <span className="client_card_image">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>

                    <div
                      className="content_div text-center align-self-center"
                      style={{ width: "fit-content" }}
                    >
                      <h4 className="">asdasd</h4>
                      <h6>asdsczxc</h6>

                      <div className="mt-3">
                        <button
                          type="button"
                          className="moreless-button review-description"
                          data-toggle="modal"
                          data-target="#exampleModal35"
                          data-content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
                          data-id="35"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="client_card_main">
                  <div className="client_card">
                    <div style={{ position: "relative" }}>
                      <div className="img_div">
                        <img
                          src={userFeedbackImg}
                          className="placeholder_image"
                        ></img>
                      </div>
                      <span className="client_card_image">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>

                    <div
                      className="content_div text-center align-self-center"
                      style={{ width: "fit-content" }}
                    >
                      <h4 className="">asdasd</h4>
                      <h6>asdsczxc</h6>

                      <div className="mt-3">
                        <button
                          type="button"
                          className="moreless-button review-description"
                          data-toggle="modal"
                          data-target="#exampleModal35"
                          data-content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
                          data-id="35"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="client_card_main">
                  <div className="client_card">
                    <div style={{ position: "relative" }}>
                      <div className="img_div">
                        <img
                          src={userFeedbackImg}
                          className="placeholder_image"
                        ></img>
                      </div>
                      <span className="client_card_image">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>

                    <div
                      className="content_div text-center align-self-center"
                      style={{ width: "fit-content" }}
                    >
                      <h4 className="">asdasd</h4>
                      <h6>asdsczxc</h6>

                      <div className="mt-3">
                        <button
                          type="button"
                          className="moreless-button review-description"
                          data-toggle="modal"
                          data-target="#exampleModal35"
                          data-content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
                          data-id="35"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="client_card_main">
                  <div className="client_card">
                    <div style={{ position: "relative" }}>
                      <div className="img_div">
                        <img
                          src={userFeedbackImg}
                          className="placeholder_image"
                        ></img>
                      </div>
                      <span className="client_card_image">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>

                    <div
                      className="content_div text-center align-self-center"
                      style={{ width: "fit-content" }}
                    >
                      <h4 className="">asdasd</h4>
                      <h6>asdsczxc</h6>

                      <div className="mt-3">
                        <button
                          type="button"
                          className="moreless-button review-description"
                          data-toggle="modal"
                          data-target="#exampleModal35"
                          data-content='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
                          data-id="35"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="contact_form_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="social-contacts">
                <div className="links_1">
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </p>
                  <div>
                    <h6>location:</h6>
                    <p>Fairfax , Virginia, U.S. A</p>
                  </div>
                </div>

                <div className="links_1">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </p>
                  <div>
                    <h6>Email us on:</h6>
                    <p> Mathknots.help@gmail.com</p>
                  </div>
                </div>
                <div className="follow_us_div">
                  <h6>Follow Us</h6>
                  <div className="social_links">
                    <Link href="https://www.facebook.com/">
                      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                      {/* <i className="fa-brands fa-facebook-f"></i> */}
                      {/* <i className="fa-solid fa-face-smile"></i> */}
                      {/* <FontAwesomeIcon icon={faSquareFacebook} /> */}
                      {/* <i className="fa-brands fa-facebook-f"></i> */}
                      {/* <i className="fa-brands fa-facebook-f"></i> */}

                      {/* <FontAwesomeIcon icon={faFacebookFF}></FontAwesomeIcon> */}
                      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                    </Link>

                    {/* <Link href="https://www.pinterest.com/">
                                    <i className="fa-brands fa-twitter"></i>
                                </Link>

                                <Link href="https://www.linkedin.com/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </Link> */}

                    {/* <a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a>
                                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8 ">
              <div className="form_side">
                <h1>Drop your message</h1>
                <form action="" method="post" id="contactform">
                  <input
                    type="hidden"
                    name="_token"
                    value="gnuocLCJy9290EuOWcHZenIlZfOy2VmcQnDWjAyx"
                  ></input>
                  <input
                    type="hidden"
                    name="form_name"
                    value="Contact Form"
                  ></input>
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-3"
                      placeholder="Name*"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="form-control mb-3"
                      placeholder="Email Address*"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      className="form-control mb-3"
                      placeholder="Phone Number*"
                      required=""
                    ></input>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="message"
                      className="form-control mb-3"
                      placeholder="Your Message*"
                      required=""
                    ></input>
                  </div>

                  <div className="actionBtn mt-5">
                    <button className="formSubmit" type="submit">
                      Submit
                    </button>
                    {/* <a href="javscript:;">Submit</a> */}
                  </div>
                </form>
                <div id="contactformsresult" className="mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientFeedback;

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const HomeBanner = () => {
  return (
    <Swiper slidesPerView={1} loop={true}>
      <SwiperSlide>
        <div>
          <section className="banner_section01">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-0 p-md-5">
                  <div className="banner_content">
                    <h5>
                      WELCOME TO <span>Math-Knots</span>
                    </h5>
                    <h1>The Importance of Education</h1>
                    <p>
                      We aim to nourish and encourage the creative and budding
                      talents in young kids; to provide a one-source platform
                      where kids get the opportunity to learn in various forms
                      suitable to their needs in this next-gen learning. It is
                      essential to nurture, develop and stimulate the
                      intellectual potential in kids. Our goal is to strengthen
                      the skills from a very young age to light the fire of
                      passion and interest in competitive academic challenges.
                    </p>
                    <p>
                      Mathematical knowledge and the ability to solve
                      quantifiable problems and utilize critical thinking skills
                      enhance the abilities of the students to think and make
                      decisions. We cover all types of learning approaches
                      ranging from books, videos classNamees, practice, and
                      testing.
                    </p>
                    <div className="actionBtn">
                      <Link to="/video-learning">Online Practice</Link>
                    </div>
                    <div className="visiters_main_dvi">
                      <div className="visitors_numbers">
                        <h4>Visitors</h4>
                        <p>
                          <span>2259</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <section className="banner_section02">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-0 p-md-5">
                  <div className="banner_content">
                    <h5>
                      WELCOME TO <span>Math-Knots</span>
                    </h5>
                    <h1>The Importance of Education</h1>
                    <p>
                      We aim to nourish and encourage the creative and budding
                      talents in young kids; to provide a one-source platform
                      where kids get the opportunity to learn in various forms
                      suitable to their needs in this next-gen learning. It is
                      essential to nurture, develop and stimulate the
                      intellectual potential in kids. Our goal is to strengthen
                      the skills from a very young age to light the fire of
                      passion and interest in competitive academic challenges.
                    </p>
                    <p>
                      Mathematical knowledge and the ability to solve
                      quantifiable problems and utilize critical thinking skills
                      enhance the abilities of the students to think and make
                      decisions. We cover all types of learning approaches
                      ranging from books, videos classNamees, practice, and
                      testing.
                    </p>
                    <div className="actionBtn">
                      <Link to="/courses-listing">MK Academy</Link>
                    </div>
                    <div className="visiters_main_dvi">
                      <div className="visitors_numbers">
                        <h4>Visitors</h4>
                        <p>
                          <span>2259</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <section className="banner_section03">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-0 p-md-5">
                  <div className="banner_content">
                    <h5>
                      WELCOME TO <span>Math-Knots</span>
                    </h5>
                    <h1>The Importance of Education</h1>
                    <p>
                      We aim to nourish and encourage the creative and budding
                      talents in young kids; to provide a one-source platform
                      where kids get the opportunity to learn in various forms
                      suitable to their needs in this next-gen learning. It is
                      essential to nurture, develop and stimulate the
                      intellectual potential in kids. Our goal is to strengthen
                      the skills from a very young age to light the fire of
                      passion and interest in competitive academic challenges.
                    </p>
                    <p>
                      Mathematical knowledge and the ability to solve
                      quantifiable problems and utilize critical thinking skills
                      enhance the abilities of the students to think and make
                      decisions. We cover all types of learning approaches
                      ranging from books, videos classNamees, practice, and
                      testing.
                    </p>
                    <div className="actionBtn">
                      <Link to="/books">Books</Link>
                    </div>
                    <div className="visiters_main_dvi">
                      <div className="visitors_numbers">
                        <h4>Visitors</h4>
                        <p>
                          <span>2259</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

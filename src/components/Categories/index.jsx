/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 16/09/2023 - 01:41:59
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const HomeCategory = (props) => {
  return (
    <>
      <section className="first_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-md-12">
              <div className="content_div">
                <div className="d-flex justify-content-between align-items-center">
                  <h1>best sellers</h1>
                  <div className="actionBtn">
                    <a href="https://custom3.mystagingserver.site/gowri_vemuri_clone/public/books-listing">
                      Explore All
                    </a>
                  </div>
                </div>
                <p className="md-w-50">
                  {" "}
                  Practice makes it perfect. Practice questions on each concept
                  helps the students master over the topic. Our grade level
                  books are aligned to respective state standards. Rigorous
                  Curriculum is aligned across multiple weeks to ensure the
                  mastery on grade level skills.{" "}
                </p>
              </div>

              <Swiper
                spaceBetween={20}
                slidesPerView={1}
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
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log("swiper",swiper)}
              >
                <SwiperSlide>
                  <div className="best_seller_card">
                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                                                            <div className="img_div">
                                                                <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg" className="img-fluid" alt=""></img>
                                                            </div>
                                                        </a> */}

                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                      <div className="img_div">
                        <img
                          src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg"
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                    </Link>

                    <div className="content">
                      <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                        <h2>Jimmie Kshlerin</h2>
                        <p>
                          Distinctio voluptatum sequi officia voluptate laborum
                          quos aut. Quo qui id quia velit dolor laboriosam
                          omnis. Facere minima aut debitis est. Fugiat
                          cupiditate unde voluptas maxime alias.
                        </p>
                      </Link>

                      <p className="pricing">
                        $34
                        <span>$7</span>
                      </p>
                      <div className="rating d-flex justify-content-end align-items-center">
                        <div className="cart">
                          <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                            View Details
                          </Link>
                          {/* <a href="https://www.amazon.com/dp/1950573850?tag=&amp;linkCode=ogi&amp;th=1&amp;psc=1" className="bg-warning border-0 btn btn-primary btn-sm text-dark">
                                                                            <i className="fa-brands fa-amazon amazon_logo"></i>
                                                                            </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="best_seller_card">
                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                                                            <div className="img_div">
                                                                <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg" className="img-fluid" alt=""></img>
                                                            </div>
                                                        </a> */}

                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                      <div className="img_div">
                        <img
                          src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg"
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                    </Link>

                    <div className="content">
                      <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                        <h2>Jimmie Kshlerin</h2>
                        <p>
                          Distinctio voluptatum sequi officia voluptate laborum
                          quos aut. Quo qui id quia velit dolor laboriosam
                          omnis. Facere minima aut debitis est. Fugiat
                          cupiditate unde voluptas maxime alias.
                        </p>
                      </Link>

                      <p className="pricing">
                        $34
                        <span>$7</span>
                      </p>
                      <div className="rating d-flex justify-content-end align-items-center">
                        <div className="cart">
                          <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                            View Details
                          </Link>
                          {/* <a href="https://www.amazon.com/dp/1950573850?tag=&amp;linkCode=ogi&amp;th=1&amp;psc=1" className="bg-warning border-0 btn btn-primary btn-sm text-dark">
                                                                            <i className="fa-brands fa-amazon amazon_logo"></i>
                                                                            </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="best_seller_card">
                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                                                            <div className="img_div">
                                                                <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg" className="img-fluid" alt=""></img>
                                                            </div>
                                                        </a> */}

                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                      <div className="img_div">
                        <img
                          src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg"
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                    </Link>

                    <div className="content">
                      <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                        <h2>Jimmie Kshlerin</h2>
                        <p>
                          Distinctio voluptatum sequi officia voluptate laborum
                          quos aut. Quo qui id quia velit dolor laboriosam
                          omnis. Facere minima aut debitis est. Fugiat
                          cupiditate unde voluptas maxime alias.
                        </p>
                      </Link>

                      <p className="pricing">
                        $34
                        <span>$7</span>
                      </p>
                      <div className="rating d-flex justify-content-end align-items-center">
                        <div className="cart">
                          <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                            View Details
                          </Link>
                          {/* <a href="https://www.amazon.com/dp/1950573850?tag=&amp;linkCode=ogi&amp;th=1&amp;psc=1" className="bg-warning border-0 btn btn-primary btn-sm text-dark">
                                                                            <i className="fa-brands fa-amazon amazon_logo"></i>
                                                                            </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="best_seller_card">
                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                                                            <div className="img_div">
                                                                <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg" className="img-fluid" alt=""></img>
                                                            </div>
                                                        </a> */}

                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                      <div className="img_div">
                        <img
                          src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg"
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                    </Link>

                    <div className="content">
                      <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                        <h2>Jimmie Kshlerin</h2>
                        <p>
                          Distinctio voluptatum sequi officia voluptate laborum
                          quos aut. Quo qui id quia velit dolor laboriosam
                          omnis. Facere minima aut debitis est. Fugiat
                          cupiditate unde voluptas maxime alias.
                        </p>
                      </Link>

                      <p className="pricing">
                        $34
                        <span>$7</span>
                      </p>
                      <div className="rating d-flex justify-content-end align-items-center">
                        <div className="cart">
                          <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/book-detail/1819">
                            View Details
                          </Link>
                          {/* <a href="https://www.amazon.com/dp/1950573850?tag=&amp;linkCode=ogi&amp;th=1&amp;psc=1" className="bg-warning border-0 btn btn-primary btn-sm text-dark">
                                                                            <i className="fa-brands fa-amazon amazon_logo"></i>
                                                                            </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="sale_div">
                <h1>50% sale</h1>
                <p>
                  Our two colorful full-length COGAT Online Practice Test in
                  each volume, includes 9 subtests with bonus questions. <br />
                  As the students do COGAT Testing Practice they learn a lot of
                  new vocabulary in words and in pictorial forms as-well, thus
                  making the tests more interesting. <br />
                  Kid friendly format for getting an edge on the real test.{" "}
                  <br />
                  Detailed answer key is included. <br />
                  Proven content has been used by many students over the years
                  to ace the Critical Thinking COGAT test.{" "}
                  <span>Now on SALE</span>
                </p>
                <div className="actionBtn mt-3">
                  <a href="https://custom3.mystagingserver.site/gowri_vemuri_clone/public/books-listing">
                    Buy Now
                  </a>
                  {/* <i className="fa-solid fa-cart-shopping"></i> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="second_section">
        <div className="container" >
            <div className="row align-items-center" >
                <div className="col-lg-6 " >
                    <div className="img-div" >
                        <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/student_img_11.jpg" className="img-fluid" alt=""></img>
                    </div>
                </div>
                <div className="col-lg-6 mb-4" >
                    <div className="content" >
                        <h1 className="text-white">MK ACADEMY</h1>
                        <p className="text-justify text-white">Take the next steps towards building a strong math &amp; ELA
                            foundation that will give your child to reach their true potential.</p>
                        <p className="text-justify text-white">Take your child’s education to next level</p>
                        <p className="text-justify text-white">Our highly successful program is based on improving learning and
                            study skills to support elementary , middle, and high school students both in and out of the
                            classroom. We offer both online and in-person tutoring services. </p>
                        <div className="ActionButtons d-flex flex-wrap gap-10 my-3" >
                            <div ><a href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing" className="">Academic year</a></div>
                            <div >
                                <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing" className="">Summer courses</a>
                            </div>
                            <div >
                                <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing" className="">View available slots</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
          </section> */}
    </>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";
import {
  subscribeImg01,
  subscribeImg02,
  subscribeImg03,
} from "../../assets/images";

// import { recentBlogsImg01, recentBlogsImg02, recentBlogsImg03 } from '../../assets/images';

const SubscribeCategory = () => {
  return (
    <>
      <section className="subscribe_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="heading">Subscribe to Online Practice</h1>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-2 col-sm-12 align-self-center">
              <div className="img_div">
                <img src={subscribeImg01} className="img-fluid" alt=""></img>
              </div>
            </div>

            <div className="col-lg-7 col-md-12 mx-auto">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className=" most_popular_card">
                    <div className="img_div">
                      <img
                        src={subscribeImg03}
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>

                    <div className="content_div">
                      <h4>Recap of program</h4>
                      <p>
                        Video explanations of all work.
                        <br />
                        Books are coming up.
                        <br />
                        Keep checking for updates.
                      </p>
                      <div className="actionBtn mt-3">
                        <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">
                          Explore All
                        </Link>
                        {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">Explore All</a> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" most_popular_card">
                    <div className="img_div">
                      <img
                        src={subscribeImg03}
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>

                    <div className="content_div">
                      <h4>Recap of program</h4>
                      <p>
                        Video explanations of all work.
                        <br />
                        Books are coming up.
                        <br />
                        Keep checking for updates.
                      </p>
                      <div className="actionBtn mt-3">
                        <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">
                          Explore All
                        </Link>
                        {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">Explore All</a> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" most_popular_card">
                    <div className="img_div">
                      <img
                        src={subscribeImg03}
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>

                    <div className="content_div">
                      <h4>Recap of program</h4>
                      <p>
                        Video explanations of all work.
                        <br />
                        Books are coming up.
                        <br />
                        Keep checking for updates.
                      </p>
                      <div className="actionBtn mt-3">
                        <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">
                          Explore All
                        </Link>
                        {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">Explore All</a> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" most_popular_card">
                    <div className="img_div">
                      <img
                        src={subscribeImg03}
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>

                    <div className="content_div">
                      <h4>Recap of program</h4>
                      <p>
                        Video explanations of all work.
                        <br />
                        Books are coming up.
                        <br />
                        Keep checking for updates.
                      </p>
                      <div className="actionBtn mt-3">
                        <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">
                          Explore All
                        </Link>
                        {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">Explore All</a> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-lg-2 col-md-12 align-self-center">
              <div className="img_div">
                <img src={subscribeImg02} className="img-fluid" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeCategory;

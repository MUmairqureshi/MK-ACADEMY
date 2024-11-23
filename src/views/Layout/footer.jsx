/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 17/01/2024 - 23:34:32
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 17/01/2024
 * - Author          : Saif
 * - Modification    :
 **/
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h2 className="font">SUBSCRIBE FOR LATEST UPDATES </h2>
            </div>
            <div className="col-md-6 mt-5">
              <div className="footer_input_div">
                <form action="" id="newForm">
                  <input
                    type="hidden"
                    name="_token"
                    value="S31wXbmXz4CURrzoDlhyMXNh4zoeaQh253yOs728"
                    autoComplete="off"
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    name=""
                    id="newemail"
                    required=""
                  />
                  <div className="subscribeAction">
                    <button>
                      {" "}
                      subscribe{" "}
                      <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                    </button>
                    {/* <!-- <input type="submit" value="Subscribe" className="w-100"> --> */}
                    {/* <!-- <a> subscribe <i className="fa fa-paper-plane"></i></a> --> */}
                  </div>
                </form>

                <div id="newsresult"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainFooterDiv">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo-img">
                <img
                  src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p className="content">
                Joy of Learning <br />
                Sharpening Minds | Strengthening Skills
              </p>
            </div>
            <div className="offset-md-1 col-md-3">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public"
                  >
                    Home
                  </a>
                </li>
                {/* <!--<li><a href="" data="javascript:;">About Us</a></li>--> */}
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/books-listing"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning"
                  >
                    Videos Subscription
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing"
                  >
                    Online Classes
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/blogs-listing"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/review-create"
                  >
                    User Reviews
                  </a>
                </li>
                <li>
                  <a data-toggle="modal" data-target="#termsAndConditionsPDF">
                    Terms &amp; Conditions
                  </a>
                </li>
                {/* <!-- href="" data="javascript:;" --> */}
                <li>
                  <a data-toggle="modal" data-target="#privacyPolicyPDF">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/images/terms_and_conditions.pdf"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                {/* <!-- href="" data="javascript:;" --> */}
                <li>
                  <a
                    target="_blank"
                    href=""
                    data="https://custom3.mystagingserver.site/gowri_vemuri/public/images/privacy_policy.pdf.pdf"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact Info</h4>
              {/* <!--<p><a href="" data="javascript:;"><i className="fa fa-mobile"></i> (904) 326-0066</a></p>--> */}
              <p>
                <a
                  href=""
                  data="mailto:Mathknots.help@gmail.com"
                >
                  <i className="fa fa-envelope"></i>Mathknots.help@gmail.com
                </a>
              </p>
              <p>
                <a
                  href=""
                  data=""
                  className="location"
                >
                  <i className="fa fa-map-marker"></i>Fairfax , Virginia, U.S. A
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>Copyright 2023 All Right Reserved. Math Knots</p>
            </div>
            <div className="col-md-6">
              <p className="footer_social_links text-center">
                <a
                  href=""
                  data="http://www.facebook.com/MathKnots"
                >
                  {" "}
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a
                  href=""
                  data="https://www.pinterest.com/mathknots/"
                >
                  <i className="fa fa-pinterest-p"></i>
                </a>
                <a
                  href=""
                  data="https://twitter.com/MathKnots"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href=""
                  data="https://www.linkedin.com/company/math-knots/about/?viewAsMember=true"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

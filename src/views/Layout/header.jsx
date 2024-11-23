import {
  faCaretDown,
  faCartShopping,
  faChevronDown,
  faChevronRight,
  faEnvelope,
  faSearch,
  faTimes,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(localStorage.getItem("token"));

  const [sidebar, setSidebar] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const sidebarRef = useRef(null);
  const handleLogout = () => {
    const token = localStorage.getItem("token");

    fetch(
      "https://custom3.mystagingserver.site/gowri_vemuri/public/api/logout",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Adjust this if your API expects a different format
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((error) => {
        console.error("There was a problem with the logout request:", error);
      });
  };

  // Function to determine the class and title based on the pathname
  const pathToHeader = {
    book: { className: "bookBg", title: "Books" },
    contact: { className: "contactBg", title: "Contact Us" },
    blog: { className: "blogsBg", title: "Blogs" },
    video: { className: "videoLearning", title: "Video Learning" },
    inPerson: { className: "videoLearning", title: "InPerson Classes" },
    courses: { className: "videoLearning", title: "MK Academy" },
    "add-to-cart": { className: "cart", title: "cart" },
    "user-registration": { className: "reg", title: "reg" },
    "forget-password": { className: "reg", title: "reg" },
    "otp-step": { className: "reg", title: "reg" },
    "update-password": { className: "reg", title: "reg" },
    "my-account": { className: "reg", title: "reg" },
    "check-out": { className: "reg", title: "reg" },
    login: { className: "login", title: "login" },
  };

  const getHeaderClassAndTitle = () => {
    for (const path in pathToHeader) {
      if (pathname.includes(path)) {
        return pathToHeader[path];
      }
    }
    return { className: null, title: null };
  };

  const { className, title } = getHeaderClassAndTitle();
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    if (sidebar) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [sidebar]);
  const bgApplicables = () => {
    const applicableClasses = ["cart", "reg", "login"];
    return applicableClasses.includes(className);
  };
  return (
    <header
      className={`header-main ${className} ${bgApplicables() ? "h-300" : ""} `}
    >
      <div className="mobile-menu">
        <div className="mobile_login">
          <ul>
            <li>
              <Link to="/my-account">
                <FontAwesomeIcon icon={faUser} /> My Account{" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
            <li>
              <Link to="#" className="register_btn">
                Register Now
              </Link>
            </li>
          </ul>
        </div>
        <div className={`header_top ${!className ? "bg-blue" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="headerTopLeft">
                  <ul>
                    <li>
                      <Link to="mailto:Mathknots.help@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        <span>Email:</span> Mathknots.help@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="headerTopRight">
                  <ul>
                    <li>
                      <Link to="/login" className="register_btn">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/user-registration" className="register_btn">
                        Register Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-top">
          <div className="img-div">
            <Link to="/">
              <img
                src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png"
                className="img-fluid"
                alt=""
              />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <div className="mobile_cart search_cart_div">
              <Link className="cart-icon-bg" to="/add-to-cart">
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                <span className="currentCartCount">
                  {isLogin ? items?.count : 0}
                </span>
              </Link>
            </div>
            <div
              className="circle "
              id="navbar"
              onClick={() => setSidebar(!sidebar)}
            >
              <p>
                <FontAwesomeIcon icon={faBars} />
              </p>
            </div>
          </div>
        </div>
        <div
          className={`nveMenu text-left ${sidebar ? "is-opened" : ""}`}
          ref={sidebarRef}
        >
          <div
            className="mobile-cross close-btn-nav"
            id="navbar"
            onClick={() => setSidebar(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png"
                className="img-fluid"
              />
            </Link>
          </div>
          <ul className="navlinks p-0 mt-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/video-learning">Video Learning</Link>
            </li>
            <li>
              <a href="https://a4ace.com/home" target="_blank">
                Online Practice (a4ace)
              </a>
            </li>
            <li className="dropdown3">
              <Link
                to="#"
                onClick={() => setToggleDropdown(!toggleDropdown)}
                className="dropbtn3"
              >
                MK Academy <FontAwesomeIcon icon={faChevronDown} />
              </Link>
              <div
                id="myDropdown3"
                className={`dropdown-content3 ${toggleDropdown ? "show" : ""}`}
              >
                <Link to="/courses-listing">Online Classes</Link>
                <Link to="/inPerson">InPerson Classes</Link>
              </div>
            </li>
            <li>
              <Link to="/blog-listing">Blogs</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/review-list">
                Own Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className={`overlay ${sidebar ? "is-on" : ""}`}></div>
        {title && <h1 className="text-center m-5 page-heading">{title}</h1>}
      </div>
      <div className={`header_top ${bgApplicables() ? "bg-blue " : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={`headerTopLeft ${bgApplicables() ? "mt-1" : ""}`}>
                <ul>
                  <li>
                    <Link to="mailto:Mathknots.help@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      <span>Email:</span> Mathknots.help@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              {!isLogin ? (
                <div className="headerTopRight">
                  <ul>
                    <li>
                      <Link to="/login" className="register_btn">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/user-registration" className="register_btn">
                        Register Now
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="headerTopRight">
                  <ul>
                    <li>
                      <Link to="/my-account">
                        <FontAwesomeIcon icon={faUser} /> My Account{" "}
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleLogout()}
                        className="register_btn"
                      >
                        logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-header">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-md-10" style={{ backgroundColor: "#fff" }}>
              <div className="row h-100">
                <div className="offset-md-1 col-md-3 h-100 d-flex align-items-center">
                  <div className="logo-img text-right">
                    <Link to="/">
                      <img
                        src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <ul className="header_links">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/books">Books</Link>
                    </li>
                    <li>
                      <Link to="/video-learning">Video Learning</Link>
                    </li>
                    <li>
                      <a href="https://a4ace.com/home" target="_blank">
                        Online Practice (a4ace)
                      </a>
                    </li>
                    <li className="dropdown3">
                      <Link
                        to="#"
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                        className="dropbtn3"
                      >
                        MK Academy <FontAwesomeIcon icon={faChevronDown} />
                      </Link>
                      <div
                        id="myDropdown3"
                        className={`dropdown-content3 ${
                          toggleDropdown ? "show" : ""
                        }`}
                      >
                        <Link to="/courses-listing">Online Classes</Link>
                        <Link to="/inPerson">InPerson Classes</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/blog-listing">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div
                className={`search_cart_div ${
                  bgApplicables() ? "bg-blue" : ""
                }`}
              >
                <div className="dropdown">
                  <Link to="#" className="dropbtn">
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ color: bgApplicables() ? "#ffffff" : "#000000" }}
                    ></FontAwesomeIcon>
                  </Link>
                  <div id="myDropdown" className="dropdown-content">
                    {/* Add search form here if needed */}
                  </div>
                </div>
                <Link to="/add-to-cart">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: bgApplicables() ? "#ffffff" : "#000000" }}
                  ></FontAwesomeIcon>
                  <span className="currentCartCount">
                    {isLogin ? items?.count : 0}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center m-5 page-heading">{title}</h1>
      </div>
    </header>
  );
};

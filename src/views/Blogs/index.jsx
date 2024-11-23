/**
 * @description      : Blogs Listing Component
 * @author           : Saif
 * @created          : 15/09/2023 - 22:18:28
 */
import React, { useEffect, useState } from "react";
import { UserLayout } from "../Layout";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for routing
import ReactMarkdown from "react-markdown";
import "./index.css";

export const Blogs = () => {
  const [data, setData] = useState([]);

  const listingData = async () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    try {
      const response = await fetch(
        "https://custom3.mystagingserver.site/gowri_vemuri/public/api/blog_listing",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      document.querySelector(".loaderBox").classList.add("d-none");
    }
  };

  useEffect(() => {
    listingData();
  }, []);

  const renderShortDescription = (description, maxLength) => {
    const div = document.createElement("div");
    div.innerHTML = description;
    const text = div.textContent || div.innerText || "";
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <UserLayout>
      <div className="providerDirectory">
        {/* <SubHeader title="BLOGS" /> */}
        <section className="video-section bg-grey  mt-5">
          <div className="container">
            <div className="row">
              {data.map((blog) => (
                <div className="col-md-4 mb-3" key={blog.id}>
                  <div className="blogs_card">
                    <div>
                      <img
                        src={`https://custom3.mystagingserver.site/gowri_vemuri/public/images/blogimages/${blog.image}`}
                        className="img-fluid"
                        alt={blog.title}
                      />
                    </div>
                    <div className="content border">
                      <h6 className="date">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {new Date(blog.created_at).toLocaleDateString()}
                      </h6>
                      <h4 className="heading">{blog.title}</h4>
                      <div className="content-blog">
                        <ReactMarkdown>
                          {renderShortDescription(blog.description, 150)}
                        </ReactMarkdown>
                      </div>
                      <Link to={`/blog-details/${blog.id}`}>
                        Read More{" "}
                        <i className="fa-solid fa-circle-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
};

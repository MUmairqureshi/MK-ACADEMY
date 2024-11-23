import React, { useEffect, useState } from "react";
import { UserLayout } from "../../Layout";
import { useParams } from "react-router";

export const BlogDetail = () => {
  const [content, setContent] = useState("");
const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://custom3.mystagingserver.site/gowri_vemuri/public/api/blog-view/${id}`
        );
        const result = await response.json();
        if (result.status) {
          setContent(result.data.description);
        }
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserLayout>
      <section className="product_detail_page mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mb-3 headingtitleBox">
                Middle and high school math classes that are fun and engaging
              </h1>
            </div>
            <div className="col-md-6">
              <div className="product_image blogImage">
                <img
                  src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/blogimages/1701359250.jpg"
                  className="img-fluid"
                  alt="Math classes"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            {/* Render the HTML content */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

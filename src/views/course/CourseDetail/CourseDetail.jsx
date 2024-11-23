import React, { useState, useEffect } from "react";
import { UserLayout } from "../../Layout";
import { getCourseDetails } from "../../../services/courseServices";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";

const CourseDetail = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log("cartItems", cartItems);
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // Function to fetch course details
    const fetchCourseDetails = async () => {
      try {
        const response = await getCourseDetails(id);
        if (response.status && response.data) {
          setCourseData(response.data);
        } else {
          console.error("Failed to fetch course details");
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, []);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        courseId: id,
        qty: 1,
        productType: 2,
      })
    );
  };

  if (!courseData) {
    return <p>Loading...</p>;
  }

  return (
    <UserLayout>
      <section className="product_detail_page">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="product_image">
                <img
                  src={`https://custom3.mystagingserver.site/gowri_vemuri/public/images/courseimage/${courseData.image}`}
                  className="img-fluid"
                  alt="Product"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="product_detail_content">
                <h1>{courseData.level}</h1>
                <p className="pricing">${courseData.fee}</p>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Overview</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CODE</td>
                      <td>{courseData.code}</td>
                    </tr>
                    <tr>
                      <td>PROGRAM</td>
                      <td>{courseData.program}</td>
                    </tr>
                    <tr>
                      <td>TOTAL HRS</td>
                      <td>{courseData.total_hours}</td>
                    </tr>
                    <tr>
                      <td>CLASS SCHEDULE</td>
                      <td>
                        {courseData.day} <br /> {courseData.time1} -{" "}
                        {courseData.time2}
                      </td>
                    </tr>
                    <tr>
                      <td>DURATION</td>
                      <td>{courseData.year}</td>
                    </tr>
                    <tr>
                      <td>FEE</td>
                      <td>${courseData.fee}</td>
                    </tr>
                    <tr>
                      <td>Slots</td>
                      <td>
                        {courseData.slots} Out of {courseData.slots}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="actionBtn d-flex justify-content">
                  <input
                    type="hidden"
                    name="qty"
                    value="1"
                    placeholder="1"
                    className="input-qty"
                  />
                  <button
                    onClick={handleAddToCart}
                    type="button"
                    disabled={courseData.slots === 0}
                    className="btnBooksBuy"
                    style={{
                      backgroundColor: courseData.slots === 0 ? "#adadad" : "",
                    }}
                  >
                    {cartItems.Loading ? "Slot Full" : "Add To Cart"}
                  </button>
                </div>
                <div className="text-center prdSuccess d-none">
                  <span className="text-center text-success">
                    Product Add to Cart Successfully
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12 py-5">
              <p>
                <span style={{ color: "rgb(102, 102, 102)", fontSize: "16px" }}>
                  {courseData.level}
                </span>
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: courseData.description }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default CourseDetail;

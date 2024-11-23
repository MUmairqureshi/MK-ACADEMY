import React, { useState, useEffect } from "react";
import { UserLayout } from "../Layout";
import "./CourseListing.css";
import ListingTable from "../../components/ListingTabel/ListingTable";
import { getCourseListing } from "../../services/courseServices";

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState("2"); // Defaulting to "Summer"

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourseListing();
        if (response.status) {
          const courseData = response.data;

          // Transforming the data into the desired format
          const transformedCourses = courseData.map((courseDetail) => ({
            id: courseDetail.id,
            name: courseDetail.course_get.course_name,
            level: courseDetail.level,
            hours: courseDetail.total_hours,
            price: courseDetail.fee,
            schedule: `${courseDetail.day} <br> ${courseDetail.time1} - ${courseDetail.time2}`,
            duration: `${courseDetail.date1} - ${courseDetail.date2}`,
            availableSlots: `${
              courseDetail.slots - courseDetail.register_user.length
            } Out of ${courseDetail.slots}`,
            detailLink: courseDetail.zoom_link,
            slot_full: courseDetail.slot_full,
          }));

          setCourses(transformedCourses);
        } else {
          console.error("Failed to fetch course listing");
        }
      } catch (error) {
        console.log("error fetching course listing", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    setActiveCourse(courseId);
  };

  return (
    <UserLayout>
      <section className="workbook_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list_group d-flex flex-column flex-md-row  ">
                <li
                  className={`courseName ${
                    activeCourse === "1" ? "active" : ""
                  }`}
                  onClick={() => handleCourseClick("1")}
                  data-id="1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Academic"
                >
                  Academic
                </li>

                <li
                  className={`courseName ${
                    activeCourse === "2" ? "active" : ""
                  }`}
                  onClick={() => handleCourseClick("2")}
                  data-id="2"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Summer"
                >
                  Summer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ListingTable courses={courses}></ListingTable>
    </UserLayout>
  );
};

export default CourseListing;

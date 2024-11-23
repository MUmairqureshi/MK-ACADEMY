import React, { useEffect, useState } from "react";
import "./index.css";
import { usePagination } from "../../hooks/usePagination"; // Adjust the import path as necessary
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "../../slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ListingTable = ({ courses }) => {
  const cartItem = useSelector((state) => state.cart);
  const { loading, message } = cartItem;
  const [msg, setmsg] = useState();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [addedItemID, setaddedItemID] = useState();
  console.log(" loading, message ", loading, message, cartItem);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const { getPageData, handlePageChange, totalPages } = usePagination(
    courses,
    itemsPerPage,
    currentPage
  );

  const { currentPageData, startIndex, endIndex } = getPageData();

  const onPageChange = (pageNumber) => {
    setCurrentPage(handlePageChange(pageNumber));
  };

  const onItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const onSort = (columnKey) => {
    let direction = "asc";
    if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc";
    } else if (
      sortConfig.key === columnKey &&
      sortConfig.direction === "desc"
    ) {
      direction = "";
    } else {
      direction = "asc";
    }
    setSortConfig({ key: columnKey, direction });
  };

  const sortedCourses = [...currentPageData].sort((a, b) => {
    if (!sortConfig.direction) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const getSortIndicator = (columnKey) => {
    if (sortConfig.key === columnKey) {
      if (sortConfig.direction === "asc") return "▲";
      if (sortConfig.direction === "desc") return "▼";
    }
    return "▲▼";
  };

  const handleAddToCart = (id) => {
    setaddedItemID(id);
    dispatch(
      addToCart({
        courseId: id,
        qty: 1,
        productType: 2,
      })
    );
  };

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      dispatch(fetchCartItems());
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

  useEffect(() => {
    if (message.status) {
      setmsg({ show: true, message: message.msg });
    } else if (!loading && !message.status) {
      setmsg({ show: true, message: message.msg });
    }
  }, [message]);

  console.log("addedItemID", cartItem);

  return (
    <section className="listingTable">
      <div className="container-fluid px-md-5">
        <div className="row">
          <div className="col-md-12">
            <div id="firstCourse"></div>
            <div id="getCoursesData" className="">
              <div className="dataTables_wrapper no-footer">
                <div className="d-flex flex-row align-items-center justify-content-between py-2">
                  <div
                    className="dataTables_length"
                    id="getCoursesDataTable_length"
                  >
                    <label className="d-flex gap-2">
                      Show
                      <select
                        name="getCoursesDataTable_length"
                        aria-controls="getCoursesDataTable"
                        className=""
                        value={itemsPerPage}
                        onChange={onItemsPerPageChange}
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries
                    </label>
                  </div>
                  <div
                    id="getCoursesDataTable_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className=""
                        placeholder=""
                        aria-controls="getCoursesDataTable"
                      />
                    </label>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    className="table table-centered textWidth dataTable no-footer"
                    id="getCoursesDataTable"
                    aria-describedby="getCoursesDataTable_info"
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className=""
                          style={{ width: "219.141px" }}
                          onClick={() => onSort("name")}
                        >
                          Course Name {getSortIndicator("name")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "59.8594px" }}
                          onClick={() => onSort("level")}
                        >
                          Course Level {getSortIndicator("level")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "59.8594px" }}
                          onClick={() => onSort("hours")}
                        >
                          Total Hours {getSortIndicator("hours")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "66.0781px" }}
                          onClick={() => onSort("price")}
                        >
                          Price {getSortIndicator("price")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "88.5156px" }}
                          onClick={() => onSort("schedule")}
                        >
                          Class Schedule {getSortIndicator("schedule")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "64.2812px" }}
                          onClick={() => onSort("duration")}
                        >
                          Duration {getSortIndicator("duration")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "68.75px" }}
                          onClick={() => onSort("availableSlots")}
                        >
                          Available Slots {getSortIndicator("availableSlots")}
                        </th>
                        <th
                          scope="col"
                          className="sorting"
                          style={{ width: "79.6875px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedCourses.map((course, index) => (
                        <tr
                          key={course.id}
                          className={index % 2 === 0 ? "even" : "odd"}
                        >
                          <td>{course.name}</td>
                          <td>{course.level}</td>
                          <td>{course.hours}</td>
                          <td>{course.price}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: course.schedule,
                            }}
                          ></td>
                          <td>{course.duration}</td>
                          <td>{course.availableSlots}</td>
                          <td>
                            {course.slot_full ? (
                              <div>
                                <a className="">Slot Full</a>
                              </div>
                            ) : (
                              <div
                                className="fullSlot"
                                onClick={() => {
                                  handleAddToCart(course.id);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  style={{ color: "#253B8D" }}
                                />
                              </div>
                            )}
                            <Link
                              to={`/courses-listing/${course.id}`}
                              className="btn btn-sm btn-primary"
                            >
                              View Detail
                            </Link>
                            <div
                              className={`text-center prdSuccess ${
                                message && addedItemID == course?.id
                                  ? ""
                                  : "d-none"
                              } success${course?.id}`}
                            >
                              <span className="text-center text-success">
                                {message?.msg}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  className="dataTables_info"
                  id="getCoursesDataTable_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing {startIndex + 1} to{" "}
                  {Math.min(endIndex, courses.length)} of {courses.length}{" "}
                  entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="getCoursesDataTable_paginate"
                >
                  <button
                    className={`paginate_button previous ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    aria-controls="getCoursesDataTable"
                    aria-disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                  <span>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNumber) => (
                        <button
                          key={pageNumber}
                          className={`paginate_button ${
                            pageNumber === currentPage ? "current" : ""
                          }`}
                          aria-controls="getCoursesDataTable"
                          aria-current={
                            pageNumber === currentPage ? "page" : undefined
                          }
                          onClick={() => onPageChange(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      )
                    )}
                  </span>
                  <button
                    className={`paginate_button next ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                    aria-controls="getCoursesDataTable"
                    aria-disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isOnline && (
        <div className="alert alert-warning">
          No internet connection. Some features may be unavailable.
        </div>
      )}
    </section>
  );
};

export default ListingTable;

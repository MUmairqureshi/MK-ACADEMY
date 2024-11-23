import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { UserLayout } from "../Layout";
import {
  getCountries,
  getStates,
  getGrades,
  getCategories,
  getBooksByFilter,
  getVideoLearningData,
} from "../../services/videoLearningServices";
import CollapsibleComponent from "../../components/CollapsibleComponent/CollapsibleComponent";
import CustomButton from "../../components/CustomButton";

const VideoLearning = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [grades, setGrades] = useState([]);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [videoLearningData, setVideoLearningData] = useState(null);
  const [showingData, setshowingData] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const fetchGrades = async () => {
      try {
        const data = await getGrades();
        setGrades(data.data);
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCountries();
    fetchGrades();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const fetchStates = async () => {
        try {
          const data = await getStates(selectedCountry);
          setStates(data.data);
        } catch (error) {
          console.error(
            `Error fetching states for country ID ${selectedCountry}:`,
            error
          );
        }
      };

      fetchStates();
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState(""); // Reset state when country changes
  };

  const handleSearch = async () => {
    if (isFormValid()) {
      const filterData = {
        country_id: selectedCountry,
        grade_id: selectedGrade,
        state_id: selectedState,
        category_id: selectedCategory,
      };

      try {
        const data = await getBooksByFilter(filterData);
        setBooks(data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  };

  const isFormValid = () => {
    return (
      selectedCountry && selectedState && selectedGrade && selectedCategory
    );
  };

  const videoLearningSearch = async () => {
    const reqData = {
      country_id: selectedCountry,
      grade_id: selectedGrade,
      state_id: selectedState,
      category_id: selectedCategory,
      book_id: selectedBook,
    };
    try {
      document.querySelector(".loaderBox").classList.remove("d-none");
      const response = await getVideoLearningData(reqData);
      setVideoLearningData(response);
      console.log("response", response);
    } catch (error) {
      document.querySelector(".loaderBox").classList.add("d-none");

      console.log("error fetching getVideoLearningData", error);
    } finally {
      document.querySelector(".loaderBox").classList.add("d-none");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [selectedCategory]);

  const toggleChapter = (chapterId) => {
    setOpenChapters((prevState) => ({
      ...prevState,
      [chapterId]: !prevState[chapterId],
    }));
  };

  return (
    <UserLayout>
      <section className="gradelevel_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="heading">Choose your Grade Level to Subscribe</h1>
            </div>
            <div className="col-md-12 py-5">
              <form id="mysearchForm">
                <div className="row select_optins_tab">
                  <div className="col-xl-2 col-md-4 mb-3">
                    <select
                      onChange={handleCountryChange}
                      className="form-control"
                      id="countries"
                      name="country"
                      value={selectedCountry}
                    >
                      <option value="">Select Country</option>
                      {countries?.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-xl-2 col-md-4 mb-3">
                    <select
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="form-control"
                      id="states"
                      name="state"
                      value={selectedState}
                      disabled={!selectedCountry}
                    >
                      <option value="">Select State</option>
                      {states?.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-xl-2 col-md-4 mb-3">
                    <select
                      onChange={(e) => setSelectedGrade(e.target.value)}
                      className="form-control"
                      id="grades"
                      name="grade"
                      value={selectedGrade}
                    >
                      <option value="">Select Grade</option>
                      {grades?.map((grade) => (
                        <option key={grade.id} value={grade.id}>
                          {grade.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-xl-2 col-md-4 mb-3">
                    <select
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="form-control"
                      id="category"
                      name="topic"
                      value={selectedCategory}
                    >
                      <option>Select Topic</option>
                      {categories?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-xl-2 col-md-4 mb-3">
                    <select
                      name="book_id"
                      id="book"
                      className="form-control select2-hidden-accessible"
                      data-select2-id="select2-data-book"
                      tabIndex="-1"
                      aria-hidden="true"
                      value={selectedBook}
                      onChange={(e) => setSelectedBook(e.target.value)}
                    >
                      <option value="">Select Books</option>
                      {books?.map((book) => (
                        <option key={book.id} value={book.id}>
                          {book.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-xl-2 col-md-4 mb-3">
                    <CustomButton
                      disabled={!isFormValid()}
                      onClick={videoLearningSearch}
                      text="Search"
                      className="text-warning h-50 d-flex justify-content-center align-items-center w-100  py-3"
                      icon={faMagnifyingGlass}
                      variant="primaryButton"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-12">
              <div className="grade_level_tabs">
                <div className="tabs_content_inner">
                  <div>
                    <div className="row">
                      <div className="col-md-4">
                        {videoLearningData && (
                          <div className="row">
                            {videoLearningData.chapters.map((chapter) => (
                              <CollapsibleComponent
                                key={chapter.id}
                                item={chapter}
                                type="chapter"
                                setshowingData={setshowingData}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <div>
                          {showingData?.file_link ? (
                            <a
                              id="editSubTopicViewFile"
                              target="_blank"
                              href="https://custom3.mystagingserver.site/gowri_vemuri/public/images/unitcontent/pdf/FILE_0_Delivery.docx"
                              className="btn btn-dark w-100 mt-3"
                              // style="display: block;"
                            >
                              View File
                            </a>
                          ) : (
                            <iframe
                              id="editYoutubeLinkSrc"
                              width="100%"
                              height="345"
                              src={showingData?.youtube_link}
                              // style="display: none;"
                            ></iframe>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        {videoLearningData?.book?.title && (
                          <div className="d-flex justify-content-center book-container mt-3">
                            <div
                              bis_skin_checked="1"
                              className="bookImage "
                              // style="padding: 10px; border: 3px solid white; border-radius: 10px;"
                            >
                              <div
                                bis_skin_checked="1"
                                className="bookTitle px-3"
                              >
                                <h3
                                  className="text-center text-white"
                                  // style="color: white; text-align: center;"
                                >
                                  {videoLearningData?.book?.title}
                                </h3>
                              </div>{" "}
                              <div bis_skin_checked="1" className="bookCover">
                                <img
                                  src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg"
                                  className="mw-100"
                                />
                              </div>{" "}
                              <div>
                                <div className="subscribe_btn text-center m-3">
                                  <a
                                    href=""
                                    className="bg-white font-weight-bold p-2 text-dark"
                                  >
                                    Subscribed{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div id="videoPlayer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default VideoLearning;

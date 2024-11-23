import React, { useEffect, useState } from "react";
import { UserLayout } from "../Layout";
import { Col, Container, Row, Form } from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import BookContainer from "./BookContainer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  fetchBooks,
  getCountries,
  getCountryStates,
  getFIlterBooks,
  getGrades,
} from "../../services/bookService";
import { addToCart } from "../../slices/cartSlice";
import CustomPagination from "../../components/Pagination";
import { useDispatch } from "react-redux";
import "./index.css";

const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [addedItemId, setAddedItemId] = useState();

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      document.querySelector(".loaderBox").classList.remove("d-none");
      try {
        const [booksResp, countriesResp, gradesResp] = await Promise.all([
          fetchBooks(),
          getCountries(),
          getGrades(),
        ]);
        setBooks(booksResp.data || []);
        setCountries(countriesResp.data || []);
        setGrades(gradesResp.data);
        document.querySelector(".loaderBox").classList.add("d-none");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        try {
          const country = countries.find((c) => c.id == selectedCountry);
          const statesResp = await getCountryStates(country.id);
          setStates(statesResp.data || []);
        } catch (error) {
          setError(error.message);
        }
      }
    };
    fetchStates();
  }, [selectedCountry]);

  const handlePageChange = (pageNumber) => {
    setFade(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setFade(false);
    }, 300);
  };

  const handleCountryChange = (event) => {
    console.log("event.target.value", event.target.value);
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = books.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = (book) => {
    setAddedItemId(book.id);
    dispatch(
      addToCart({
        bookId: book.id,
        qty: 1,
        productType: 1,
      })
    );
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 1000);
  };

  const handleFilterSearch = async () => {
    const filter = {
      country_id: selectedCountry,
      grade_id: selectedGrade,
      state_id: selectedState,
    };
    console.log("filter", filter);

    try {
      document.querySelector(".loaderBox").classList.remove("d-none");
      const resp = await getFIlterBooks(filter);
      setBooks(resp.data);
      console.log("respresp", resp);
    } catch (error) {
      document.querySelector(".loaderBox").classList.add("d-none");
      console.log("errorrrr");
    } finally {
      document.querySelector(".loaderBox").classList.add("d-none");
    }
  };
  return (
    <UserLayout>
      <Container>
        <Row className="dropDown_container">
          <Col xs={12} lg={3}>
            <Form.Select onChange={handleCountryChange} value={selectedCountry}>
              <option value="" disabled>
                Select Country
              </option>
              {countries?.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} lg={3}>
            <Form.Select onChange={handleStateChange} value={selectedState}>
              <option value="" disabled>
                Select State
              </option>
              {states?.map((state, index) => (
                <option key={index} value={state.id}>
                  {state.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} lg={3}>
            <Form.Select onChange={handleGradeChange} value={selectedGrade}>
              <option value="" disabled>
                Select Grade
              </option>
              {grades?.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} lg={3}>
            <CustomButton
              onClick={() => handleFilterSearch()}
              text="Search"
              className="text-warning h-50 d-flex justify-content-center align-items-center w-100  py-3"
              icon={faMagnifyingGlass}
              variant="primaryButton"
            />
          </Col>
        </Row>

        <Row className="my-5">
          <div className="row d-md-flex d-none text-center">
            <div className="col-md-3 mb-5">
              <div className="p-2 rounded-pill shadow titleBox">
                <h3>Book</h3>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="p-2 rounded-pill shadow titleBox">
                <h3>Book Description</h3>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="p-2 rounded-pill shadow titleBox">
                <h3>Action</h3>
              </div>
            </div>
          </div>
        </Row>

        <Row className={`my-5 book-list ${fade ? "fade-out" : "fade-in"}`}>
          {currentBooks.length > 0 ? (
            currentBooks?.map((book, index) => (
              <div key={index}>
                <BookContainer
                  item={book}
                  green={index % 2 === 0}
                  onClick={() => handleBookClick(book.id)}
                  addToCart={() => handleAddToCart(book)}
                  successMessage={successMessage}
                  addedItemId={addedItemId}
                />
              </div>
            ))
          ) : (
            <h4 className="text-center">"No Book Found"</h4>
          )}
        </Row>

        {currentBooks?.length > 0 && (
          <Row className="my-3">
            <Col xs={12}>
              <CustomPagination
                totalPages={Math.ceil(books.length / itemsPerPage)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Col>
          </Row>
        )}
      </Container>
    </UserLayout>
  );
};

export default Books;

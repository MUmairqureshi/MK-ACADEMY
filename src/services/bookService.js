import axiosInstance from "./api";

export const fetchBooks = async () => {
  try {
    const response = await axiosInstance.get("/book_listing");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    // throw error;
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await axiosInstance.get(`/book_view/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
    // throw error;
  }
};

export const getCountries = async () => {
  try {
    const response = await axiosInstance.get(`/get-countries`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching countries`, error);
  }
};

export const getCountryStates = async (country_id) => {
  try {
    const response = await axiosInstance.get(`/get-states/${country_id}`);
    return response.data;
  } catch (error) {
    console.log("error fetching states");
  }
};

export const getGrades = async () => {
  try {
    const response = await axiosInstance.get(`/get-grades`);
    return response.data;
  } catch (error) {
    console.log("error fetching states");
  }
};

export const getFIlterBooks = async (reqData) => {
  try {
    const resp = await axiosInstance.post("/get-book-by-filter", reqData);
    return resp.data;
  } catch (error) {
    console.log("error", error);
  }
};

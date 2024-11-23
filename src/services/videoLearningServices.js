import axiosInstance from "./api";

export const getCountries = async () => {
  try {
    const response = await axiosInstance.get("/get-countries");
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const getStates = async (countryId) => {
  try {
    const response = await axiosInstance.get(`/get-states/${countryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching states for country ID ${countryId}:`, error);
    throw error;
  }
};

export const getGrades = async () => {
  try {
    const response = await axiosInstance.get("/get-grades");
    return response.data;
  } catch (error) {
    console.error("Error fetching grades:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/get-categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getBooksByFilter = async (filterData) => {
  try {
    const response = await axiosInstance.post(
      "/get-book-by-filter",
      filterData
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books by filter:", error);
    throw error;
  }
};

export const getVideoLearningData = async (reqData) => {
  console.log('reqData',reqData);
  try {
    const response = await axiosInstance.post(
      "/video-learning-get-data-user",
      reqData
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books by filter:", error);
    throw error;
  }
};

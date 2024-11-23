import axiosInstance from "./api";

export const getCourseListing = async () => {
  try {
    const response = await axiosInstance.get(`/course-listing`);
    return response.data;
  } catch (error) {
    console.log("error fetching course listing", error);
  }
};

export const getCourseDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/course-detail/${id}`);
    return response.data;
  } catch (error) {
    console.log("error fetching course details", error);
  }
};

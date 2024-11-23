import axiosInstance from "./api";

export const addToCart = async (reqData) => {
  try {
    const response = await axiosInstance.post(`/add-to-cart-item`, reqData);
    return response.data;
  } catch (error) {
    console.log("error fetching course listing", error);
  }
};



export const updateCart = async (reqData) => {
  try {
    const response = await axiosInstance.post(`/update-cart-items`, reqData);
    return response.data;
  } catch (error) {
    console.log("error fetching course listing", error);
  }
};

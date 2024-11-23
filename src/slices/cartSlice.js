import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/api";

// Async thunk to fetch cart items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/cart-item-listing`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to add item to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (reqData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post(`/add-to-cart-item`, reqData);
      dispatch(fetchCartItems()); // Re-fetch cart items after adding a new item
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to remove item from cart and database
export const removeItemFromCartAndDatabase = createAsyncThunk(
  "cart/removeItemFromCartAndDatabase",
  async (itemId, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.get(`/cart-item-remove/${itemId}`);
      dispatch(fetchCartItems()); // Re-fetch cart items after successful deletion
      return itemId; // Return itemId on success to remove from Redux state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCartItems = createAsyncThunk(
  "cart/updateCartItems",
  async (updatedItems, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      updatedItems.forEach((item, index) => {
        formData.append(`data[${index}][productID]`, item.productID);
        formData.append(`data[${index}][qty]`, item.qty);
      });
      const response = await axiosInstance.post(`/update-cart-items`, formData);
      dispatch(fetchCartItems());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // This should be an array directly
    loading: false,
    error: null,
    message: false,
  },
  reducers: {
    increaseQuantity(state, action) {
      const item = state.items.data.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.qty += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.data.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload; // Update cart items with fetched data
        state.loading = false;
        state.error = null;
        state.message = false;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.items = [];
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const newItem = action.payload.data;
        const existingItem = state.items.data.find(
          (item) => item.id === newItem.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.data.push({ ...newItem, quantity: 1 });
        }
        console.log('newItem....',newItem);
        state.loading = false;
        state.error = null;
        state.message = newItem;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data;
      })
      .addCase(removeItemFromCartAndDatabase.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemFromCartAndDatabase.fulfilled, (state, action) => {
        const itemIdToRemove = action.payload;
        state.items = state.items.data.filter(
          (item) => item.id !== itemIdToRemove
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(removeItemFromCartAndDatabase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.items = action.payload; // Update cart items with response data
        state.loading = false;
        state.error = null;
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

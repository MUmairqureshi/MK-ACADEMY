import { combineReducers } from '@reduxjs/toolkit';
// import bookReducer from './bookSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
//   books: bookReducer,
  cart: cartReducer,
});

export default rootReducer;

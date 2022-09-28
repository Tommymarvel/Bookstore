import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import statusCheckerReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  categories: statusCheckerReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

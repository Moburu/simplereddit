import { configureStore } from '@reduxjs/toolkit';
import searchDataReducer from '../features/SearchData/searchDataSlice';
import redditDataReducer from '../features/RedditData/redditDataSlice';

export const store = configureStore({
  reducer: {
    searchData: searchDataReducer,
    redditData: redditDataReducer
  }
});

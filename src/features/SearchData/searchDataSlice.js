import { createSlice } from '@reduxjs/toolkit';

export const searchDataSlice = createSlice({
    name: 'searchData',
    initialState: {
        subreddit: '',
        searchTerm: '',
        sortBy: 'hot'
    },
    reducers: {
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
        },
        clearSubreddit: (state, action) => {
            state.subreddit = '';
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state, action) => {
            state.searchTerm = '';
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    }
})

export const selectSubreddit = (state) => state.searchData.subreddit;
export const selectSearchTerm = (state) => state.searchData.searchTerm;
export const selectSortBy = (state) => state.searchData.sortBy;

export const {
    setSubreddit,
    clearSubreddit,
    setSearchTerm,
    clearSearchTerm,
    setSortBy
} = searchDataSlice.actions;

export default searchDataSlice.reducer;

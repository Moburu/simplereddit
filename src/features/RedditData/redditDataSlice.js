import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectSearchTerm, selectSubreddit, selectSortBy } from '../SearchData/searchDataSlice';

const initialSliceState = {
    posts: [
        {
            data: {
                title: 'Lorem Ipsum',
                thumbnail: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
                score: 1,
                author: 'John Doe',
                created: 1200000,
                num_comments: 47,
                url: 'idk.com'
            }},
        {
            data: {
                title: 'Lorem Ipsum',
                thumbnail: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
                score: 1,
                author: 'John Doe',
                created: 1200000,
                num_comments: 47,
                url: 'idk.com'
        }},
        {
            data: {
                title: 'Lorem Ipsum',
                thumbnail: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
                score: 1,
                author: 'John Doe',
                created: 1200000,
                num_comments: 47,
                url: 'idk.com'
        }}
    ],
    isLoading: false,
    hasError: false
}

export const loadPosts = createAsyncThunk(
    'redditData/loadPosts',
    async ({ sortBy, searchTerm }, thunkAPI) => {
        const url = `https://cors-anywhere.herokuapp.com/reddit.com/search.json?q=${searchTerm}&sort=${sortBy}`;
        console.log(url);
        const json = await fetch(url)
            .then(res => res.json())
            .catch(error => {
                console.error('Error: ', error)
            });
        return json['data']['children'];
    }
)

export const redditDataSlice = createSlice({
    name: 'redditData',
    initialState: initialSliceState,
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]:(state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectPosts = (state) => state.redditData.posts;

export default redditDataSlice.reducer;

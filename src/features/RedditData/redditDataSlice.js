import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialSliceState = {
    posts: [],
    isLoading: false,
    hasError: false
}

export const loadPopular = createAsyncThunk(
    'redditData/loadPopular',
    async (args, thunkAPI) => {
        const url = `https://api.reddit.com/r/popular.json?limit=100`;
        const json = await fetch(url)
            .then(res => res.json())
            .catch(error => {
                console.error('Error: ', error)
            });
        return json['data']['children'];
    }
)

export const loadPosts = createAsyncThunk(
    'redditData/loadPosts',
    async ({ sortBy, searchTerm }, thunkAPI) => {
        const url = `https://api.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}`;
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
        },
        [loadPopular.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPopular.fulfilled]:(state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPopular.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectPosts = (state) => state.redditData.posts;
export const selectIsLoading = (state) => state.redditData.isLoading;
export const selectHasError = (state) => state.redditData.hasError;

export default redditDataSlice.reducer;

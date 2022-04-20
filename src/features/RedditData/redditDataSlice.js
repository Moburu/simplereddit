import { createSlice } from '@reduxjs/toolkit';
import placeholder from './placeholder.png';

const initialSliceState = [
    {
        title: 'Lorem Ipsum',
        thumbnail: placeholder,
        score: 1,
        author: 'John Doe',
        created: 1200000,
        num_comments: 47,
        url: 'idk.com'
    },
    {
        title: 'Lorem Ipsum',
        thumbnail: placeholder,
        score: 1,
        author: 'John Doe',
        created: 1200000,
        num_comments: 47,
        url: 'idk.com'
    },
    {
        title: 'Lorem Ipsum',
        thumbnail: placeholder,
        score: 1,
        author: 'John Doe',
        created: 1200000,
        num_comments: 47,
        url: 'idk.com'
    }
]

export const redditDataSlice = createSlice({
    name: 'redditData',
    initialState: {
        posts: initialSliceState
        },
    reducers: {}
})

export const selectPosts = (state) => state.redditData.posts;

// export const {
//     fetchData
// } = redditDataSlice.actions;

export default redditDataSlice.reducer;

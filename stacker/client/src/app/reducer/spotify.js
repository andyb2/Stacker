import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const spotifySlice = createSlice({
    name: 'spotify',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        },
        getFollowing: (state, action) => {
            state.following = action.payload
        },
        getFollowers: (state, action) => {
            state.follower = action.payload
        }
    }
});

export const { actions } = spotifySlice;
export const { getUser, getFollowing, getFollowers } = actions;
export default spotifySlice.reducer;
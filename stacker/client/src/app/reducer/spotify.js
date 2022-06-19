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
            state.following = action.payload;
        },
        getFollowers: (state, action) => {
            state.follower = action.payload;
        },
        getRecent: (state, action) => {
            state.recent = action.payload;
        },
        getTopArtist: (state, action) => {
            state.topArtist = action.payload;
        },
        getTopSongs: (state, action) => {
            state.topSongs = action.payload;
        },
        getPlaylist: (state, action) => {
            state.playlists = action.payload;
        },
        // setLocalStorageObject: (state, action) => {
        //     console.log(action.payload)
        //     // localStorage.setItem('spotify_data', JSON.stringify(action.payload));
        //     state.data = action.payload;
        //     // const spotifyData = {}

        //     // for (const items in state.spotify) {
        //     //     spotifyData[items] = state.spotify[items]
        //     // }
        //     // localStorage.setItem('spotify_data', JSON.stringify(spotifyData));
        // }
    }
});

export const { actions } = spotifySlice;
export const { getUser, getFollowing, getFollowers, getRecent, getTopArtist, getTopSongs, getPlaylist, setLocalStorageObject } = actions;
export default spotifySlice.reducer;
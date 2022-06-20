import { createSlice } from "@reduxjs/toolkit";

// const initialState = {}

export const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {},
    reducers: {
        setSpotifyData: (state, action) => {
            for (const items in action.payload) {
                state[`${items}`] = action.payload[items]
            }
        },
    }
});

export const { actions } = spotifySlice;
export const { setSpotifyData } = actions;
export default spotifySlice.reducer;
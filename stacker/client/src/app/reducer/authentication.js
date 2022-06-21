const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            const tokenTimestamp = Date.now()
            const access_token = action.payload.access_token
            let refresh_token = action.payload.refresh_token;
            if (!refresh_token) {
                const spotifyToken = JSON.parse(localStorage.getItem('spotify_token'))
                refresh_token = spotifyToken.refresh_token
            }
            localStorage.setItem('spotify_token', JSON.stringify({access_token, refresh_token, timeStamp: tokenTimestamp}));
        },
        isAuth: (state, action) => {
            const token = localStorage.getItem('spotify_token');
            token ? state.active = true : state.active = false;
        },
        logout: (state, action) => {
            localStorage.removeItem('spotify_token');
            localStorage.removeItem('spotify_data');
            state.active = false;
        }
    }
});

export const { actions } = tokenSlice;
export const { setToken, logout, isAuth } = actions;
export default tokenSlice.reducer;
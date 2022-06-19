const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            // const tokenTimestamp = Date.now()
            // const access = {
            //     timeStamp: tokenTimestamp,
            //     token: action.payload
            // }
            // localStorage.setItem('spotify_token', JSON.stringify(access));
            localStorage.setItem('spotify_token', JSON.stringify(action.payload));
            state.active = true
        },
        isAuth: (state, action) => {
            const token = localStorage.getItem('spotify_token');
            token ? state.active = true : state.active = false;
        },
        logout: (state, action) => {
            localStorage.removeItem('spotify_token');
            state.active = false;
        },
    }
});

// export const { setToken } = tokenStorage.action
export const { actions } = tokenSlice;
export const { setToken, logout, isAuth } = actions;
export default tokenSlice.reducer;
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: ( state, action ) => {
            localStorage.setItem('spotify_token', action.payload);
            state.active = true
        },
        logout: ( state, action ) => {
            localStorage.removeItem('spotify_token');
            state.active = false
        }
    }
});

// export const { setToken } = tokenStorage.action
export const { actions } = tokenSlice;
export const { setToken, logout } = actions;
export default tokenSlice.reducer;
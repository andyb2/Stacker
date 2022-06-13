import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dimensionSlice = createSlice({
    name: 'dimensions',
    initialState,
    reducers: {
        setDimension: (state, action) => {
            state.dimension = action.payload
        }
    }
});

export const { actions } = dimensionSlice;
export const { setDimension } = actions;
export default dimensionSlice.reducer;
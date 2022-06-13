import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './reducer/authentication';
import spotifySlice from './reducer/spotify';
import dimensionSlice from './reducer/viewport';

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    spotify: spotifySlice,
    dimension: dimensionSlice
  }
});


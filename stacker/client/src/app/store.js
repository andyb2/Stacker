import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './reducer/authentication';
import spotifySlice from './reducer/spotify';

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    spotify: spotifySlice,
  }
});


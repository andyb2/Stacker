import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './reducer/authentication';
// import thunk from 'redux-thunk';
// import thunk from 'redux-thunk';
// import authentication from './reducer/authentication';

export const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
  // middleware: [thunk]
});


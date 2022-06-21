import React, { useEffect } from 'react';
import Home from './pages/Home.jsx';
import './App.css';
import { setToken, isAuth } from './app/reducer/authentication';
import { checkToken } from './utils';
import SignInPage from './components/SignInPage';
import { getParam } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { refreshToken } from './app/thunk';

const App = () => {
  const auth = useSelector((state) => state.token.active);
  const dispatch = useDispatch();

  const setTokenAccess = () => {
    const params = getParam();
    if (params.access_token) {
      dispatch(setToken(params));
    }
  }

  useEffect(() => {
    const checkLocalStorageForToken = () => {
      const checkTokenTimer = checkToken();
      if (checkTokenTimer.refresh_token) dispatch(refreshToken(checkTokenTimer.refresh_token));
      dispatch(isAuth());
    }
    checkLocalStorageForToken();
    if (!auth) {
      setTokenAccess();
    }
  }, [])

  return (
    <div className="App">
      {
        (auth &&
          <Router>
            <Home />
          </ Router>) || <SignInPage />
      }
    </div>
  );
}

export default App;

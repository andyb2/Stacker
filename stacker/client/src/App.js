import React, { useEffect } from 'react';
import Home from './pages/Home.jsx';
import './App.css';
import { setToken, isAuth } from './app/reducer/authentication';
import SignInPage from './components/SignInPage';
import { getParam } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const auth = useSelector((state) => state.token.active);
  console.log(auth)
  const dispatch = useDispatch();

  const setTokenAccess = () => {
    const params = getParam();

    if (params.access_token) {
      dispatch(setToken(params));
    }
  }

  useEffect(() => {
    const checkLocalStorageForToken = () => {
      dispatch(isAuth())
    }
    checkLocalStorageForToken();
    if (!auth) {
      console.log(`hit`)
      setTokenAccess();

    }
  }, [])

  // const confirmAuth = () => {
  //   const { access_token } = JSON.parse(localStorage.getItem('spotify_token'));
  //   const params = getParam();
  //   console.log(params)
  //   if (access_token === params.access_token) {
  //     dispatch(isAuth(true));
  //   }
  // }

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

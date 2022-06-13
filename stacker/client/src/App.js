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
  const dispatch = useDispatch();

  const setTokenAccess = () => {
    const params = getParam();
    if (params.access_token) {
      dispatch(setToken(params));
    }
  }

  useEffect(() => {
    // const checkForTokenAccess = () => {
    //   dispatch(isAuth());
    // }
    // checkForTokenAccess();
    // if (!auth) {
    setTokenAccess();
    // } else {
    //   setTokenAccess();
    // }
  }, [])

  return (
    <div className="App">
      {
        (auth &&
          <Router>
            <Home auth={auth} />
          </ Router>) || <SignInPage />
      }
    </div>
  );
}

export default App;

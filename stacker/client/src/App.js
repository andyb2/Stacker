import React, { useEffect } from 'react';
import Home from './pages/Home.jsx'
import { setToken } from './app/reducer/authentication';
import SignInPage from './components/SignInPage';
import { getParam } from './utils';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const auth = useSelector((state) => state.token.active);
  const dispatch = useDispatch();
  
  const setTokenAccess = () => {
    const params = getParam();
    if (params.access_token) {
      dispatch(setToken(params));
    } 
  }

  useEffect(()=> {
    setTokenAccess();
  }, [])

  return (
    <div className="App">
      { ( auth && <Home /> ) || <SignInPage /> }
    </div>
  );
}

export default App;

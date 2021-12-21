import React, { useState, useEffect } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Auth = ({ setIsLoggedIn }) => {
  const [isShowTime, setIsShowTime] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowTime(true);
    }, 500);
  }, []);

  const changeMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className='AuthWrapper'>
      <div className={`Auth ${isShowTime ? 'show' : ''}`}>
        {isSignIn ? (
          <SignIn changeMode={changeMode} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUp changeMode={changeMode} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
};

export default Auth;

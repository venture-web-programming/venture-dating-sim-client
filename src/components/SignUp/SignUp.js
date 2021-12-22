import React, { useState } from 'react';
import { login, signup } from '../../api/auth';
import { useHistory } from 'react-router-dom';

const SignUp = ({ changeMode, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const changeUsername = (value) => {
    setUsername(value);
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const changeName = (value) => {
    setName(value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
      name,
    };

    try {
      const signupRes = await signup(userInfo);
      if (!signupRes.error) {
        const res = await login(userInfo);
        setIsLoggedIn(true);
        localStorage.removeItem('accessToken');
        localStorage.setItem('accessToken', res.accessToken);
        history.push('/retry');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='SignUp'>
      <h1 className='SignUp__header'>Sign Up</h1>
      <form onSubmit={submitForm}>
        <div className='SignUp__inputBox'>
          <label className='SignUp__label' htmlFor='SignUp__input--username'>
            ID
          </label>
          <input
            id='SignUp__input--username'
            className='SignUp__input'
            type='text'
            placeholder='ventureZZang'
            onChange={(e) => changeUsername(e.target.value)}
          />
        </div>
        <div className='SignUp__inputBox'>
          <label className='SignUp__label' htmlFor='SignUp__input--password'>
            Password
          </label>
          <input
            id='SignUp__input--password'
            className='SignUp__input'
            type='password'
            placeholder='••••••••'
            onChange={(e) => changePassword(e.target.value)}
          />
        </div>
        <div className='SignUp__inputBox'>
          <label className='SignUp__label' htmlFor='SignUp__input--name'>
            Name
          </label>
          <input
            id='SignUp__input--name'
            className='SignUp__input'
            type='name'
            placeholder='JinZZang'
            onChange={(e) => changeName(e.target.value)}
          />
        </div>
        <button className='SignUp__btn' type='submit'>
          Submit
        </button>
      </form>
      <div className='SignUp__another'>
        <span className='SignUp__already'>Already have an account?</span>
        <button className='SignUp__signInBtn' onClick={changeMode}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;

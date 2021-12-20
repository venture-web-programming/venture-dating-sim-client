import React, { useState } from 'react';
import { login } from '../../api/auth';

const SignIn = ({ changeMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (value) => {
    setUsername(value);
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
    };

    try {
      const res = await login(userInfo);
    } catch (err) {}
  };

  return (
    <div>
      <h1 className='SignIn__header'>Sign In</h1>
      <form onSubmit={submitForm}>
        <div className='SignIn__inputBox'>
          <label className='SignIn__label' htmlFor='SignIn__input--username'>
            ID
          </label>
          <input
            id='SignIn__input--username'
            className='SignIn__input'
            type='text'
            placeholder='venture@snu.ac.kr'
            onChange={(e) => changeUsername(e.target.value)}
          />
        </div>
        <div className='SignIn__inputBox'>
          <label className='SignIn__label' htmlFor='SignIn__input--password'>
            Password
          </label>
          <input
            id='SignIn__input--password'
            className='SignIn__input'
            type='password'
            placeholder='••••••'
            onChange={(e) => changePassword(e.target.value)}
          />
        </div>
        <button className='SignIn__btn' type='submit'>
          Submit
        </button>
      </form>
      <div className='Auth__another'>
        <span className='Auth__already'>Don't have an account?</span>
        <button className='Auth__signInBtn' onClick={changeMode}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;

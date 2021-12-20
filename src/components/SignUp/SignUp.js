import React, { useState } from 'react';
import { signup } from '../../api/auth';

const SignUp = ({ changeMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
      const res = await signup(userInfo);
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
            placeholder='venture@snu.ac.kr'
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
            placeholder='••••••'
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
            placeholder='jin'
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

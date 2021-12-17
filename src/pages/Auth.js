import React, { useState, useEffect } from 'react';
import { signup } from '../api/auth';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isShowTime, setIsShowTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowTime(true);
    }, 500);
  }, []);

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
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='AuthWrapper'>
      <div className={`Auth ${isShowTime ? 'show' : ''}`}>
        <h1 className='Auth__header'>Welcome</h1>
        <form onSubmit={submitForm}>
          <div className='Auth__inputBox'>
            <label className='Auth__label' htmlFor='Auth__input--username'>
              Username
            </label>
            <input
              id='Auth__input--username'
              className='Auth__input'
              type='text'
              placeholder='venture@snu.ac.kr'
              onChange={(e) => changeUsername(e.target.value)}
            />
          </div>
          <div className='Auth__inputBox'>
            <label className='Auth__label' htmlFor='Auth__input--password'>
              Password
            </label>
            <input
              id='Auth__input--password'
              className='Auth__input'
              type='password'
              placeholder='••••••'
              onChange={(e) => changePassword(e.target.value)}
            />
          </div>
          <div className='Auth__inputBox'>
            <label className='Auth__label' htmlFor='Auth__input--name'>
              Name
            </label>
            <input
              id='Auth__input--name'
              className='Auth__input'
              type='name'
              placeholder='jin'
              onChange={(e) => changeName(e.target.value)}
            />
          </div>
          <button className='Auth__btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

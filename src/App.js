import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import './styles/index.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />}></Route>
      <Route path='/challenge'></Route>
      <Route path='/end'></Route>
    </Routes>
  );
};

export default App;

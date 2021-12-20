import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Retry from './pages/Retry';

import './styles/index.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />}></Route>
      <Route path='/challenge'></Route>
      <Route path='/end'></Route>
      <Route path='/retry' element={<Retry />}></Route>
    </Routes>
  );
};

export default App;

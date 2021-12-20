import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Retry from './pages/Retry';
import Play from './pages/Play';

import './styles/index.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />}></Route>
      <Route path='/retry' element={<Retry />}></Route>
      <Route path='/play' element={<Play />}></Route>
      <Route path='/end'></Route>
    </Routes>
  );
};

export default App;

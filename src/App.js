import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Retry from './pages/Retry';
import Game from './pages/Game';

import './styles/index.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />}></Route>
      <Route path='/challenge'></Route>
      <Route path='/end'></Route>
      <Route path='/retry' element={<Retry />}></Route>
      <Route path='/game' element={<Game />}></Route>
    </Routes>
  );
};

export default App;

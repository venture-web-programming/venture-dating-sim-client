import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import Retry from './pages/Retry';
import Play from './pages/Play';

import './styles/index.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Auth}></Route>
      <Route exact path='/retry' component={Retry}></Route>
      <Route exact path='/play' component={Play}></Route>
      <Route exact path='/end'></Route>
    </Switch>
  );
};

export default App;

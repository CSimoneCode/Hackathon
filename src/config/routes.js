import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export default (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/login' component={ LoginPage } />
    <Route path='/register' component={ RegisterPage } />
  </Switch>
)
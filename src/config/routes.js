import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DemoShowPage from '../pages/DemoShowPage';

export default (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/login' component={ LoginPage } />
    <Route path='/register' component={ RegisterPage } />
    <Route path='/event/5fbc7e97c5ee320affd5b4be' component={ DemoShowPage } />
  </Switch>
)

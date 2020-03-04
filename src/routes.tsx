import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Game } from './Game';

// doing it this way allows for code-splitting based on route (hopefully)

export const routes = (
  <Switch>
    <Route path='/' component={Game} />
  </Switch>
);

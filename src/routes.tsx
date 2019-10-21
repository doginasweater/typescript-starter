import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// doing it this way allows for code-splitting based on route (hopefully)
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export const routes = (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/' component={Home} />
    </Switch>
  </Suspense>
);
import React from 'react';
import { Route, Router } from 'react-router';
import { createHistory } from 'history';

import Thing from './components/Thing'

const history = createHistory();

const AnotherRoute = () => <div>is mobile</div>
const SomeRoute = () => <div>is not mobile</div>

const getRoutes = (isMobile) => (
  <Router history={history}>
    <Route path="/" component={Thing} />
    <Route
      path="/another_route"
      component={isMobile ? AnotherRoute : SomeRoute}
    />
  </Router>
)

export { getRoutes, history };

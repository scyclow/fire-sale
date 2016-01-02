import React from 'react';
import { Route, Router } from 'react-router';
import { createHistory } from 'history';

import mobilize from './containers/MobilizeComponent';
import Thing from './components/Thing';

const history = createHistory();

const AnotherRoute = () => <div>is mobile</div>
const SomeRoute = () => <div>is not mobile</div>

const MobilizedComponent = mobilize({
  desktop: SomeRoute,
  mobile: AnotherRoute
})

const routes = (
  <Router history={history}>
    <Route path="/" component={Thing} />
    <Route
      path="/another_route"
      component={MobilizedComponent}
    />
  </Router>
)

export { routes, history };

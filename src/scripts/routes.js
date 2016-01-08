import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { createHistory } from 'history';

import mobilize from './utils/MobilizeComponent';

import App from './containers/App';
import Summary from './containers/Summary';
import ItemNav from './containers/ItemNav';
import ItemPage from './containers/ItemPage';

const FuckOff = () => <div>Fuck off. This aint no route</div>

const history = createHistory();

const MobilizedComponent = mobilize({
  desktop: Summary,
  mobile: ItemNav
});

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MobilizedComponent} />
      <Route path="summary" component={Summary} />
      <Route path="items/:id" component={ItemPage} />
      <Route path="*" component={FuckOff} />
    </Route>
  </Router>
)

export { routes, history };

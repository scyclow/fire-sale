import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { createHistory } from 'history';

import mobilize from './utils/MobilizeComponent';

import App from './containers/App';
import ItemNav from './containers/ItemNav';
import ItemSummary from './containers/ItemSummary';

const Summary = () => <div>summary</div>
const Bleh = () => <div>ya f'ed up, son</div>

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
      <Route path="items/:id" component={ItemSummary} />
      <Route path="*" component={ItemSummary} />
    </Route>
  </Router>
)

export { routes, history };

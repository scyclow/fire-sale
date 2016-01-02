import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { createHistory } from 'history';

import mobilize from './utils/MobilizeComponent';
import ItemNav from './containers/ItemNav';
import App from './containers/App';

const Item = ({ params }) => <div>item {params.id}</div>
const Summary = () => <div>summary</div>

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
      <Route path="items/:id" component={Item} />
    </Route>
  </Router>
)

export { routes, history };

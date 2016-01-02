import React from 'react';
import { Route, Router } from 'react-router';
import { createHistory } from 'history';

import mobilize from './utils/MobilizeComponent';
import ItemNav from './containers/ItemNav';

const history = createHistory();

const Items = () => <div>item</div>
const Summary = () => <div>summary</div>

const MobilizedComponent = mobilize({
  desktop: Summary,
  mobile: ItemNav
});

const routes = (
  <Router history={history}>
    <Route path="/" component={MobilizedComponent} />
    <Route path="/summary" component={Summary} />
    <Route path="/item1" component={Items}/>
  </Router>
)

export { routes, history };

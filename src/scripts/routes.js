import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { createHistory } from 'history';

import mobilize from './utils/mobilizeComponent';

import App from './containers/App';
import Summary from './containers/Summary';
import ItemNav from './containers/ItemNav';
import ItemPage from './containers/ItemPage';

const ErrorPage = () => <div>oops... something went wrong</div>

const history = createHistory();

const MobilizedComponent = mobilize({
  desktop: Summary,
  mobile: ItemNav
});

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={
        mobilize({
          desktop: Summary,
          mobile: ItemNav
        })
      }/>
      <Route path="summary" component={Summary} />
      <Route path="items/:id" component={ItemPage} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>
)

export { routes, history };

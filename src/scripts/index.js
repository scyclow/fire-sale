import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import { syncReduxAndRouter } from 'redux-simple-router';
import { history, routes } from './routes';

import resizeWindow from './utils/resizeWindow';

const store = createStore(rootReducer);
syncReduxAndRouter(history, store);
resizeWindow(store.dispatch.bind(store));

render(
  <Provider store={store}>
    {routes}
  </Provider>,

  document.getElementById('app')
);

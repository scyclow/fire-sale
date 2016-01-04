import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/configureStore';

import { syncReduxAndRouter } from 'redux-simple-router';
import { history, routes } from './routes';

import resizeWindow from './utils/resizeWindow';

syncReduxAndRouter(history, store);
resizeWindow(store.dispatch.bind(store));

render(
  <Provider store={store}>
    {routes}
  </Provider>,

  document.getElementById('app')
);

///// FOR TESTING PURPOSES ONLY
import {newBid, itemSold} from './actions';
window.newBid = (...args) => store.dispatch(newBid(...args))
window.store = store

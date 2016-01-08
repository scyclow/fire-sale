
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/configureStore';

import { syncReduxAndRouter } from 'redux-simple-router';
import { history, routes } from './routes';

import api from './api/db';
const { hydrate } = api; // why the fuck do i need to do this?

import resizeWindow from './services/resizeWindow';
import updateBidTime from './services/updateBidTime';

syncReduxAndRouter(history, store);

resizeWindow(store.dispatch);
updateBidTime(store.dispatch);
hydrate(store.dispatch);

render(
  <Provider store={store}>
    {routes}
  </Provider>,

  document.getElementById('app')
);

///// FOR TESTING PURPOSES ONLY
import {newBid, newBidTime, itemSold} from './actions';
window.newBid = (...args) => store.dispatch(newBid(...args))
window.newBidTime = (...args) => store.dispatch(newBidTime(...args))
window.store = store

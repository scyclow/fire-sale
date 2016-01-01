import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import { syncReduxAndRouter } from 'redux-simple-router';
import { history } from './routes';

import resizeWindow from './utils/resizeWindow';

import App from './containers/App';

const store = createStore(rootReducer);
syncReduxAndRouter(history, store);

resizeWindow(store.dispatch.bind(store));

     //////////////////////////////////////////////////////////
    ////////// FOR TESTING PURPOSES ONLY /////////////////////
   /**/ import { count } from './actions' ///////////////////
  /**/ window.count = (n) => store.dispatch(count(n)) //////
 //////////////////////////////////////////////////////////

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import application from './application';
import bids from './bids';
import items from './items';

const rootReducer = combineReducers({
  bids,
  items,
  application,
  routing: routeReducer
});

export default rootReducer;

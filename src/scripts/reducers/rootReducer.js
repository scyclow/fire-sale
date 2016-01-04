import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import windowSize from './windowSize';
import bids from './bids';
import items from './items';

const rootReducer = combineReducers({
  bids,
  items,
  windowSize,
  routing: routeReducer
});

export default rootReducer;

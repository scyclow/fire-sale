import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import windowSize from './windowSize';
import bids from './bids';

const rootReducer = combineReducers({
  bids,
  windowSize,
  routing: routeReducer
});

export default rootReducer;

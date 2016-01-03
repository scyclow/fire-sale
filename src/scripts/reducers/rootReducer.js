import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import windowSize from './windowSize';
import bidding from './bidding';

const rootReducer = combineReducers({
  bidding,
  windowSize,
  routing: routeReducer
});

export default rootReducer;

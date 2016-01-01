import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import bleh from './bleh';
import windowSize from './windowSize';

const rootReducer = combineReducers({
  bleh,
  windowSize,
  routing: routeReducer
});

export default rootReducer;

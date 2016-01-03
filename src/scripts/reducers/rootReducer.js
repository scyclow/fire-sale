import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import windowSize from './windowSize';

const rootReducer = combineReducers({
  windowSize,
  routing: routeReducer
});

export default rootReducer;

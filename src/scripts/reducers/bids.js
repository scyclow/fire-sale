import moment from 'moment';
import { Map, fromJS } from 'immutable';

import { handleActions } from 'redux-actions';
import { NEW_BID, NEW_BIDTIME, SET_STATE } from '../actions';

import hydrateMap from '../utils/hydrateMap';

// TODO remap bids into "all" object
const initialState = Map({});

const reducer = handleActions({
  [NEW_BID]: (state, { amount, bidderName, bidId, comment, itemId, createdAt, expiresAt }) =>
    state.set(
      bidId,
      Map({ amount, bidderName, bidId, comment, itemId, createdAt, expiresAt })
    ),

  // [NEW_BIDTIME]: (state, { hours }) =>
  //   state.set('currentBidTime', hours),

  [SET_STATE]: (state, { dbState }) => {
    return hydrateMap(dbState.bids, ['createdAt', 'expiresAt'])
  }
}, initialState);

export default reducer;

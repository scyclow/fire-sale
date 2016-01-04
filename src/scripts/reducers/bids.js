import moment from 'moment';
import { Map, fromJS } from 'immutable';

import { handleActions } from 'redux-actions';
import { NEW_BID, NEW_BIDTIME, SET_STATE } from '../actions';

// TODO: get initial state from firebase
const initialState = Map({});

const reducer = handleActions({
  [NEW_BID]: (state, { amount, bidderName, bidId, comment, itemId, createdAt, expiresAt }) =>
    state.set(
      bidId, { amount, bidderName, bidId, comment, itemId, createdAt, expiresAt }
    ),

  [NEW_BIDTIME]: (state, { hours }) =>
    state.set('currentBidTime', hours),

  [SET_STATE]: (state, { dbState }) => fromJS(dbState.items)

}, initialState);

export default reducer;

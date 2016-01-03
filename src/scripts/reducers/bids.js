import moment from 'moment';
import { Map } from 'immutable';

import { handleActions } from 'redux-actions';
import { NEW_BID, NEW_BIDTIME } from '../actions';

// TODO: get initial state from firebase
const initialState = Map({
  currentBidTime: 1, // hours
  0: {
    createdAt: moment(),
    expiresAt: moment().add(2, 'hours'),
    amount: 100,
    bidderName: 'Steve',
    bidId: 0,
    itemId: 4
  },
  1: {
    createdAt: moment(),
    expiresAt: moment().add(2, 'hours'),
    amount: 200,
    bidderName: 'Bill',
    bidId: 1,
    itemId: 3
  }
});

const reducer = handleActions({
  [NEW_BID]: (state, { amount, bidderName, bidId, itemId, createdAt, expiresAt }) => {
    return state.set(
      bidId, { amount, bidderName, bidId, itemId, createdAt, expiresAt }
    );
  },
  [NEW_BIDTIME]: (state, { hours }) => {
    return state.set('currentBidTime', hours)
  }
}, initialState);

export default reducer;

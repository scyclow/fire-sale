import { fromJS } from 'immutable';

import { handleActions } from 'redux-actions';
import { ITEM_SOLD, NEW_BID } from '../actions';

// TODO: get initial state from firebase
const initialState = fromJS({
  1: {
    name: 'bed',
    id: '1',
    notes: 'pickup on 1/14',
    imgUrl: 'http://sdfgsrg.com',
    bids: ['0'],
    minBid: 20,
    soldId: null
  },
  2: {
    name: 'couch',
    id: '2',
    notes: 'seen lots of "action", if ya know what i mean.',
    imgUrl: 'http://sdfjjhgsrg.com',
    bids: ['1'],
    minBid: 20,
    soldId: null
  }
});

const reducer = handleActions({
  [NEW_BID]: (state, { bidId, itemId }) =>
    state.updateIn([itemId, 'bids'], (bids) => bids.push(bidId)),

  [ITEM_SOLD]: (state, { bidId, itemId }) =>
    state.setIn([itemId, 'soldId'], bidId)

}, initialState);

export default reducer;

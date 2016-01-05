// TODO  scrap immutable.
import { fromJS, Map } from 'immutable';

import { handleActions } from 'redux-actions';
import { ITEM_SOLD, NEW_BID, SET_STATE } from '../actions';

let initialState = Map({});

const reducer = handleActions({
  [NEW_BID]: (state, { bidId, itemId }) => {
    return state.updateIn([itemId, 'bids'], (bids) => {
      debugger
      return bids.push(bidId)
    })
  },

  [ITEM_SOLD]: (state, { bidId, itemId }) =>
    state.setIn([itemId, 'soldId'], bidId),

  [SET_STATE]: (state, { dbState }) => fromJS(dbState.items)

}, initialState);

export default reducer;

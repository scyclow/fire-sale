// TODO  scrap immutable.
import { fromJS, Map } from 'immutable';

import { handleActions } from 'redux-actions';
import { ITEM_SOLD, NEW_BID, SET_STATE } from '../actions';

import hydrateMap from '../utils/hydrateMap';

let initialState = Map({});

const reducer = handleActions({
  // FIXME -- This is getting updated in firebase too, so it's counting twice
  // [NEW_BID]: (state, { bidId, itemId }) =>
  //   state.updateIn(
  //     [itemId, 'bids'],
  //     (bids) => bids.push(bidId)
  //   ),

  [ITEM_SOLD]: (state, { bidId, itemId }) =>
    state.setIn([itemId, 'soldId'], bidId),

  [SET_STATE]: (state, { dbState }) =>
    hydrateMap(dbState.items)

}, initialState);

export default reducer;

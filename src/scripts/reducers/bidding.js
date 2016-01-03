import moment from 'moment';
import { Map } from 'immutable';

import { handleActions } from 'redux-actions';
import { NEW_BID } from '../actions';

// TODO: get initial state from firebase
const initialState = Map({
  0: {
    time: moment(),
    ammount: 100,
    bidderName: 'Steve',
    bidId: 0,
    itemId: 4
  },
  1: {
    time: moment(),
    ammount: 200,
    bidderName: 'Bill',
    bidId: 1,
    itemId: 3
  }
});

const reducer = handleActions({
  [NEW_BID]: (state, { ammount, bidderName, bidId, itemId, time }) => {
    return state.set(bidId, { ammount, bidderName, bidId, itemId, time });
  }
}, initialState);

export default reducer;

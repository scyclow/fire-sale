import moment from 'moment';

import store from '../store/configureStore';

export const RESIZE_WINDOW = 'RESIZE_WINDOW';
export const NEW_BIDTIME = 'NEW_BIDTIME';
export const NEW_BID = 'NEW_BID';
export const SET_STATE = 'SET_STATE';
// export const ITEM_SOLD = 'ITEM_SOLD';
// export const ADD_TO_BLOCK = 'ADD_TO_BLOCK';

export const resizeWindow = (width) => ({
  type: RESIZE_WINDOW,
  width
});

export const newBidtime = (hours) => ({
  type: NEW_BIDTIME,
  hours
});

const biddingState = () => store.getState().bids
const newBidId = () => biddingState().size.toString();
const getExpiration = () => {
  let now = moment();
  let timeLeft = biddingState().get('currentBidTime');
  return now.add(timeLeft, 'hours');
}

export const newBid = ({ amount, bidderName, itemId, comment }) => ({
  type: NEW_BID,
  createdAt: moment(),
  expiresAt: getExpiration(),
  amount,
  bidderName,
  bidId: newBidId(),
  comment,
  itemId: itemId.toString()
});

export const itemSold = (itemId, bidId) => ({
  type: ITEM_SOLD,
  itemId: itemId.toString(),
  bidId: bidId.toString()
});

export const setState = (dbState) => ({
  type: SET_STATE,
  dbState
})

// export const addToBlock = (itemIds) => ({
//   type: ADD_TO_BLOCK,
//   itemIds
// });

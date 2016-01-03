import moment from 'moment';

import store from '../store/configureStore';

export const RESIZE_WINDOW = 'RESIZE_WINDOW';
export const NEW_BIDTIME = 'NEW_BIDTIME';
export const NEW_BID = 'NEW_BID';
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

const biddingState = () => store.getState().bidding

const newBidId = () => biddingState().size;
const getExpiration = () => {
  let now = moment();
  let timeLeft = biddingState().get('currentBidTime');
  return now.add(timeLeft, 'hours');
}

export const newBid = ({ amount, bidderName, itemId }) => ({
  type: NEW_BID,
  createdAt: moment(),
  expiresAt: getExpiration(),
  amount,
  bidderName,
  bidId: newBidId(),
  itemId
});

// export const itemSold = (itemId, bidId) => ({
//   type: ITEM_SOLD,
//   itemId,
//   bidId
// });

// export const addToBlock = (itemIds) => ({
//   type: ADD_TO_BLOCK,
//   itemIds
// });

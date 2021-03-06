import moment from 'moment';

import store from '../store/configureStore';
import bleh from '../api/db';
const { db } = bleh;

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

export const newBidTime = (ms) => {
  return {
    type: NEW_BIDTIME,
    ms
  };
};

const biddingState = () => store.getState().bids
const newBidId = () => biddingState().size;
const getExpiration = () => {
  let now = moment();
  let timeLeft = store.getState().application.currentBidTime;
  return now.add(timeLeft, 'milliseconds');
}

export const newBid = ({ amount, bidderName, itemId, comment }) => {
  const id = newBidId();
  const createdAt = moment();
  const expiresAt = getExpiration();
  const bid = {
    amount,
    bidderName,
    bidId: id,
    comment,
    itemId: itemId
  };

  const dbBid = {
    createdAt: createdAt.format(),
    expiresAt: expiresAt.format(),
    ...bid
  }

  // update database shit. this sucks. FIXME ?
  db.child('bids').child(id).set(dbBid);
  const bidSize = store.getState().items.get(itemId).get('bids').size;
  db.child('items').child(itemId).child('bids').update({ [bidSize]: id });

  return { type: NEW_BID, createdAt, expiresAt, ...bid };
}

// export const itemSold = (itemId, bidId) => ({
//   type: ITEM_SOLD,
//   itemId: itemId,
//   bidId: bidId
// });

export const setState = (dbState) => ({
  type: SET_STATE,
  dbState
})

// export const addToBlock = (itemIds) => ({
//   type: ADD_TO_BLOCK,
//   itemIds
// });

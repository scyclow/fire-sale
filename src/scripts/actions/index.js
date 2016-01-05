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

// export const newBidtime = (hours) => {
//   db.update({ bids: { currentBidTime: hours }});

//   return {
//     type: NEW_BIDTIME,
//     hours
//   };
// };

const biddingState = () => store.getState().bids
const newBidId = () => biddingState().size;
const getExpiration = () => {
  let now = moment();
  let timeLeft = biddingState().get('currentBidTime');
  return now.add(timeLeft, 'hours');
}

export const newBid = ({ amount, bidderName, itemId, comment }) => {
  /*
    TODO:
      - send dehydrated object to db
        - use moment string
      - handle moment rehydration
  */
  const id = newBidId();
  const bid = {
    // createdAt: moment(),
    // expiresAt: getExpiration(),
    amount,
    bidderName,
    bidId: id,
    comment,
    itemId: itemId
  };

  // update database shit. this sucks. FIXME ?
  db.child('bids').child(id).set(bid);
  const bidSize = store.getState().items.get(itemId).get('bids').size;
  db.child('items').child(itemId).child('bids').update({ [bidSize]: id });

  return { type: NEW_BID, ...bid };
}

export const itemSold = (itemId, bidId) => ({
  type: ITEM_SOLD,
  itemId: itemId,
  bidId: bidId
});

export const setState = (dbState) => ({
  type: SET_STATE,
  dbState
})

// export const addToBlock = (itemIds) => ({
//   type: ADD_TO_BLOCK,
//   itemIds
// });

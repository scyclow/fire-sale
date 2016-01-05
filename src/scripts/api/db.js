import Firebase from 'firebase';

import { setState, newBid } from '../actions';

const db = new Firebase('https://buymycrap.firebaseio.com/');

const hydrate = (dispatch) => {
  db.on('value', (ref) => {
    dispatch(
      setState(ref.val())
    );
  });
};

export default { db, hydrate };

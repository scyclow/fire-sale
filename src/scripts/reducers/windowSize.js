import { handleActions } from 'redux-actions';
import { RESIZE_WINDOW } from '../actions';

const initialState = {
  width: window.innerWidth
};

const reducer = handleActions({
  [RESIZE_WINDOW]: (state, action) => ({
    width: action.width
  })
}, initialState);

export default reducer;

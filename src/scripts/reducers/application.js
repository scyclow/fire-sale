import { handleActions } from 'redux-actions';
import { RESIZE_WINDOW, NEW_BIDTIME, SET_STATE } from '../actions';

const mobileWidth = 500;

const initialState = {
  isMobile: window.innerWidth < mobileWidth
};

const reducer = handleActions({
  [RESIZE_WINDOW]: (state, action) => ({
    ...state,
    isMobile: action.width < mobileWidth
  }),


  [NEW_BIDTIME]: (state, { ms }) => ({
    ...state,
    currentBidTime: ms
  })

}, initialState);

export default reducer;

import { handleActions } from 'redux-actions';
import { RESIZE_WINDOW, NEW_BIDTIME, SET_STATE } from '../actions';

const mobileWidth = 640;

const initialState = {
  isMobile: window.innerWidth < mobileWidth,
  screenWidth: window.innerWidth,
  currentBidTime: 0
};

const reducer = handleActions({
  [RESIZE_WINDOW]: (state, action) => ({
    ...state,
    isMobile: action.width < mobileWidth,
    screenWidth: action.width
  }),


  [NEW_BIDTIME]: (state, { ms }) => ({
    ...state,
    currentBidTime: ms
  })

}, initialState);

export default reducer;

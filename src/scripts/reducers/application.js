import { handleActions } from 'redux-actions';
import { RESIZE_WINDOW, NEW_BIDTIME, SET_STATE } from '../actions';

const mobileWidth = 640;

const initialState = {
  isMobile: window.innerWidth < mobileWidth,
  windowWidth: window.innerWidth
};

const reducer = handleActions({
  [RESIZE_WINDOW]: (state, action) => ({
    ...state,
    isMobile: action.width < mobileWidth,
    windowWidth: action.width
  }),


  [NEW_BIDTIME]: (state, { ms }) => ({
    ...state,
    currentBidTime: ms
  })

}, initialState);

export default reducer;

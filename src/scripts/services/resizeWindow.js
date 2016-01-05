import { resizeWindow } from '../actions';

const resize = (dispatch) => {
  window.onresize = () => {
    const width = window.innerWidth;
    dispatch(resizeWindow(width));
  };
};

export default resize;

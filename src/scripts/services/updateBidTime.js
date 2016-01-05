import { newBidTime } from '../actions';
import moment from 'moment';

const bidTimeMap = {}

const setupBidTime = (dispatch) => {
  const now = moment();
  // find current bidtime. dispatch newBidTime
  // set up a watcher to dispatch newBidTime in future
};

import { newBidTime } from '../actions';
import moment from 'moment';

const today = '2016-01-09';
const tomorrow = '2016-01-10';

const bidTimeMap = {        // in minutes
  [`2016-01-08T12:00:00-06:00`]: 180,    //6
  [`${today}T18:00:00-06:00`]: 180,    //6
  [`${today}T18:30:00-06:00`]: 165,    //630
  [`${today}T19:00:00-06:00`]: 150,    //7
  [`${today}T19:30:00-06:00`]: 135,    //730
  [`${today}T20:00:00-06:00`]: 120,    //8
  [`${today}T20:30:00-06:00`]: 80,     //830
  [`${today}T21:00:00-06:00`]: 60,     //9
  [`${today}T21:30:00-06:00`]: 45,     //930
  [`${today}T22:00:00-06:00`]: 30,     //10
  [`${today}T22:30:00-06:00`]: 20,     //1030
  [`${today}T23:00:00-06:00`]: 10,     //11
  [`${today}T23:30:00-06:00`]: 5,      //1130
  [`${tomorrow}T00:00:00-06:00`]: 2,   //12
  [`${tomorrow}T00:30:00-06:00`]: 1,   //1230
  [`${tomorrow}T01:00:00-06:00`]: 0.5  //1
};

const getMs = (min) => min * 60 * 1000;

const updateBidTime = (dispatch) => {
  const now = moment();
  const past = [];

  _.each(bidTimeMap, (bidTime, time) => {
    const then = moment(time);
    const timeTo = then.diff(now);

    if (timeTo > 0) {
      const msLeft = getMs(bidTimeMap[time]);

      setTimeout(() => {
        dispatch(newBidTime(msLeft))
      }, timeTo)
    } else {
      past.push(bidTimeMap[time])
    }
  });

  const currentBidTime = getMs(_.min(past));
  dispatch(newBidTime(currentBidTime));
};

export default updateBidTime;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const bidTimes = {
  '18:00': 180,
  '18:30': 165,
  '19:00': 150,
  '19:30': 135,
  '20:00': 120,
  '20:30': 80,
  '21:00': 60,
  '21:30': 45,
  '22:00': 30,
  '22:30': 20,
  '23:00': 10,
  '23:30': 5,
  '00:00': 2,
  '00:30': 1,
  '01:00': 0.5
};

const select = (state) => {
  const { currentBidTime } = state.application;
  return { currentBidTime };
};

class TimeTable extends Component {
  render() {
    let { currentBidTime } = this.props;
    currentBidTime = currentBidTime / (1000 * 60);

    const center = { textAlign: 'center' }

    return (
      <div className="time-table" style={{fontSize: '1.5em'}}>
        <div style={{padding: '1em'}}>
          <div style={{fontSize: '2em'}}>ALL NEW OFFERS EXPIRE IN: {currentBidTime} minutes</div>
          <div>If you are confused, see the explanation below...</div>
        </div>
        <table>
          <thead>
            <tr>
              <th style={center}>Offers made after</th>
              <th style={center}>Expire in __ minutes</th>
            </tr>
          </thead>
          <tbody>
          {_.map(bidTimes, (bidTime, time) => (
            <tr key={bidTime + time}>
              <td style={center}>{time}</td>
              <td style={center}>{bidTime}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <div style={{padding: '1em'}}>
          <div style={{fontSize: '2em'}}>EXPLANATION</div>
          <div>
            Whenever you bid on an item, Other people will have a specified amount of time to make a better offer. For example, let's say you bid $30 on my coffee table at 22:25 (10:25PM). Your offer would exipire in 30 min (10:55PM). If no one makes a better offer before then, you win the item. However, if someone bids $35 at 22:40, you would have until 23:00 to make a better offer.
          </div>
        </div>
      </div>
    );
  }
}

export default connect(select)(TimeTable);

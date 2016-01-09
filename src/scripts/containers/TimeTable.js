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

    const styles = {
      fontSize: '1.5em'
    }

    return (
      <div className="time-table" style={styles}>
        <div>ITEMS ARE SOLD ON EXPIRATION OF BEST OFFER</div>
        <div>ALL NEW OFFERS EXPIRE IN: {currentBidTime} minutes</div>
        <table>
          <thead>
            <tr>
              <th>Offers made after</th>
              <th>Expire in __ minutes</th>
            </tr>
          </thead>
          <tbody>
          {_.map(bidTimes, (bidTime, time) => (
            <tr key={bidTime + time}>
              <td>{time}</td>
              <td>{bidTime}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(select)(TimeTable);

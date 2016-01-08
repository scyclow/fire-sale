import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import BidSummary from '../components/BidSummary';

const select = (state) => {
  const bids = state.bids.size &&
    state.bids.map(bid => bid.set(
      'item',
      state.items.get( bid.get('itemId') )
    )).toJS();

  return { bids };
};

class Summary extends Component {
  render() {
    const { bids } = this.props;

    return (
      <BidSummary bids={_.values(bids)}/>
    );
  }
}

export default connect(select)(Summary);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const select = (state) => {
  const bids = state.bids.size &&
    state.bids.map(bid => bid.set(
      'item',
      state.items.get( bid.get('itemId') )
    )
  ).toJS();

  return { bids };
};

class Summary extends Component {
  render() {
    const { bids } = this.props;

    return (
      <div>
        {bids && _.values(bids).map(bid => (
          <div>
            Bid: {bid.bidId} -- Item: {bid.item && bid.item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(select)(Summary);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const select = (state, props) => {
  const items = state.items.size && state.items;
  const itemId = Number(props.params.id);

  if (items) {
    const item = items.get(itemId).update(
      'bids',
      (bids) => bids.map(bidId => state.bids.get(bidId).toJS())
    ).toJS();

    return { item };
  }
};

class ItemSummary extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        {item.name}
        {_.values(item.bids).map(bid => (
          <div key={bid.bidId}>
            Bid: {bid.bidId} -- Amount: {bid.amount} -- Comment: {bid.comment}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(select)(ItemSummary);

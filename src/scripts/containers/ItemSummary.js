import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import BidForm from '../components/BidForm';
import { newBid } from '../actions';
import pojo from '../utils/pojo';

const select = (state, props) => {
  const items = state.items.size && state.items;
  const itemId = Number(props.params.id);

  if (items) {
    return { item: pojo(state).item(items.get(itemId)) };
  }
};

class ItemSummary extends Component {
  render() {
    const { dispatch, item } = this.props;

    return (
      <div>
        {item.name}
        <BidForm item={item} onSubmit={(...args) => dispatch(newBid(...args))} />
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

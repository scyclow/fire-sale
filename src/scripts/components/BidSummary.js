import React, { Component } from 'react';
require('../../styles/bid.scss');

class BidSummary extends Component {
  render() {
    const { bids } = this.props;

    return (
      <div className="bid-summary">
        {bids && bids.reverse().map(bid => (
          <div className="bid" key={bid.bidId}>
            <span className="bid-info">
              <span className="bidder-name">{bid.bidderName}</span> offered ${bid.amount} for {bid.item.name}{bid.comment && ' and says: '}
            </span>
            <br/>
            <span className="bid-comment">{bid.comment && `${bid.comment}`}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default BidSummary;

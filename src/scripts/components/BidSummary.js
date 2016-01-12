import React, { Component } from 'react';
import { Link } from 'react-router';
require('../../styles/bid.scss');

class BidSummary extends Component {
  render() {
    const { bids } = this.props;

    return (
      <div className="bid-summary">
        {!bids.length &&
          <div className="bid">No bids yet!</div>
        }
        {bids && bids.reverse().map(bid => (
          <div className="bid" key={bid.bidId}>
            <span className="bid-info">
              <span className="bidder-name">{bid.bidderName}</span> offered ${bid.amount} for <Link to={`items/${bid.item.id}`}>{bid.item.name}</Link>{bid.comment && ' and says: '}
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

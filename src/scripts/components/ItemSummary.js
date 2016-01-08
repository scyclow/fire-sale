import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

require('../../styles/item-summary.scss');

import BidForm from './BidForm';

const ItemBid = ({ bid, classname='' }) => (
  <div className={`item-bid ${classname}`} key={bid.bidId}>
    <span className="bid-info">{bid.bidderName} offered ${bid.amount}</span>
    <span className="bid-comment">{bid.comment && `: "${bid.comment}"`}</span>
  </div>
);

class ItemSummary extends Component {
  render() {
    const { dispatchBid, item } = this.props;

    const bids = _(item.bids).values().sortBy(bid => -bid.amount).value();

    const bestOffer = <ItemBid bid={bids[0]} classname="best-offer" />;
    const noOffer = (
      <div className="empty-bid">
        Go ahead. Make me an offer I can't refuse. Or, offer me $0, you cheap ass.
      </div>
    );

    const alreadySold = (
      item.bestOffer &&
      moment().diff(item.bestOffer.expiresAt) > 0
    );

    return (
      <div className="item-summary">
        <div className="item-description">
          <div className="item-name">{item.name}</div>
          <div className="item-notes">{item.notes}</div>
        </div>

        {
          alreadySold ?
            <div>already sold!</div> :
            <BidForm item={item} onSubmit={dispatchBid}/>
        }

        <div className="item-expiration">
          {
            item.bestOffer &&
            `${alreadySold ? 'EXPIRED' : 'EXPIRES'} AT: ${item.bestOffer.expiresAt.format('HH:mm:ss')}`
          }
        </div>

        {bids.length ? bestOffer : noOffer}

        {bids.length > 1 && bids.slice(1).map(bid => (
          <ItemBid bid={bid} />
        ))}
      </div>
    );
  }
}

export default ItemSummary;

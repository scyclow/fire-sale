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
    const { dispatchBid, item, Link } = this.props;

    if (!item) {
      return <div>Something is wrong here...</div>
    }

    const bids = _(item.bids).values().sortBy(bid => -bid.amount).value();

    const bestOffer = <ItemBid bid={bids[0]} classname="best-offer" />;
    const noOffer = (
      <div className="empty-bid">
        Go ahead. Make me an offer I can't refuse.
      </div>
    );

    const now = moment();

    const alreadySold = (
      item.bestOffer &&
      now.diff(item.bestOffer.expiresAt) > 0
    );

    const itemReady = (
      now.diff(moment('2016-01-09T17:59:59-06:00')) > 0
    );

    return (
      <div className="item-summary">
        <div className="item-description">
          <div className="item-name">{item.name}</div>
          <div className="item-notes">{item.notes}</div>
        </div>

        {
          itemReady && !alreadySold &&
          <BidForm key={item.id} item={item} onSubmit={dispatchBid}/>
        }
        {
          !itemReady && !alreadySold &&
          <div className="empty-bid">
            Bidding for this item opens at 18:00 on 1/9/16
          </div>
        }
        <Link to="/time-table">When does my bid expire?</Link>

        <div className="item-expiration">
          {
            item.bestOffer &&
            `${alreadySold ? 'SOLD' : 'EXPIRES'} AT ${item.bestOffer.expiresAt.format('HH:mm:ss')}`
          }
        </div>

        { itemReady && (bids.length ? bestOffer : noOffer)}

        {bids.length > 1 && bids.slice(1).map(bid => (
          <ItemBid bid={bid} />
        ))}
      </div>
    );
  }
}

export default ItemSummary;

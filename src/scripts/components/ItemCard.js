import React, { Component, PropTypes } from 'react';
import moment from 'moment';

require('../../styles/item-card.scss');

class ItemCard extends Component {
  render() {
    const { item, Link, sold } = this.props;
    const { id, name, bids, bestOffer } = item;
    const offerText =
      sold ? `SOLD FOR $${bestOffer.amount}` :
      bestOffer ? `BEST OFFER: $${bestOffer.amount}` :
      'NO OFFERS';

    const minutesLeft = bestOffer && bestOffer.expiresAt.diff(moment(), 'minutes');

    return (
      <Link to={`/items/${id}`} className="item-link">
        <div className={`item-card ${sold && 'sold'}`}>
          {name + ' >'}
          <br/>
          {offerText}
          <br/>
          {!sold && bestOffer && (minutesLeft <= 10) &&
            `Expires in ${minutesLeft} minutes`
          }

        </div>
      </Link>
    );
  }
}

export default ItemCard;

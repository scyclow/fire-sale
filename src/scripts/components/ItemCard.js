import React, { Component, PropTypes } from 'react';

require('../../styles/item-card.scss');

class ItemCard extends Component {
  render() {
    const { item, Link } = this.props;
    const { id, name, bids } = item;

    const bestOffer = _(bids).pluck('amount').max();

    return (
      <Link to={`/items/${id}`}>
        <div className="item-card">
          {name + ' >'}
          <br/>
          BEST OFFER: ${bestOffer}
        </div>
      </Link>
    );
  }
}

export default ItemCard;

import React, { Component, PropTypes } from 'react';

require('../../styles/item-card.scss');

class ItemCard extends Component {
  render() {
    const { item, Link } = this.props;
    const { id, name, bids, bestOffer } = item;

    return (
      <Link to={`/items/${id}`} className="item-link">
        <div className="item-card">
          {name + ' >'}
          <br/>
          BEST OFFER: ${bestOffer.amount}
        </div>
      </Link>
    );
  }
}

export default ItemCard;

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ItemCard extends Component {
  render() {
    const { name, id } = this.props;

    return (
      <div>
        <Link to={`/items/${id}`}>{name}</Link>
      </div>
    );
  }
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ItemCard;

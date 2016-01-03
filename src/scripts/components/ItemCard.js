import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ItemCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }

  render() {
    const { name, id } = this.props;

    return (
      <div>
        <Link to={`/items/${id}`}>{name}</Link>
      </div>
    );
  }
}

export default ItemCard;

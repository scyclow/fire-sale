import React, { Component, PropTypes } from 'react';

class ItemSummary extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        {item.name}
      </div>
    );
  }
}

// ItemSummary.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired
// };

export default ItemSummary;

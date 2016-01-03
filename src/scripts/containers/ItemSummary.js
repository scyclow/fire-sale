import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const select = (state, props) => {
  let items = { // state.items
    1: {
      name: 'item1 asdvkb'
    },
    2: {
      name: 'item2 asdvkb'
    },
    3: {
      name: 'item3 asdvkb'
    },
    4: {
      name: 'item4 asdvkb'
    }
  };
  const itemId = props.params.id
  return { item: items[itemId] };
};

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

export default connect(select)(ItemSummary);

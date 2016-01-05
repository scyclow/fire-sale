import React, { Component } from 'react';
import { connect } from 'react-redux';

const select = (state, props) => {
  const items = state.items;
  const itemId = props.params.id;

  return { item: items.get(itemId).toJS() };
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

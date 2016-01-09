import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import { newBid } from '../actions';
import pojo from '../utils/pojo';
import ItemSummary from '../components/ItemSummary';

const select = (state, props) => {
  const items = state.items.size && state.items;
  const itemId = Number(props.params.id);

  if (items) {
    const item = items.get(itemId);
    return item && { item: pojo(state).item(item) };
  }
};

class ItemPage extends Component {
  render() {
    const { dispatch, item } = this.props;

    const dispatchBid = (...args) => dispatch(newBid(...args));

    return (
      <ItemSummary item={item} dispatchBid={dispatchBid} Link={Link}/>
    );
  }
}

export default connect(select)(ItemPage);

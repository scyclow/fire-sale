import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import ItemCard from '../components/ItemCard';

const select = (state) => {
  let items;

  if (state.items.size) {
    items = _.map(state.items.toJS(), (item) => ({
      ...item,
      bids: item.bids.map(bidId => state.bids.get(bidId).toJS())
    }));
  }

  return { items };
};

class ItemNav extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items && items.map(item =>
          <ItemCard key={item.id} item={item} Link={Link}/>
        )}
      </div>
    );
  }
}

export default connect(select)(ItemNav);

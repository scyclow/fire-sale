import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import ItemCard from '../components/ItemCard';
import pojo from '../utils/pojo';

const select = (state) => {
  let items;
// TODO if item has already expired, create a seperate array
  if (state.items.size) {
    items = _.map(state.items.toJS(), pojo(state).item)
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

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import ItemCard from '../components/ItemCard';

const select = (state) => {
  let items = state.items.size && state.items.toJS();

  return { items };
};

class ItemNav extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items && _.values(items).map(item =>
          <ItemCard key={item.id} id={item.id} name={item.name} />
        )}
      </div>
    );
  }
}

export default connect(select)(ItemNav);

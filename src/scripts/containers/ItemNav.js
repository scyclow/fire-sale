import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ItemCard from '../components/ItemCard';

const select = (state) => {
  let items = [
    {name: 'item1', id: 1},
    {name: 'item2', id: 2},
    {name: 'item3', id: 3},
    {name: 'item4', id: 4}
  ];

  return { items };
};

class ItemNav extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item =>
          <ItemCard key={item.id} id={item.id} name={item.name} />
        )}
      </div>
    );
  }
}

export default connect(select)(ItemNav);

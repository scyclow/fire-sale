import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
          <div key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </div>
        )}
      </div>
    );
  }
}

export default connect(select)(ItemNav);

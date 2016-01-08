import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import ItemCard from '../components/ItemCard';
import pojo from '../utils/pojo';

const itemSold = (item) => moment().diff(item.bestOffer.expiresAt) > 0;

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
    let [sold, notSold] = items ? _.partition(items, itemSold) : [[],[]];

    return (
      <div>
        {
          notSold &&
          notSold.map(item =>
            <ItemCard key={item.id} item={item} Link={Link} />
          )
        }
        {
          sold &&
          sold.map(item =>
            <ItemCard key={item.id} item={item} Link={Link} sold={true}/>
          )
        }
      </div>
    );
  }
}

export default connect(select)(ItemNav);

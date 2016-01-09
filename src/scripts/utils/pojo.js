// Turn Immutable objects into Plain Old JavaScript Objects
// Map keys to values

const pojo = (state) => ({
  item(item) {
    item = item.toJS ? item.toJS() : item;
    const bids = _.map(item.bids, (bidId) => state.bids.get(bidId).toJS());
    const bestOffer = !!bids.length && _.max(bids, (bid) => bid.amount);

    return { ...item, bids, bestOffer };
  }
})

export default pojo;

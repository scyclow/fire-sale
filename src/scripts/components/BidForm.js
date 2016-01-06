import React, { Component } from 'react';

class BidForm extends Component {
  state = { error: '', confirmation: '' }

  _createBid = () => {
    const amount = Number(this.refs.amount.value);
    const bidderName = this.refs.bidderName.value;
    const comment = this.refs.comment.value;

    if (!bidderName) {
      this.setState({ error: 'Enter your name' });
    } else if (!amount || amount === 0) {
      this.setState({ error: 'Enter a valid amount' });
    } else {
      const itemId = this.props.item.id;
      this.props.onSubmit({ amount, bidderName, comment, itemId });
      this._clearInputs();
      this.setState({ error: '', confirmation: 'Groovy' });
    }
  }

  _clearInputs = () => {
    ['bidderName', 'amount', 'comment'].forEach(ref => {
      this.refs[ref].value = ''
    });
  }

  _onKeyPress = (e) => {
    // TODO if enter, submit
    console.log(e.keyCode)
  }

  render() {
    const { item } = this.props;
    const { error, confirmation } = this.state;

    return (
      <div onKeyPress={this._onKeyPress}>
        <div className="flash">{error || confirmation}</div>
        <input ref="bidderName" type="text" placeholder="Your Name" />
        <input ref="amount" type="text" placeholder="Bid $$$" />
        <input ref="comment" type="text" placeholder="Comment" />
        <button onClick={this._createBid}>Bid Now!</button>
      </div>
    );
  }
}

export default BidForm;

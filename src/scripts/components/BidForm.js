import React, { Component } from 'react';
require('../../styles/bid-form.scss');


class BidForm extends Component {
  state = { error: '', confirmation: '' }

  _createBid = () => {
    const amount = Number(this.refs.amount.value);
    const bidderName = this.refs.bidderName.value;
    const comment = this.refs.comment.value || _.sample([
      'What a great deal!',
      'Steve\'s so cool! What a guy!',
      'Wow, this is a steal! I should buy more stuff!',
      '',
      'Steve\'s so fucking cool. I wish I were him!'
    ]);

    if (!bidderName) {
      this.setState({ error: 'Enter your name' });
    } else if (amount !== 0 && !amount) {
      this.setState({ error: 'Enter a valid amount' });
    } else {
      const itemId = this.props.item.id;

      this.props.onSubmit({ amount, bidderName, comment, itemId });
      this._clearInputs();
      this.setState({ error: '', confirmation: 'Groovy' });
    }
  }

  _clearInputs = () => {
    ['bidderName', 'amount', 'comment', 'flash'].forEach(ref => {
      this.refs[ref].value = ''
    });
  }

  _onKeyPress = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      this._createBid();
    }
  }

  render() {
    const { item } = this.props;
    const { error, confirmation } = this.state;

    return (
      <div className="bid-form" onKeyPress={this._onKeyPress}>
        <div className={error ? 'error' : 'confirmation'} ref="flash">
          {error || confirmation}
        </div>
        <input className="bid-input" ref="bidderName" type="text" placeholder="Your Name" />
        <input className="bid-input" ref="amount" type="text" placeholder="Bid $$$" />
        <input className="bid-input" ref="comment" type="text" placeholder="Comment" />
        <button onClick={this._createBid}>Bid Now!</button>
      </div>
    );
  }
}

export default BidForm;

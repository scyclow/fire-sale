import React, { Component, PropTypes } from 'react';
require('../../styles/screen-split.scss');

class ScreenSplit extends Component {
  static propTypes = {
    showNavigator: PropTypes.bool,
    navigator: PropTypes.element
  }

  render() {
    const { children, showNavigator } = this.props;
    const nav = <div className="split-navigator">{children[0]}</div>;

    const className = showNavigator ?
      'screen-split show-nav' :
      'screen-split';

    return (
      <div className={className}>
        {showNavigator && nav}
        <div className="split-content">{children[1]}</div>
      </div>
    );
  }
}

export default ScreenSplit;

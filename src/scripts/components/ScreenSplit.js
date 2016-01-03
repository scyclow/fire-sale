import React, { Component, PropTypes } from 'react';

class ScreenSplit extends Component {
  static propTypes = {
    showNavigator: PropTypes.bool,
    navigator: PropTypes.element
  }

  render() {
    const { children, showNavigator } = this.props;
    const nav = <div className="split-navigator">{children[0]}</div>;

    return (
      <div>
        {showNavigator && nav}
        <div className="split-content">{children[1]}</div>
      </div>
    );
  }
}

export default ScreenSplit;

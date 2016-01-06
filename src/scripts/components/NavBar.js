import React, { Component } from 'react';
require('../../styles/nav-bar.scss');

class NavBar extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="nav-bar">
          BUY MY CRAP
          <div className="nav-links">
            {children}
          </div>
        </div>
        <div className="nav-filler"/>
      </div>
    );
  }
}

export default NavBar;

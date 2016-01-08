import React, { Component } from 'react';
require('../../styles/nav-bar.scss');

class NavBar extends Component {
  render() {
    const { children, screenWidth } = this.props;
    const fontSize = { fontSize: (screenWidth > 350 ? '1.5em' : '1.3em') }

    return (
      <div>
        <div className="nav-bar" style={fontSize}>
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

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ItemNav from './ItemNav';
import ScreenSplit from '../components/ScreenSplit';
import NavBar from '../components/NavBar';

require('../../styles/application.scss');

const select = (state) => {
  const { isMobile } = state.application;

  return { isMobile };
};

class App extends React.Component {
  render() {
    const { children, isMobile } = this.props;

    const mobileNav = (
      <NavBar>
        <Link to="/">View Items</Link>
        <Link to="/summary">All Bids</Link>
      </NavBar>
    );

    const desktopNav = (
      <NavBar>
        <Link to="/">All Bids</Link>
      </NavBar>
    )

    return (
      <div>
        {isMobile ? mobileNav : desktopNav}
        <ScreenSplit showNavigator={!isMobile}>
          <ItemNav />
          <div>{children}</div>
        </ScreenSplit>
      </div>
    );
  }
}

export default connect(select)(App);

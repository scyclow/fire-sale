import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ItemNav from './ItemNav';
import ScreenSplit from '../components/ScreenSplit';
import NavBar from '../components/NavBar';

require('../../styles/application.scss');

const select = (state) => {
  const { isMobile, screenWidth } = state.application;

  return { isMobile, screenWidth };
};

class App extends React.Component {
  render() {
    const { children, isMobile, screenWidth } = this.props;
    const linkWidth = {width: (isMobile ? '50%' : '100%')};

    const mobileNav = (
      <NavBar screenWidth={screenWidth}>
        <Link to="/" style={linkWidth}>ITEMS</Link>
        <Link to="/summary" style={linkWidth}>BIDS</Link>
      </NavBar>
    );

    const desktopNav = (
       <NavBar screenWidth={screenWidth}>
        <Link to="/" style={linkWidth}>ALL BIDS</Link>
      </NavBar>
    );

    return (
      <div>
        { isMobile ? mobileNav : desktopNav }
        <ScreenSplit showNavigator={!isMobile}>
          <ItemNav />
          <div>{children}</div>
        </ScreenSplit>
      </div>
    );
  }
}

export default connect(select)(App);

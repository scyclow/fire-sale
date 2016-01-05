import React from 'react';
import { connect } from 'react-redux';

import Thing from '../components/Thing';
import ItemNav from './ItemNav';
import ScreenSplit from '../components/ScreenSplit';

require('../../styles/application.scss');

const select = (state) => {
  const mobileWidth = 500;
  const isMobile = state.windowSize.width < mobileWidth;

  return { isMobile };
};

class App extends React.Component {
  render() {
    const { children, isMobile } = this.props;

    return (
      <div>
        <Thing content="header bar" />
        <ScreenSplit showNavigator={!isMobile}>
          <ItemNav />
          <div>{children}</div>
        </ScreenSplit>
      </div>
    );
  }
}

export default connect(select)(App);

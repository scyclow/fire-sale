import React from 'react';
import { connect } from 'react-redux';

import { routes } from '../routes';

import Thing from '../components/Thing';
import ItemNav from './ItemNav';
import ScreenSplit from '../components/ScreenSplit';

require('../../styles/application.scss');

class App extends React.Component {
  render() {
    const { count, isMobile } = this.props;
    return (
      <div>
        <Thing content="header bar" />
        <ScreenSplit showNavigator={!isMobile}>
          <ItemNav />
          {routes}
        </ScreenSplit>
      </div>
    );
  }
}

const select = (state) => {
  const mobileWidth = 500;
  const isMobile = state.windowSize.width < mobileWidth;

  return { count: state.bleh.count, isMobile };
};

export default connect(select)(App);

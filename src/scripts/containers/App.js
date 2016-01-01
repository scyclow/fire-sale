import React from 'react';
import { connect } from 'react-redux';

import { getRoutes } from '../routes';

import Thing from '../components/Thing';
import ScreenSplit from '../components/ScreenSplit';

require('../../styles/application.scss');

class App extends React.Component {
  render() {
    const { count, isMobile } = this.props;

    return (
      <div>
        <Thing content="header bar" />
        <ScreenSplit showNavigator={!isMobile}>
          <Thing content={'navigator' + count} />
          {getRoutes(isMobile)}
        </ScreenSplit>
      </div>
    );
  }
}

const select = (state) => {
  return { count: state.bleh.count, isMobile: false };
};

export default connect(select)(App);

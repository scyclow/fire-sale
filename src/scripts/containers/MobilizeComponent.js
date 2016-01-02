import React from 'react';
import { connect } from 'react-redux';

let connector = connect((state) => {
  const mobileWidth = 500;
  const isMobile = state.windowSize.width < mobileWidth;

  return { isMobile };
});

const mobilize = ({ mobile: MobileComponent, desktop: DesktopComponent}) =>
  connector(({ isMobile }) =>
    isMobile ? <MobileComponent /> : <DesktopComponent />
  );

export default mobilize;

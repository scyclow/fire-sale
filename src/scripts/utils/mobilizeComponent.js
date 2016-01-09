//
import React from 'react';
import { connect } from 'react-redux';

let connector = connect((state) => {
  const { isMobile } = state.application;

  return { isMobile };
});

const mobilize = ({ mobile: MobileComponent, desktop: DesktopComponent}) =>
  connector(({ isMobile }) =>
    isMobile ? <MobileComponent /> : <DesktopComponent />
  );

export default mobilize;

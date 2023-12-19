import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './homePanelStyles';

const HomePanel = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  return <div className={classes.homePanel}>{children}</div>;
};

HomePanel.propTypes = {
  children: PropTypes.element,
};

export default HomePanel;

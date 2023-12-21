import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './homePanelStyles';

const HomePanel = (props) => {
  const { children, title } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.homePanel}>
      {children}
      <dix className={classes.titleBar}>{title}</dix>
    </div>
  );
};

HomePanel.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default HomePanel;

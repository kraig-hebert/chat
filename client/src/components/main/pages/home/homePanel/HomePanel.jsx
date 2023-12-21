import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './homePanelStyles';

const HomePanel = (props) => {
  const { children, title } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.homePanel}>
      {children}
      {title && <div className={classes.titleBar}>{title}</div>}
    </div>
  );
};

HomePanel.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default HomePanel;

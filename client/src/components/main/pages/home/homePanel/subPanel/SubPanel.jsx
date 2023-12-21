import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './subPanelStyles';

const SubPanel = (props) => {
  const { title } = props;
  const classes = useStyles();
  return (
    <div className={classes.subPanel}>
      <div className={classes.titleBar}>{title}</div>
      SubPanel
    </div>
  );
};

SubPanel.propTypes = {
  title: PropTypes.string,
};

export default SubPanel;

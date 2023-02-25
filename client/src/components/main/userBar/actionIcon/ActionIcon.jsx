import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './actionIconStyles';

const ActionIcon = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.actionIcon}>ActionIcon</div>;
};

ActionIcon.propTypes = {};

export default ActionIcon;

import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './userBarStyles';

const UserBar = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.userBar}>UserBar</div>;
};

UserBar.propTypes = {};

export default UserBar;

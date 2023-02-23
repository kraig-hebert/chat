import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './friendsStyles';

const Friends = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.friends}>Friends</div>;
};

Friends.propTypes = {};

export default Friends;

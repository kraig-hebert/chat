import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './friendsStyles';

const Friends = (props) => {
  const { height } = props;
  const classes = useStyles({ height });

  return <div className={classes.friends}>Friends</div>;
};

Friends.propTypes = {
  height: PropTypes.number,
};

export default Friends;

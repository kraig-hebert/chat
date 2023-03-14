import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './badgeStyles';

const Badge = (props) => {
  const { badgeCount } = props;
  const classes = useStyles({ badgeCount });
  return <div className={classes.badge}>{badgeCount}</div>;
};

Badge.propTypes = {
  badgeCount: PropTypes.number,
};

export default Badge;

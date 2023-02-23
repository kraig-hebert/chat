import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './hangoutsStyles';

const Hangouts = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.hangouts}>Hangouts</div>;
};

Hangouts.propTypes = {};

export default Hangouts;

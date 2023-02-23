import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './hangoutsOptionsStyles';

const HangoutsOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.friendsOptions}>HangoutsOptions</div>;
};

HangoutsOptions.propTypes = {};

export default HangoutsOptions;

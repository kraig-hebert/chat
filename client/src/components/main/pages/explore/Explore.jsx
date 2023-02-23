import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './exploreStyles';

const Explore = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.explore}>Explore</div>;
};

Explore.propTypes = {};

export default Explore;

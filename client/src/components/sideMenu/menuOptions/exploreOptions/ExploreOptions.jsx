import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './exploreOptionsStyles';

const ExploreOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.exploreOptions}>ExploreOptions</div>;
};

ExploreOptions.propTypes = {};

export default ExploreOptions;

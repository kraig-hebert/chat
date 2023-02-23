import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './homeOptionsStyles';

const HomeOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.homeOptions}>HomeOptions</div>;
};

HomeOptions.propTypes = {};

export default HomeOptions;

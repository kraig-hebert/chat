import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './groupCardOptionsStyles';

const GroupCardOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.groupCardOptions}>GroupCardOptions</div>;
};

GroupCardOptions.propTypes = {};

export default GroupCardOptions;

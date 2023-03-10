import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './titleInputStyles';

const TitleInput = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.titleInput}>TitleInput</div>;
};

TitleInput.propTypes = {};

export default TitleInput;

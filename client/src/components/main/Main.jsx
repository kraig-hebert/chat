import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './mainStyles';

const Main = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.main}>Main</div>;
};

Main.propTypes = {};

export default Main;

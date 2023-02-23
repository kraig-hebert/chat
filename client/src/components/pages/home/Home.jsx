import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './hangoutsStyles';

const Home = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.home}>Home</div>;
};

Home.propTypes = {};

export default Home;

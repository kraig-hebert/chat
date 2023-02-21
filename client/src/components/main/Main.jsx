import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './mainStyles';
import UserBar from './userBar/UserBar';

const Main = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <UserBar />
    </div>
  );
};

Main.propTypes = {};

export default Main;

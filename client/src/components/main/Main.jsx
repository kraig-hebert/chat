import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './mainStyles';
import UserBar from './userBar/UserBar';
import DirectMessages from '../pages/directMessages/DirectMessages';

const Main = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <UserBar />
      <Routes>
        <Route path="/" element={<DirectMessages />} />
      </Routes>
    </div>
  );
};

Main.propTypes = {};

export default Main;

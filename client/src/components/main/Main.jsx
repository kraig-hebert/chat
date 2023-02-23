import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './mainStyles';
import UserBar from './userBar/UserBar';
import DirectMessages from './pages/directMessages/DirectMessages';
import Home from './pages/home/Home';
import Friends from './pages/friends/Friends';
import Hangouts from './pages/hangouts/Hangouts';
import Explore from './pages/explore/Explore';
import Settings from './pages/settings/Settings';

const Main = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <UserBar />
      <Routes>
        <Route path="/" element={<DirectMessages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/direct-messages" element={<DirectMessages />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/hangouts" element={<Hangouts />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

Main.propTypes = {};

export default Main;

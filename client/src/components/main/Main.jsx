import React, { useRef, useLayoutEffect, useState } from 'react';
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
  const mainRef = useRef();
  const [routeHeight, setRouteHeight] = useState();

  useLayoutEffect(() => {
    setRouteHeight(mainRef.current.offsetHeight + 50);
  });
  return (
    <div className={classes.main} ref={mainRef}>
      <UserBar />
      <Routes>
        <Route path="/" element={<DirectMessages height={routeHeight} />} />
        <Route path="/home" element={<Home height={routeHeight} />} />
        <Route
          path="/direct-messages"
          element={<DirectMessages height={routeHeight} />}
        />
        <Route path="/friends" element={<Friends height={routeHeight} />} />
        <Route path="/hangouts" element={<Hangouts height={routeHeight} />} />
        <Route path="/explore" element={<Explore height={routeHeight} />} />
        <Route path="/settings" element={<Settings height={routeHeight} />} />
      </Routes>
    </div>
  );
};

Main.propTypes = {};

export default Main;

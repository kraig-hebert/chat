import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './homeStyles';
import HomePanel from './homePanel/HomePanel';
import MessagesPanel from './messagesPanel/MessagesPanel';
import FriendsPanel from './friendsPanel/FriendsPanel';
import HangoutsPanel from './hangoutsPanel/HangoutsPanel';

const Home = (props) => {
  const { height } = props;
  const classes = useStyles({ height });

  return (
    <div className={classes.home}>
      <div className={classes.homePanelRow}>
        <HomePanel children={<MessagesPanel />} title="Newest Messages" />
      </div>
      <div className={classes.homePanelRow}>
        <HomePanel children={<FriendsPanel />} title="Friend Requests" />
        <HomePanel children={<HangoutsPanel />} title="Hangouts Activity" />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;

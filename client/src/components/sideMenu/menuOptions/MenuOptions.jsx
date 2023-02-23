import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './menuOptionsStyles';
import MenuSearchInput from './menuSearchInput/MenuSearchInput';
import DirectMessagesOptions from './directMessagesOptions/DirectMessagesOptions';
import HomeOptions from './homeOptions/HomeOptions';
import FriendsOptions from './friendsOptions/FriendsOptions';
import HangoutsOptions from './hangoutsOptions/HangoutsOptions';
import ExploreOptions from './exploreOptions/ExploreOptions';
import SettingsOptions from './settingsOptions/SettingsOptions';

const MenuOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.menuOptions}>
      <MenuSearchInput />
      <Routes>
        <Route path="/" element={<DirectMessagesOptions />} />
        <Route path="/home" element={<HomeOptions />} />
        <Route path="/direct-messages" element={<DirectMessagesOptions />} />
        <Route path="/friends" element={<FriendsOptions />} />
        <Route path="/hangouts" element={<HangoutsOptions />} />
        <Route path="/explore" element={<ExploreOptions />} />
        <Route path="/settings" element={<SettingsOptions />} />
      </Routes>
    </div>
  );
};

MenuOptions.propTypes = {};

export default MenuOptions;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { IoSearchCircleOutline, IoSearchCircle } from 'react-icons/io5';

import { useStyles } from './menuOptionsStyles';
import TextInput from '../../common/textInput/TextInput';
import DirectMessagesOptions from './directMessagesOptions/DirectMessagesOptions';
import HomeOptions from './homeOptions/HomeOptions';
import FriendsOptions from './friendsOptions/FriendsOptions';
import HangoutsOptions from './hangoutsOptions/HangoutsOptions';
import ExploreOptions from './exploreOptions/ExploreOptions';
import SettingsOptions from './settingsOptions/SettingsOptions';

const MenuOptions = (props) => {
  const {} = props;
  const classes = useStyles();
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={classes.menuOptions}>
      <TextInput
        width="80%"
        height="30px"
        backgroundColor={theme.mainBG.main}
        textColor={theme.light.main}
        placeholder="Search"
        inputValue={inputValue}
        setInputValue={setInputValue}
        Icon={IoSearchCircleOutline}
        FocusedIcon={IoSearchCircle}
      />

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

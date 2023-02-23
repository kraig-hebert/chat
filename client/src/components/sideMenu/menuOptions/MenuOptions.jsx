import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './menuOptionsStyles';
import MenuSearchInput from './menuSearchInput/MenuSearchInput';
import DirectMessagesOptions from './directMessagesOptions/DirectMessagesOptions';

const MenuOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.menuOptions}>
      <MenuSearchInput />
      <Routes>
        <Route path="/" element={<DirectMessagesOptions />} />
      </Routes>
    </div>
  );
};

MenuOptions.propTypes = {};

export default MenuOptions;

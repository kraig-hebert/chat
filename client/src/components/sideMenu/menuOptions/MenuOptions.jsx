import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './menuOptionsStyles';
import MenuSearchInput from './menuSearchInput/MenuSearchInput';
import DirectMessageOptions from './directMessageOptions/DirectMessageOptions';

const MenuOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.menuOptions}>
      <MenuSearchInput />
      <Routes>
        <Route path="/" element={<DirectMessageOptions />} />
      </Routes>
    </div>
  );
};

MenuOptions.propTypes = {};

export default MenuOptions;

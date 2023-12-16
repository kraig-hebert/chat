import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './sideMenuStyles';
import Menu from './menu/Menu';
import MenuOptions from './menuOptions/MenuOptions';

const SideMenu = (props) => {
  const {} = props;

  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <Menu />
      <MenuOptions />
    </div>
  );
};

SideMenu.propTypes = {};

export default SideMenu;

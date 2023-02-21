import React from 'react';
import PropTypes from 'prop-types';
import {
  IoChatboxOutline,
  IoChatbox,
  IoHomeOutline,
  IoHome,
  IoPeopleOutline,
  IoPeople,
  IoBusinessOutline,
  IoBusiness,
  IoSettings,
  IoSettingsOutline,
} from 'react-icons/io5';

import MenuIcon from './menuIcon/MenuIcon';
import { useStyles } from './menuStyles';

const Menu = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <div className={classes.upperIcons}>
        <MenuIcon icon={<IoHomeOutline />} hoverIcon={<IoHome />} />
        <MenuIcon icon={<IoChatboxOutline />} hoverIcon={<IoChatbox />} />
        <MenuIcon icon={<IoPeopleOutline />} hoverIcon={<IoPeople />} />
        <MenuIcon icon={<IoBusinessOutline />} hoverIcon={<IoBusiness />} />
      </div>
      <div className={classes.lowerIcons}>
        <MenuIcon icon={<IoSettings />} hoverIcon={<IoSettingsOutline />} />
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;

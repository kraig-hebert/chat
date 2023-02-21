import React, { useRef } from 'react';
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
        <MenuIcon
          icon={<IoHomeOutline />}
          activeIcon={<IoHome />}
          menuName="home"
        />
        <MenuIcon
          icon={<IoChatboxOutline />}
          activeIcon={<IoChatbox />}
          menuName="direct-messages"
        />
        <MenuIcon
          icon={<IoPeopleOutline />}
          activeIcon={<IoPeople />}
          menuName="friends"
        />
        <MenuIcon
          icon={<IoBusinessOutline />}
          activeIcon={<IoBusiness />}
          menuName="rooms"
        />
      </div>
      <div className={classes.lowerIcons}>
        <MenuIcon
          icon={<IoSettingsOutline />}
          activeIcon={<IoSettings />}
          menuName="settings"
        />
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;

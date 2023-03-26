import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  selectActiveMenu,
  menuIconSelected,
} from '../../../../reducers/appSettings';
import { useStyles } from './menuIconStyles';

const MenuIcon = (props) => {
  const { icon, activeIcon, menuName } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeMenu = useSelector(selectActiveMenu);
  const handleIconClick = () => {
    dispatch(menuIconSelected(menuName));
    navigate(`${menuName}`);
  };

  return (
    <div className={classes.menuIcon} onClick={handleIconClick}>
      {activeMenu === menuName ? activeIcon : icon}
    </div>
  );
};

MenuIcon.propTypes = {
  icon: PropTypes.objectOf(Symbol),
  activeIcon: PropTypes.objectOf(Symbol),
  menuName: PropTypes.string,
};

export default MenuIcon;

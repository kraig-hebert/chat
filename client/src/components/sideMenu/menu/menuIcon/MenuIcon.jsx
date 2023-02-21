import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './menuIconStyles';

const MenuIcon = (props) => {
  const { icon, hoverIcon } = props;
  const classes = useStyles();

  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={classes.menuIcon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? icon : hoverIcon}
    </div>
  );
};

MenuIcon.propTypes = {
  icon: PropTypes.objectOf(Symbol),
  hoverIcon: PropTypes.objectOf(Symbol),
};

export default MenuIcon;

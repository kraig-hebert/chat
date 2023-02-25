import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';

import { useStyles } from './actionIconStyles';

const ActionIcon = (props) => {
  const { icon, hoverIcon } = props;
  const theme = useTheme();
  const classes = useStyles();

  const [currentIcon, setCurrentIcon] = useState(icon);
  const handleMouseEnter = () => setCurrentIcon(hoverIcon);
  const handleMouseLeave = () => setCurrentIcon(icon);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {currentIcon}
    </div>
  );
};

ActionIcon.propTypes = {
  icon: PropTypes.objectOf(Symbol),
  hoverIcon: PropTypes.objectOf(Symbol),
};

export default ActionIcon;

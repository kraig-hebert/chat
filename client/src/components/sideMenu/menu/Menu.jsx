import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './menuStyles';

const Menu = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.menu}>Menu</div>;
};

Menu.propTypes = {};

export default Menu;

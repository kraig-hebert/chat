import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './menuOptionsStyles';

const MenuOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.menuOptions}>MenuOptions</div>;
};

MenuOptions.propTypes = {};

export default MenuOptions;

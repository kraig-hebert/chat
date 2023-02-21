import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './menuOptionsStyles';
import MenuSearchInput from './menuSearchInput/MenuSearchInput';

const MenuOptions = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.menuOptions}>
      <MenuSearchInput />
    </div>
  );
};

MenuOptions.propTypes = {};

export default MenuOptions;

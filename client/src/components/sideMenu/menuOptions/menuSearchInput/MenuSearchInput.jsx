import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './menuSearchInputStyles';

const MenuSearchInput = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.menuSearchInput}>
      <span className={classes.inputPlaceholder}>Search</span>
      <input type="text" className={classes.input} />
    </div>
  );
};

MenuSearchInput.propTypes = {};

export default MenuSearchInput;

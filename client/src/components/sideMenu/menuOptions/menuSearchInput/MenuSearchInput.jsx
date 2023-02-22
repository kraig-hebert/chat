import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IoSearchCircleOutline, IoSearchCircle } from 'react-icons/io5';
import { useStyles } from './menuSearchInputStyles';

const MenuSearchInput = (props) => {
  const {} = props;
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={classes.menuSearchInput}>
      {isFocused ? (
        <IoSearchCircle className={classes.activeSearchIcon} />
      ) : (
        <IoSearchCircleOutline className={classes.searchIcon} />
      )}

      <input
        type="text"
        className={classes.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!inputValue && (
        <span className={classes.inputPlaceholder}>Search...</span>
      )}
    </div>
  );
};

MenuSearchInput.propTypes = {};

export default MenuSearchInput;

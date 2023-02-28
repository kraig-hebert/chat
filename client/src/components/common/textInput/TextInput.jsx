import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './textInputStyles';

const TextInput = (props) => {
  const {
    width,
    height,
    placeholder,
    inputValue,
    setInputValue,
    Icon,
    FocusedIcon,
  } = props;
  const classes = useStyles({ width, height });
  const [isFocused, setIsFocused] = useState(false);

  let customIcon;
  if (isFocused) customIcon = <FocusedIcon className={classes.focusedIcon} />;
  else customIcon = <Icon className={classes.icon} />;

  return (
    <div className={classes.textInputContainer}>
      {customIcon}
      <input
        type="text"
        className={classes.textInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!inputValue && (
        <span className={classes.inputPlaceholder}>{placeholder}...</span>
      )}
    </div>
  );
};

TextInput.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  Icon: PropTypes.symbol,
  FocusedIcon: PropTypes.symbol,
};

export default TextInput;

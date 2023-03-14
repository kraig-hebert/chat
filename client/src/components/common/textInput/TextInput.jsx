import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoBackspace } from 'react-icons/io5';

import { useStyles } from './textInputStyles';

const TextInput = (props) => {
  const {
    width,
    height,
    backgroundColor,
    textColor,
    placeholder,
    inputValue,
    setInputValue,
    Icon,
    FocusedIcon,
  } = props;
  const classes = useStyles({ width, height, backgroundColor, textColor });
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  let customIcon;
  if (Icon && FocusedIcon) {
    if (isFocused) customIcon = <FocusedIcon className={classes.focusedIcon} />;
    else customIcon = <Icon className={classes.icon} />;
  }

  const handleClearClick = () => setInputValue('');

  useEffect(() => {
    function handleClick(event) {
      if (inputRef.current && !inputRef.current.contains(event.target))
        setIsFocused(false);
    }
    if (isFocused) document.addEventListener('click', handleClick);
    else document.removeEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isFocused]);

  return (
    <div className={classes.container}>
      <div className={classes.textInputContainer} ref={inputRef}>
        {customIcon}
        <IoBackspace className={classes.clearIcon} onClick={handleClearClick} />
        <input
          type="text"
          className={classes.textInput}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {!inputValue && (
          <span className={classes.inputPlaceholder}>{placeholder}...</span>
        )}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  Icon: PropTypes.func,
  FocusedIcon: PropTypes.func,
};

export default TextInput;

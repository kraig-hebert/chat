import React, { useRef, useEffect, forwardRef, useState } from 'react';
import { IoSave, IoCloseCircle } from 'react-icons/io5';
import { RiSave3Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';

import useClickBlocking from '../../../../../../hooks/useClickBlocking';
import { useStyles } from './titleInputStyles';

const TitleInput = (props) => {
  const {
    groupInfoHeight,
    inputIsFocused,
    setInputIsFocused,
    titleInputValue,
    setTitleInputValue,
  } = props;

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const closeIconRef = useRef(null);
  const checkIconRef = useRef(null);

  const [initialValue, setInitialValue] = useState(titleInputValue);

  useClickBlocking(containerRef, inputRef, inputIsFocused);

  const classes = useStyles({
    groupInfoHeight,
    inputIsFocused,
  });

  const handleClearClick = () => {
    setTitleInputValue('');
  };

  const handleResetClick = () => {
    setTitleInputValue(initialValue);
    inputRef.current.focus();
  };

  const handleCancelIconClick = () => {
    setTitleInputValue(initialValue);
    setInputIsFocused(false);
  };

  const handleSaveIconClick = () => {
    setInputIsFocused(false);
    setInitialValue(titleInputValue);
  };

  const Icon = forwardRef((props, ref) => {
    return (
      <div className={props.className} ref={ref} onClick={props.onClick}>
        {props.children}
      </div>
    );
  });

  useEffect(() => {
    if (inputIsFocused) inputRef.current.focus();
  }, [inputIsFocused]);

  return (
    <div className={classes.titleInputContainer} ref={containerRef}>
      <div className={classes.iconsContainer}>
        <Icon
          children={
            <IoCloseCircle
              className={classes.cancelIcon}
              onClick={handleCancelIconClick}
            />
          }
          ref={closeIconRef}
        />
        <Icon
          children={
            <IoSave
              className={
                titleInputValue !== ''
                  ? classes.successIcon
                  : classes.disabledIcon
              }
              onClick={handleSaveIconClick}
            />
          }
          ref={checkIconRef}
        />
      </div>
      <input
        type="text"
        className={classes.titleInput}
        value={titleInputValue}
        onChange={(e) => setTitleInputValue(e.target.value)}
        ref={inputRef}
      />
      <div className={classes.bottomBorder}>
        <div className={classes.wordsContainer}>
          <p onClick={handleClearClick}>clear</p>
          <p onClick={handleResetClick}>reset</p>
        </div>
      </div>
    </div>
  );
};

TitleInput.propTypes = {
  groupInfoHeight: PropTypes.number,
  inputIsFocused: PropTypes.bool,
  setInputIsFocused: PropTypes.func,
  titleInputValue: PropTypes.string,
  setTitleInputValue: PropTypes.func,
};

export default TitleInput;

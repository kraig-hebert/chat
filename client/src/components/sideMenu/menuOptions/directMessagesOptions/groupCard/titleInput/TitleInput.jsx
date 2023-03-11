import React, { useRef, useEffect } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import PropTypes from 'prop-types';

import { useStyles } from './titleInputStyles';

const TitleInput = (props) => {
  const { groupInfoHeight, inputIsFocused, setInputIsFocused } = props;
  const classes = useStyles({
    groupInfoHeight,
    inputIsFocused,
  });

  const inputRef = useRef(null);

  const handleBlur = () => setInputIsFocused(false);
  useEffect(() => {
    if (inputIsFocused) inputRef.current.focus();
  }, [inputIsFocused]);

  return (
    <div className={classes.titleInputContainer}>
      <input
        type="text"
        className={classes.titleInput}
        onBlur={handleBlur}
        ref={inputRef}
      />
      <IoCheckmarkCircle className={classes.icon} />
    </div>
  );
};

TitleInput.propTypes = {
  groupInfoHeight: PropTypes.number,
  inputIsFocused: PropTypes.bool,
  setInputIsFocused: PropTypes.func,
};

export default TitleInput;

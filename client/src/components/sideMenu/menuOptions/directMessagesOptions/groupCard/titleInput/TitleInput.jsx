import React, { useRef } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import PropTypes from 'prop-types';

import { useStyles } from './titleInputStyles';

const TitleInput = (props) => {
  const { titleInputVisible, setTitleInputVisible, groupInfoHeight } = props;
  const setStyles = () => {
    if (titleInputVisible) return { width: '100%', groupInfoHeight };
    else return { width: '0px', groupInfoHeight };
  };
  const classes = useStyles(setStyles());

  return (
    <div className={classes.titleInputContainer}>
      <input type="text" className={classes.titleInput} />
      <IoCheckmarkCircle className={classes.icon} />
    </div>
  );
};

TitleInput.propTypes = {
  titleInputVisible: PropTypes.bool,
  setTitleInputVisible: PropTypes.func,
  groupInfoHeight: PropTypes.object,
};

export default TitleInput;

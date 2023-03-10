import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './titleInputStyles';

const TitleInput = (props) => {
  const { titleInputVisible, setTitleInputVisible, groupInfoHeight } = props;
  const setStyles = () => {
    if (titleInputVisible) return { width: '100%', groupInfoHeight };
    else return { width: '0px', groupInfoHeight };
  };
  const classes = useStyles(setStyles());
  return <input type="text" className={classes.titleInput} />;
};

TitleInput.propTypes = {
  titleInputVisible: PropTypes.bool,
  setTitleInputVisible: PropTypes.func,
  groupInfoHeight: PropTypes.number,
};

export default TitleInput;

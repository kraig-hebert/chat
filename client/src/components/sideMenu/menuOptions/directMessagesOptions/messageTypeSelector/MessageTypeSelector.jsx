import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './messageTypeSelectorStyles';

const MessageTypeSelector = (props) => {
  const { selectedType, setSelectedType } = props;

  const setStyles = () => {
    if (selectedType === 'solo')
      return {
        left: '100%',
        transform: 'translateX(-104%)',
      };
    else if (selectedType == 'group')
      return {
        left: '3px',
        transform: 'translateX(0)',
      };
  };

  const classes = useStyles(setStyles());

  const handleThumbClick = () => {
    if (selectedType === 'solo') setSelectedType('group');
    else if (selectedType === 'group') setSelectedType('solo');
  };

  return (
    <div className={classes.messageTypeSelector}>
      <span>Solo</span>
      <span>Group</span>
      <div className={classes.selectorThumb} onClick={handleThumbClick}></div>
    </div>
  );
};

MessageTypeSelector.propTypes = {
  selectedType: PropTypes.string,
  setSelectedType: PropTypes.func,
};

export default MessageTypeSelector;
